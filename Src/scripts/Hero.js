function Hero(game, x, y) {
  // call Phaser.Sprite constructor
  Phaser.Sprite.call(this, game, x, y, 'hero');
  this.anchor.set(0.5, 0.5);
  this.game.physics.enable(this);
  this.body.collideWorldBounds = true;

}

// inherit from Phaser.Sprite
Hero.prototype = Object.create(Phaser.Sprite.prototype);
Hero.prototype.constructor = Hero;

// add this method –and the ongoing Hero methods– AFTER these lines, or you
// will override them when cloning the Phaser.Sprite prototype
//
// Hero.prototype = Object.create(Phaser.Sprite.prototype);
// Hero.prototype.constructor = Hero;

Hero.prototype.move = function (direction) {
  const SPEED = 200;
  this.body.velocity.x = direction * SPEED;
};

export {Hero};