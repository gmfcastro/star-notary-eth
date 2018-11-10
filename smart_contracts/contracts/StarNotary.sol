pragma solidity ^0.4.24;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721.sol";

contract StarNotary is ERC721 {

    struct Star {
        string name;
        string story;
        string ra;
        string dec;
        string mag;
        string cent;
    }

    mapping(uint256 => Star) public tokenIdToStarInfo;
    mapping(uint256 => uint256) public starsForSale;
    Star[] private stars;

    function createStar(
        string _name,
        string _story,
        string _ra,
        string _dec,
        string _mag,
        string _cent,
        uint256 _tokenId
    ) public {
        require(
            isNewStar(_ra, _dec, _mag, _cent), 
            "This star was already claimed"
        );
        Star memory newStar = Star(_name, _story, _ra, _dec, _mag, _cent);
        tokenIdToStarInfo[_tokenId] = newStar;
        stars.push(newStar);

        _mint(msg.sender, _tokenId);
    }

    function putStarUpForSale(uint256 _tokenId, uint256 _price) 
    public {
        require(
            this.ownerOf(_tokenId) == msg.sender,
            "You're are not the owner of the star"
        );
        
        starsForSale[_tokenId] = _price;
    }

    function buyStar(uint256 _tokenId) 
    public payable {
        require(
            starsForSale[_tokenId] > 0,
            "This star is not for sale"
        );

        uint256 starCost = starsForSale[_tokenId];
        address starOwner = this.ownerOf(_tokenId);
        require(
            msg.value >= starCost,
            "Not enough funds to buy the star"
        );

        _removeTokenFrom(starOwner, _tokenId);
        _addTokenTo(msg.sender, _tokenId);

        starOwner.transfer(starCost);

        if(msg.value > starCost) {
            msg.sender.transfer(msg.value - starCost);
        }
    }

    function checkIfStarExist(string _ra, string _dec, string _mag, string _cent) 
    public view
    returns(bool) {
        return !isNewStar(_ra, _dec, _mag, _cent);
    }

    function tokenIdToStarInfo(uint256 _tokenId) 
    public view returns( string, string, string, string, string, string ) {
        Star memory star = tokenIdToStarInfo[_tokenId];
        star.ra = strConcat("ra_", star.ra);
        star.dec = strConcat("dec_", star.dec);
        star.mag = strConcat("mag_", star.mag);
        star.cent = strConcat("cent_", star.cent);
        return (star.name, star.story, star.ra, star.dec, star.mag, star.cent);
    }

    function strConcat(string _stringA, string _stringB) 
    private pure returns (string) {
        bytes memory _stringABytes = bytes(_stringA);
        bytes memory _stringBBytes = bytes(_stringB);
        string memory _stringAB = new string(_stringABytes.length + _stringBBytes.length);
        bytes memory _stringABBytes = bytes(_stringAB);
        uint k = 0;
        for (uint i = 0; i < _stringABytes.length; i++) _stringABBytes[k++] = _stringABytes[i];
        for (i = 0; i < _stringBBytes.length; i++) _stringABBytes[k++] = _stringBBytes[i];
        return string(_stringABBytes);
    }

    function isNewStar(string _ra, string _dec, string _mag, string _cent)
    private view
    returns(bool) {
        for (uint i = 0; i < stars.length; i++) {
            Star memory star = stars[i];

            if(keccak256(bytes(star.ra)) == keccak256(bytes(_ra)) && 
               keccak256(bytes(star.dec)) == keccak256(bytes(_dec)) && 
               keccak256(bytes(star.mag)) == keccak256(bytes(_mag)) && 
               keccak256(bytes(star.cent)) == keccak256(bytes(_cent)) ) {
                return false;
            }
        }

        return true;
    }
}