function froggergameSetup(){  
  frogX = random(width, 10, 480);
  frogY = 470;
  frogD = 20;
  fscore = 0;
  flives = 3;
  fhighscore = 0
  fgameIsOver = false;
  cutecarimg = cutecarleft
  
  goalline = 50
  cars = [];
  numberOfCars = 6;
  
  for (let i = 0; i < numberOfCars; i++) {
    cars.push(new Car());
  }
  cars.push(new Car())

}

function froggergame(){
   background(froggerbg);
  
  rectMode(CORNER)
  frogger = true;
  hideall();
  for (let i = 0; i < cars.length; i++) {
    const car = cars[i];
    car.move();
    car.draw();
    car.checkCollisions();

  }
  fill("#f58282");
  rect(0, 0, width, goalline)
  image(frog, frogX, frogY)
  
    checkWin();
    displayScores();
  if (frogY > 480){
    frogY = 480
  }
  if (frogX < 0){
    frogX = 0
  }
  if (frogX > 480){
    frogX=480
  }
}

function keyPressed() {/// controls
  if (minigame === 3) {
    if (keyCode === UP_ARROW && minigame === 3) {
      frogY -= 15;
    }
    else if (keyCode === DOWN_ARROW && minigame === 3){
      frogY += 15;
    }
    else if (keyCode === LEFT_ARROW && minigame === 3){
      frogX -= 15;
    }
    else if (keyCode === RIGHT_ARROW && minigame === 3){
      frogX += 15;
    }
  }
  if (minigame === 2) {
    if (keyCode === UP_ARROW && playerSnake.direction != "S" && minigame === 2)  {
      playerSnake.direction = "N";
    } else if (keyCode === DOWN_ARROW && playerSnake.direction != "N" && minigame === 2) {
      playerSnake.direction = "S";
    } else if (keyCode === RIGHT_ARROW && playerSnake.direction != "W"&& minigame === 2) {
      playerSnake.direction = "E";
    } else if (keyCode === LEFT_ARROW && playerSnake.direction != "E"&& minigame === 2) {
      playerSnake.direction = "W";
    } else {
      console.log("wrong key (snake)");
    }
  }
}

class Car {
  constructor() {
    this.x = random(width);
    this.y = random(goalline, height - 80);
    this.width = 75
    this.height = 55
    this.velocity = random(1,4)
  }
  
  move() {
  this.x += this.velocity;
  if (this.x > width || this.x < 0) {
    this.velocity *= -1
    this.y = random(goalline, height - 80);
    this.x += this.velocity;
    }
  if (this.velocity < 0 ){
    cutecarimg = cutecarleft
  }
  if (this.velocity > 0 ){
    cutecarimg = cutecarright
  }
  }
  
  draw() {
    image(cutecarimg, this.x, this.y, this.width, this.height)
  }
  checkCollisions(){
    if (collideRectCircle(this.x, this.y, 40, 30, frogX, frogY, frogD)){
      flives -=1;
      frogY = height-20
      frogX = random(width)
        if (flives <=0){
          fgameIsOver = true;
        }
    }
  }
}

function checkWin() {
  if (frogY < goalline) {
    fscore+= 1
    frogY = height - 20
    frogX = random(width)
  }
}
function displayScores() {
  fill(0);
  textshadow(`lives: ${flives}`, 10, 20);
  textshadow(`score: ${fscore}`, 10, 40);
  textshadow(`highscore: ${fhighscore}`, 140, 20);
  if (fgameIsOver){
    mode = 3;
    if (fscore > fhighscore) {
      fhighscore = fscore;
    }
    //background(gameoverbg)
    coinsback = fscore/2;
    let getcoins = round(coinsback);
    coins = coins + getcoins;
    noLoop();
    home.show();
    errortext(`    Game Over! \n You got ${getcoins} coins`)
  }

}

function froggerRestartGame() {
  fscore = 0;
  flives = 3;
  fgameIsOver = false;
}