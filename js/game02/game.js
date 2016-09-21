function Game(gameArea) {
    this.players = [];
    World.call(this, gameArea);
}
Game.prototype = Object.create(World.prototype);

Game.prototype.addSprite = function (player) {
    this.players.push(player);
    this.moveRandom(player);
    this.addElement(player);
    player.updatePosition();
    this.currentElement = player;
};

Game.prototype.addPlayer = function (player) {
    this.players.push(player);
    this.addElement(player);
    this.currentElement = player;
    player.world.moveRandom(player);
};
