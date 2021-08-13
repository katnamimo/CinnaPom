/* global
 *    colorMode, createCanvas, background, backgroundColor, random, noStroke
 *    HSB, height, width, fill, ellipse, windowWidth, windowHeight,
 *    frameRate, stroke, noFill, rect, keyCode, UP_ARROW, DOWN_ARROW,
 *    LEFT_ARROW, RIGHT_ARROW, text, collideRectRect
 */

let backgroundColor, playerSnake, currentApple, sscore, sgameIsOver, sHighScore;

function snakegameSetup() {
  playerSnake = new Snake();
  currentApple = new Apple();
  sscore = 0;
  sgameIsOver = false;
  sHighScore = 0;
  snakeg = false
}

function snakegame() {
  snakeg = true
  background(snakebg);
  frameRate(10);
  //colorMode(HSB, 360, 100, 100);
  // The snake performs the following four methods:
  playerSnake.moveSelf();
  playerSnake.showSelf();
  playerSnake.checkCollisions();
  playerSnake.checkApples();
  // The apple needs fewer methods than the snake to show up on screen.
  currentApple.showSelf();
  // We put the score in its own function for readability.
  displayScore();
}

function displayScore() {
  fill("#f58282");
  text(`score: ${sscore}`, 20, 20);
  text(`high score: ${sHighScore}`, 20, 40);
  if (sgameIsOver) {
    text("Game Over!", 20, 60);
  }
}

class Snake {
  constructor() {
    this.size = 15;
    this.x = width / 2;
    this.y = height - this.size;
    this.direction = "";
    this.speed = 15;
    this.tail = [new TailSegment(this.x, this.y)];
  }

  moveSelf() {
    if (sgameIsOver) {
      return;
    }

    if (this.direction === "N") {
      this.y -= this.speed;
    } else if (this.direction === "S") {
      this.y += this.speed;
    } else if (this.direction === "E") {
      this.x += this.speed;
    } else if (this.direction === "W") {
      this.x -= this.speed;
    } else {
      console.log("Error: invalid direction");
      return;
    }

    this.tail.unshift(new TailSegment(this.x, this.y));
    this.tail.pop();
  }

  showSelf() {
    for (let i = 0; i < this.tail.length; i++) {
      let currentSegment = this.tail[i];
      currentSegment.showSelf();
    }
  }

  checkApples() {
    if (collideRectCircle(this.x, this.y, this.size, this.size, currentApple.x, currentApple.y, currentApple.size, currentApple.size)) {
      sscore++;
      currentApple = new Apple();
      this.extendTail();
    }
  }

  checkCollisions() {
    for (let i = 1; i < this.tail.length; i++) {
      let currentSegment = this.tail[i];
      if (this.x === currentSegment.x && this.y === currentSegment.y) {
        gameOver();
      }
    }

    // collisions with sides of the screen
    if (this.x < 0 || this.x > width - this.size || this.y < 0 || this.y > height - this.size) {
      gameOver();
    }
  }

  extendTail() {
    let lastTailSegment = this.tail[this.tail.length - 1];
    this.tail.push(new TailSegment(lastTailSegment.x, lastTailSegment.y));
  }
}

class TailSegment {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 15;
    this.hue = 0;
  }

  showSelf() {
    //stroke(240, 100, 100);
    fill(this.hue, 50, 100);
    rect(this.x, this.y, this.size, this.size);
    noStroke();
    this.hue += 30;
    if (this.hue >= 360) {
      this.hue = 0;
    }
  }
}

class Apple {
  constructor() {
    this.size = 15;
    this.x = random(this.size/2, width - (this.size/2));
    this.y = random(this.size/2, height - (this.size/2));
  }

  showSelf() {
    fill(10, 80, 80);
    ellipse(this.x, this.y, this.size, this.size);
  }
}



function restartGame() {
  sscore = 0;
  sgameIsOver = false;
  playerSnake = new Snake();
}

function gameOver() {
  sgameIsOver = true;
  if (sscore > sHighScore) {
    sHighScore = sscore;
  }
  coinsback = sscore/3;
  let getcoins = round(coinsback);
  coins = coins + getcoins;
  noLoop();
  errortext(`    Game Over! \n You got ${getcoins} coins`)
  home.show();
}
