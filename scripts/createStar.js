const StarNotary = artifacts.require('StarNotary')

module.exports = async function (callback) {
    try {
        const starNotary = await StarNotary.at('0x07a3e16109d63868e86ec04407d9ca96a252ba91')
        await starNotary.putStarUpForSale(3, web3.toWei(.05, "ether"));
    } catch(error) { 
        console.log(error);
    } finally {
        callback();
    }
}