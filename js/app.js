
// Enemies our player must avoid
var Enemy = function(x,y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images

    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y + 55;
    this.movex = 101;
    this.start1 = -this.movex;
    this.speed = speed;

    console.log('beep')
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    if (this.x < this.movex * 5){
    this.x += 100 * dt;
  }
  else{
    this.x = this.start1;
  }
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Hero {
    constructor(){
      this.movex = 101;
      this.movey = 83;
      this.startx =  this.movex * 2;
      this.starty = (this.movey * 5) - 20;
      this.sprite = "images/char-boy.png";
      this.x = this.startx;
      this.y = this.starty;
    }
//Draw the hero on the x and y
render (){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  handleInput(input){
          switch (input) {
      case 'left':
      if (this.x > 0){
        this.x -= this.movex;
      }
          break;
      case 'up':
      if(this.y > 0){
        this.y -= this.movey;
      }
          break;
      case 'right':
        if (this.x < this.movex * 4){
        this.x += this.movex;
      }
          break;
      case 'down':
      if (this.y < this.movey * 4){
        this.y += this.movey;
      }
          break;

    }
  }
}

const player = new Hero();
const ladybug1 = new Enemy (-101, 0, 100);
//ladybug1.x = -101;
//ladybug1.y = 0;
const ladybug2 = new Enemy (-101, 83, 500);
//ladybug2.x = -101;
//ladybug2.y - 83;
const ladybug3 = new Enemy ((-101*2.5), 83, 350);
const ladybug4 = new Enemy ((-101*2.5), 166, 250);
const ladybug5 = new Enemy ((-101*5), 166, 1000);

const allEnemies =[];
allEnemies.push(ladybug1, ladybug2, ladybug3, ladybug4, ladybug5);

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies

// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
