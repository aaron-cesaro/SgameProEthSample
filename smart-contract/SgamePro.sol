pragma solidity ^0.4.21;

contract SgamePro {
    string name;
    string game;
    uint score;
    
    event Player(
        string name,
        string game,
        uint score
    );
    
    function setPlayer(string _name, string _game, uint _score) public {
        name = _name;
        game = _game;
        score = _score;
        Player(_name, _game, _score);
    }
    
    function getPlayer() public constant returns(string, string, uint) {
        return (name, game, score);
    }
}