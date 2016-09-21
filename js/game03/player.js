function Player(symbol) {
    this.health = 3;
    Sprite.call(this, symbol);
}
Player.prototype = Object.create(Sprite.prototype);
