//size of grid squares
incx=101;
incy=83;
gridsizex=5;
gridsizey=6;
//coordinates of top left point
minx=0;
miny=-28;
//Starting point of hero character
startx=2;
starty=5;

// Enemies our player must avoid
var Enemy = function(x,y, speed) {
    this.sprite = 'images/enemy-bug.png';
    this.x=x;
    this.y=y;
    this.actualx = minx + x*incx;
    this.actualy = miny + y*incy;
    this.start = 0;
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    if (this.actualx < (incx * gridsizex)){
	this.actualx += this.speed * dt;
	this.x=Math.floor(this.actualx/incx);
    }
    else{
	this.actualx = this.start;
    }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.actualx, this.actualy);

};

//Player class
class Hero {

    constructor(){
	this.sprite = "images/char-boy.png";
	this.actualx = minx+incx*startx;
	this.actualy = miny+incy*starty;
	this.x=startx;
	this.y=starty;
  this.win = false
    }


    //Draw the hero on the x and y
    render (){
	ctx.drawImage(Resources.get(this.sprite), this.actualx, this.actualy);
    }

    handleInput(input){
        switch (input) {
	case 'left':
	    if (this.actualx > minx){
		this.actualx -= incx;
		this.x-=1;}
            break;
	case 'up':
	    if(this.actualy > miny){
		this.actualy -= incy;
		this.y-=1;}
            break;
	case 'right':
	    if (this.actualx < (minx + (incx * (gridsizex-1)))){
		this.actualx += incx;
		this.x+=1;}
            break;
	case 'down':
	    if (this.actualy < (miny + (incy * (gridsizey-1)))){
		this.actualy += incy;
		this.y+=1;}
            break;
          }
    }

    update(){
	for(let enemy of allEnemies){
	    if(this.y === enemy.y && this.x===enemy.x){
		     swal({
          title: "Colision!",
          text: "oh no the ladybugs got you!",
          icon: "error",
          button: "Try Again",
          });
    this.actualx = minx+incx*startx;
    this.actualy = miny+incy*starty;
    this.x=startx;
    this.y=starty;}
      if (this.actualy < (miny+incy)){
        swal({
          title: "You made it!",
          text: "Play again!",
          icon: "success",
          });
    this.actualx = minx+incx*startx;
    this.actualy = miny+incy*starty;
    this.x=startx;
    this.y=starty;}
    }
  }
}



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

const player = new Hero();
const ladybug1 = new Enemy (0, 1, 200);

const ladybug2 = new Enemy (0, 2, 300);

const ladybug3 = new Enemy (0, 3, 290);


const allEnemies =[];
allEnemies.push(ladybug1, ladybug2, ladybug3);


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
