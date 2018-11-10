const StarNotary = artifacts.require('StarNotary')

contract('StarNotary', accounts => {

    beforeEach(async function() {
        this.contract = await StarNotary.new({from: accounts[0]})
    })

    describe('can create a star', () => {
        it('can create a star and get its info', async function () {
            console.log(accounts[0]);
            await this.contract.createStar(
                "awesome star!",
                "story",
                "ra",
                "dec",
                "mag",
                "cent",
                1,
                {from: accounts[0]}
            );

            const star = await this.contract.tokenIdToStarInfo.call(1);

            assert.equal(star[0], 'awesome star!');
            assert.equal(star[1], 'story');
            assert.equal(star[2], 'ra_ra');
            assert.equal(star[3], 'dec_dec');
            assert.equal(star[4], 'mag_mag');
            assert.equal(star[5], 'cent_cent');
        });

        it('can create a star with different coordinates and get its info', async function () {

            await this.contract.createStar(
                "awesome star!",
                "story",
                "ra",
                "dec",
                "mag",
                "cent",
                1,
                {from: accounts[0]}
            );
            
            await this.contract.createStar(
                "awesome star!",
                "story",
                "ra2",
                "dec",
                "mag",
                "cent",
                2,
                {from: accounts[0]}
            );

            const star = await this.contract.tokenIdToStarInfo.call(2);

            assert.equal(star[0], 'awesome star!');
            assert.equal(star[1], 'story');
            assert.equal(star[2], 'ra_ra2');
            assert.equal(star[3], 'dec_dec');
            assert.equal(star[4], 'mag_mag');
            assert.equal(star[5], 'cent_cent');
        });
    });

    describe('cannot create a star', () => {
        it('with same tokenId', async function () {
            try {
                await this.contract.createStar(
                    "awesome star!",
                    "story",
                    "ra",
                    "dec",
                    "mag",
                    "cent",
                    1,
                    {from: accounts[0]}
                );

                await this.contract.createStar(
                    "awesome star!",
                    "story2",
                    "ra2",
                    "dec2",
                    "mag2",
                    "cent2",
                    1,
                    {from: accounts[0]}
                );
            } catch(error) {
                return assert.ok(true);
            }

            return assert.fail();
        });

        it('with same coordinates', async function () {
            try {
                await this.contract.createStar(
                    "awesome star!",
                    "story",
                    "ra",
                    "dec",
                    "mag",
                    "cent",
                    1,
                    {from: accounts[0]}
                );

                await this.contract.createStar(
                    "awesome star!",
                    "story",
                    "ra",
                    "dec",
                    "mag",
                    "cent",
                    2,
                    {from: accounts[0]}
                );
            } catch(error) {
                return assert.ok(true);
            }

            return assert.fail();
        });
    })

    describe("star existence", () => {
        let user1 = accounts[1];

        it("should be able to check if star exists", async function () {
            await this.contract.createStar("awesome star!",
            "story",
            "ra",
            "dec",
            "mag",
            "cent",
            1,
            {from: user1});

            assert.equal(true, await this.contract.checkIfStarExist(
                "ra",
                "dec",
                "mag",
                "cent",
                {from: user1}
            ));
        });

        it("should be able to check if star doesn't exists", async function () {
            await this.contract.createStar("awesome star!",
            "story",
            "ra",
            "dec",
            "mag",
            "cent",
            1,
            {from: user1});

            assert.equal(false, await this.contract.checkIfStarExist(
                "ra1",
                "dec1",
                "mag1",
                "cent1",
                {from: user1}
            ));
        });
    })

    describe('buying and selling stars', () => {
        let user1 = accounts[1]
        let user2 = accounts[2]

        let starId = 1
        let starId2 = 2
        let starPrice = web3.toWei(.03, "ether")
        let starPrice2 = web3.toWei(.01, "ether")

        beforeEach(async function () {
            await this.contract.createStar(
                'awesome star!',
                "story",
                "ra",
                "dec",
                "mag",
                "cent",
                starId,
                {from: user1}
            );

            await this.contract.createStar(
                'awesome star!',
                "story",
                "ra2",
                "dec2",
                "mag2",
                "cent2",
                starId2,
                {from: user1}
            );
        })

        it('user1 can put up their star for sale', async function () {
            assert.equal(await this.contract.ownerOf(starId), user1)
            await this.contract.putStarUpForSale(starId, starPrice, {from: user1})

            assert.equal(await this.contract.starsForSale(starId), starPrice)
        })

        describe('user2 can buy a star that was put up for sale', () => {
            beforeEach(async function () {
                await this.contract.putStarUpForSale(starId, starPrice, {from: user1})
                await this.contract.putStarUpForSale(starId2, starPrice2, {from: user1})
            })

            it('user2 is the owner of the star after they buy it', async function() {
                await this.contract.buyStar(starId, {from: user2, value: starPrice, gasPrice: 0})
                assert.equal(await this.contract.ownerOf(starId), user2)
            })

            it('user2 ether balance changed correctly', async function () {
                let overpaidAmount = web3.toWei(.06, 'ether')
                const balanceOfBuyerBefore = web3.eth.getBalance(user2)
                const balanceOfOwnerBefore = web3.eth.getBalance(user1)
                await this.contract.buyStar(starId, {from: user2, value: overpaidAmount, gasPrice: 0})
                let balanceOfBuyerAfter = web3.eth.getBalance(user2)
                let balanceOfOwnerAfter = web3.eth.getBalance(user1)
                
                assert.equal(balanceOfBuyerBefore.sub(balanceOfBuyerAfter), starPrice)
                assert.equal(balanceOfOwnerAfter.sub(balanceOfOwnerBefore), starPrice)

                await this.contract.buyStar(starId2, {from: user2, value: overpaidAmount, gasPrice: 0})

                balanceOfBuyerAfter = web3.eth.getBalance(user2)
                balanceOfOwnerAfter = web3.eth.getBalance(user1)

                const priceInDecimal = Number(web3.fromWei(starPrice, "ether"));
                const price2InDecimal = Number(web3.fromWei(starPrice2, "ether"));
                const expectedPriceSum = priceInDecimal + price2InDecimal;

                assert.equal(balanceOfBuyerBefore.sub(balanceOfBuyerAfter), web3.toWei(expectedPriceSum, "ether"));
                assert.equal(balanceOfOwnerAfter.sub(balanceOfOwnerBefore), web3.toWei(expectedPriceSum, "ether"));
            })
        })
    })
})