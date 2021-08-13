var y=-20;
var x=200;
var fruitspeed = 2;
var fruitscore= 0;
var fruithighscore = 0;

function fruitgameSetup(){
  fruitgameIsOver = false
}

function fruitgame(){
  fruit = true
  
  background(gameoverbg)
  if (fruit === true){
    rectMode(CENTER)
  }
  playfruit.hide();
  ellipse(x,y,20,20)
  image(peach,x-25,y-28,55,55)
  //rect(mouseX,height-10,50,30)
  if (pet === 'cinna'){
  image(cinnabasket, mouseX-50,450,100,100)
  }
  if (pet === 'purin'){
  image(pombasket, mouseX-50,450,100,100)
  }
	y+= fruitspeed;
  if(y>height){
  	fruitgameIsOver = true
	 }
  if(y>height-10 && x>mouseX-20 && x<mouseX+20){
  	y=-20
    fruitspeed+=.5
    fruitscore+= 1
    click2.play();
  }
	if(y==-20){
  	randomfruit();
  }
  textshadow(`highscore: ${fruithighscore}`, 30, 35);
  textshadow("score: " + fruitscore, 30,20)
    if (fruitgameIsOver === true){
      rectMode(CORNER)
      endScreen();
    }
}
function randomfruit(){
	x= random(20,width-20)
}
function endScreen(){
  if (fruitscore > fruithighscore) {
      fruithighscore = fruitscore;
    }
    coinsback = fruitscore/5;
    let getcoins = round(coinsback);
    coins = coins + getcoins;
    noLoop();
    errortext(`    Game Over! \n You got ${getcoins} coins`)
}

function fruitRestart(){
	  fruitscore=0;
  	fruitspeed=2;
  	y=-20;
    fruitgameIsOver = false
}