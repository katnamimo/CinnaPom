/* global loadImage, image, ellipse, text, random, width, height, boba,  background, mouseX, mouseY, hit, collideCircleCircle, round, noLoop  */
let coinX, coinY, time, dgameIsOver, dscore, dhighscore, timeLimit, home, getcoins, coinsback;

function dotgameSetup(){
  timeLimit= 1000;

  coinX = random(20, 480);
  coinY = random(20, 480);
  time = timeLimit;
  dgameIsOver = false;
  dscore = 0;
  dhighscore = 0;
  getcoins = 0;
  coinsback = 0;
  
  bobag = false
}

function dotgame(){ 
  background(bobabg);
  
  bobag = true
  image(boba, coinX, coinY, 20);
  ellipse(mouseX, mouseY, 20);
  fill("#f58282");
  text(`Time remaining: ${time}`, 20, 40);
  text(`Highscore: ${dhighscore}`, 20, 55);

  handleTime();
  handleCollision();

}

function handleCollision() {
  hit = collideCircleCircle(mouseX, mouseY, 25, coinX, coinY, 25);
  if (hit && !dgameIsOver) {
    dscore += 1; 
    click.play();
    coinX = random(20, 480);
    coinY = random(200, 480);
  }
}

function handleTime() {
  if (time > 0) {
    time -= 1; 
  } else {
    dgameIsOver = true;
    text(`Game is over. Final score: ${dscore}`, 20, 70);
    coinsback = dscore/5;
    let getcoins = round(coinsback);
    coins = coins + getcoins;
    noLoop();
    errortext(`    Game Over! \n You got ${getcoins} coins`)
    home.show();
    if (dscore > dhighscore) {
      dhighscore = dscore;
    }
  }
}
function playAgain() {
  coinX = random(width);
  coinY = random(height);
  time = timeLimit;
  dgameIsOver = false;
  dscore = 0;
}

