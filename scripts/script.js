/* global createCanvas, background, color, image, text, textSize, textFont, fill, stroke
 * mouseX, mouseY, bg, loadImage, imageMode, rect, createButtons, clear, loop, colorMode
 * frameRate, noStroke
 */
let gamemode, pet, hunger, happiness, cleanliness, stamina, stats, shop, showstats, showshop;
let cinnaimage, imgheight, imgwidth,mouseIsPressed, imgx, imgy, coins, minigame, inventory;
let invx, invy, invpics, ipancake, ichocolate, icoronet, ilollipop, icake, ipizza, iramen;
let icoffee, pomimage, cinnaimgheight, cinnaimgwidth, pomimgheight, pomimgwidth;

// gamemode ; -1 = title screen 0 = pet selection, 1 = home, 2 = stats, 3 = shop, 4 = play, 5 = inventory, 6 = bath
// mini game ; = none, 1 = dot, 2 = snake, 3 = frogger

function setup() {
  
  defaultvolume()
  defaultmusic.play();
  defaultmusic.playMode("untilDone");
  sleepmusic.playMode("untilDone");
  
  createCanvas(500, 500);
  colorMode(HSB, 360, 100, 100);
  pet = "";
  gamemode = -1;
  minigame = 0;
  coins = 10;
  
  hunger = 50;
  happiness = 50;
  cleanliness = 20;
  stamina = 15;
  
  sleeptime = 500;
  cleanuptime = 500
  
  petmode = false;
  tired = false;
  poor = false;
  nofood = false;
  toomuchpoop = false;
  full = false;
  
  inventory = [
    (ipancake = {
      quantity: 0,
      hunger: 30
    }),
    (ichocolate = {
      quantity: 0,
      hunger: 10
    }),
    (icoronet = {
      quantity: 0,
      hunger: 15
    }),
    (ilollipop = {
      quantity: 0,
      hunger: 7
    }),
    (icake = {
      quantity: 0,
      hunger: 18
    }),
    (ipizza = {
      quantity: 0,
      hunger: 25
    }),
    (iramen = {
      quantity: 0,
      hunger: 40
    }),
    (icoffee = {
      quantity: 0,
      hunger: 11
    })
  ];
  
  invpics = [];
  poops = [];

  cinnaimage = cinnashake;
  pomimage = pomidle2;
  cinnaimgheight = 200;
  cinnaimgwidth = 160;
  pomimgheight = 150;
  pomimgwidth = 150;
  imgx = 160;
  imgy = 230;

  createButtons(); // in buttons.js

  // mini game initialization
  dotgameSetup();
  snakegameSetup();
  froggergameSetup();
  fruitgameSetup();
}

function draw() {
  clear();
  background(bg);
  textSize(30);
  fill("#f58282");
  textFont("Cute Font");
  if (gamemode === -3){
    //credits screen
    background(bg)
    hideall();
    titleplay.hide();
    settingsbtn.hide();
    credits.hide();
    textshadow("credits: \ncharacters cinna, pom and keroppi > sanrio \npixel foods > pixelins by dana \nmusic > mitsukiyo \npixel truck > king lulu deer \npixel isometric rooms > pixeled pink \ncute poop and cute peach > estudiokudasai", 21, 41)
    settingsbk.show();
  }
  if (gamemode === -2) {
    // settings screen
    background(bg);
    hideall();
    displaySettings();
    titleplay.hide();
    settingsbtn.hide();
    credits.hide();
    settingsbk.show();
    sfxplay.show();
  }
  
  if (gamemode === -1) {
    //title screen
    background(titlebg);
    image(star, 30, 50);
    image(title, 100, 60);
    titleplay.show();
    settingsbtn.show();
    settingsbk.hide();
    credits.show();
    sfxSlider.hide();
    sfxplay.hide();
    musicSlider.hide();
  }
  
  if (gamemode === 0) {
    // pet selection
    titleplay.hide();
    settingsbtn.hide();
    credits.hide();
    image(cinna, 150, 145, 100, 100);
    image(pom, 260, 150, 100, 100);
    image(textbox, 110, 50, 300, 50);
    fill("#ffff");
    textshadow("select your pet", 190, 85);
    titleplay.hide();
  }

  if (gamemode === 1) {
    // home screen
    rectMode(CORNER)
    stopsounds();
    frogger = false;
    snakeg = false;
    bobag = false;
    fruit = false;
    cinnaimgheight = 130;
    cinnaimgwidth = 180;
    pomimgheight = 125;
    pomimgwidth = 125;
    minigame = 0;
    imgx = 160;
    imgy = 230;
    cleanuptime -= 1
    background(homebg);
    coinsDisplay();
    stats.show();
    home.show();
    shop.show();
    settingsbutton.show();
    play.show();
    petbutton.show();
    cleanbutton.show();
    sleepbutton.show();
    inventorybtn.show();
    hideplaydots();
    settingsbk.hide();
    musicSlider.hide();
    sfxSlider.hide();
    sfxplay.hide();
    titleplay.hide();
    settingsbtn.hide();
    credits.hide();
    foodmenu.hide();
    feed.hide();
    okbtn.hide();
  
    updatePoop()
    updateStats();
    
    
    if (pet === "cinna") {
      image(cinnaimage, imgx, imgy, cinnaimgwidth, cinnaimgheight);
    }
    if (pet === "purin") {
      image(pomimage, imgx, imgy, pomimgwidth, pomimgheight);
    }
    
    if (petmode === true) {
      image(hand, mouseX - 25, mouseY - 25, 50, 50);
      if (keyIsDown(32) && mouseX > 170 && mouseX < 305 && mouseY > 250 && mouseY < 370) {
        cinnaimage = cinnalove;
        pomimage = pomlove;
        happiness += 0.1;
      } else {
        cinnaimage = cinnashake;
        pomimage = pomidle2;
      }
    }
  }

  if (gamemode === 2) {
    // stats screen
    rectMode(CORNER)
    statsDisplay();
    home.show();
    foodmenu.hide();
    feed.hide();
    hideplaydots()
    hideallside()
    okbtn.hide();
  }

  if (gamemode === 3) {
    // shop screen
    shopDisplay();
    home.show();
    hideplaydots()
    foodmenu.hide();
    feed.hide();
    hideallside()
    if (poor === true) {
      errortext("not enough coins...");
    }
  }

  if (gamemode === 4) {
    // play screen
    home.show();
    playdot.show();
    playfrogger.show();
    playsnake.show();
    playfruit.show();
    foodmenu.hide();
    feed.hide();
    hideallside()
    displayTitles();

    if (minigame === 1) {
      if (!bobag) {
        defaultmusic.stop();
        bobamusic.play();
      }
      dotgame();
      stamina -= 0.01;
      happiness += 0.02;
      hideall();
    }

    if (minigame === 2) {
      if (!snakeg) {
        defaultmusic.stop();
        snakemusic.play();
      }
      snakegame();
      stamina -= 0.1;
      happiness += 0.02;
      hideall();
    }
    if (minigame === 3) {
      if (!frogger) {
        defaultmusic.stop();
        froggermusic.play();
      }
      froggergame();
      stamina -= 0.01;
      happiness += 0.02;
      hideall();
    }
    if (minigame === 4) {
      if (!fruit) {
        defaultmusic.stop();
        fruitmusic.play();
      }
      fruitgame();
      stamina -= 0.01;
      happiness += 0.02;
      hideall();
    }
    if (tired === true) {
      hideplaydots()
      errortext(`${pet} is too tired...`);
    }
  }

  if (gamemode === 5) {
    // inventory screen
    home.show();
    foodmenu.show();
    feed.show();
    hideplaydots()
    hideallside()
    loadInventory();
    if (nofood === true) {
      errortext("you don't have any");
    }
    if (full === true) {
      errortext(`${pet} is full !`);
    }
  }

  if (gamemode === 6) {
    // bath mode
    defaultmusic.stop();
    if (pet === "cinna") {
      background(cinnabath);
      image(bubbles, 300, 300, 150, 100);
      fill(93, 0, 82);
      rect(250, 400, 100, 10, 5);
      fill("#92c692");
      rect(250, 400, cleanliness, 10, 5);
      if (keyIsDown(32) && mouseX > 165 && mouseX < 280 && mouseY > 150 && mouseY < 285) {
        if (cleanliness <= 100) {
          cleanliness += 0.1;
        }
      }
    }
    if (pet === "purin") {
      background(pombath);
      fill(93, 0, 82);
      rect(250, 400, 100, 10, 5);
      fill("#92c692");
      rect(250, 400, cleanliness, 10, 5);
      if (keyIsDown(32) && mouseX > 190 && mouseX < 370 && mouseY > 185 && mouseY < 270) {
        if (cleanliness <= 100) {
          cleanliness += 0.1;
        }
      }
    }
    image(soap, mouseX - 25, mouseY - 25, 50, 50);
    hideall();
    home.show();
  }

  if (gamemode === 7) {
    //sleep mode
    defaultmusic.stop();
    cinnaimage = cinnasleep2;
    pomimage = pomsleep2;
    cinnaimgheight = 150;
    cinnaimgwidth = 150;
    pomimgheight = 150;
    pomimgwidth = 150;
    imgx = 30;
    imgy = 200;
    sleeptime -= 1;
    stamina += 0.1;
    background(bedbg);
    fill(255);
    textshadow(`nap time remaining: ${sleeptime}`, 220, 20);
    hideall();
    if (pet === "cinna") {
      image(cinnaimage, imgx, imgy, cinnaimgheight, cinnaimgwidth);
    }
    if (pet === "purin") {
      image(pomimage, imgx, imgy, pomimgheight, pomimgwidth);
    }

    if (sleeptime <= 0) {
      sleeptime = 0;
      gamemode = 1;
      defaultmusic.play();
      cinnaimage = cinnashake;
      pomimage = pomidle2;
    }
  }
}

function mousePressed() {
  if (gamemode === 0) {
    if (mouseX > 160 && mouseX < 245 && mouseY > 155 && mouseY < 245) {
      gamemode = 1;
      click.play();
      console.log("cinna");
      pet = "cinna";
    }
    if (mouseX > 275 && mouseX < 350 && mouseY > 165 && mouseY < 240) {
      gamemode = 1;
      click.play();
      console.log("purin");
      pet = "purin";
    }
  }

  if (gamemode === 1) {
    for (let i=0; i < poops.length; i++) {
      if (mouseX > poops[i].x && mouseX < poops[i].x + poops[i].width && mouseY > poops[i].y && mouseY < (poops[i].y + poops[i].height)) {
        let removethispoop = poops[i]
        pickup.play();
        const poopIndex = poops.indexOf(removethispoop)
        poops.splice(poopIndex, 1)
      }
    }
  }

  if (gamemode === 3) {
    // shop
    if (mouseX > 50 && mouseX < 130 && mouseY > 55 && mouseY < 140 && poor === false) {
      if (coins >= 10) {
        kaching.play();
        invpics.push(pancake);
        inventory[0].quantity += 1;
        coins -= 10;
      } else {
        poor = true;
      }
    }
    if (mouseX > 165 && mouseX < 260 && mouseY > 45 && mouseY < 140) {
      if (coins >= 5) {
        kaching.play();
        invpics.push(chocolate);
        inventory[1].quantity += 1;
        coins -= 5;
      } else {
        poor = true;
      }
    }
    if (mouseX > 275 && mouseX < 380 && mouseY > 55 && mouseY < 140) {
      if (coins >= 8) {
        kaching.play();
        invpics.push(coronet);
        inventory[2].quantity += 1;
        coins -= 8;
      } else {
        poor = true;
      }
    }
    if (mouseX > 405 && mouseX < 475 && mouseY > 65 && mouseY < 140) {
      if (coins >= 2) {
        kaching.play();
        invpics.push(lollipop);
        inventory[3].quantity += 1;
        coins -= 2;
      } else {
        poor = true;
      }
    }
    if (mouseX > 55 && mouseX < 130 && mouseY > 260 && mouseY < 350) {
      if (coins >= 12) {
        kaching.play();
        invpics.push(cake);
        inventory[4].quantity += 1;
        coins -= 12;
      } else {
        poor = true;
      }
    }
    if (mouseX > 165 && mouseX < 250 && mouseY > 260 && mouseY < 350 && poor === false) {
      if (coins >= 9) {
        kaching.play();
        invpics.push(pizza);
        inventory[5].quantity += 1;
        coins -= 9;
      } else {
        poor = true;
      }
    }
    if (mouseX > 295 && mouseX < 380 && mouseY > 265 && mouseY < 340) {
      if (coins >= 15) {
        kaching.play();
        invpics.push(ramen);
        inventory[6].quantity += 1;
        coins -= 15;
      } else {
        poor = true;
      }
    }
    if (mouseX > 406 && mouseX < 485 && mouseY > 260 && mouseY < 340) {
      if (coins >= 6) {
        kaching.play();
        invpics.push(coffee);
        inventory[7].quantity += 1;
        coins -= 6;
      } else {
        poor = true;
      }
    }
  }
}

function loadInventory() {
  invx = 5; 
  invy = 40;
  for (let i = 0; i < invpics.length; i++) {
    image(invpics[i], invx, invy, 100, 100);
    console.log(invpics[i]);
    if (invx <= 400) {
      invx += 100;
    } else if (invx >= 350) {
      invx = 5;
      invy += 100;
    }
  }
}

function statsDisplay() {
  background(bg);
  
  fill(93, 0, 82);
  rect(250, 100, 100, 10, 5);
  rect(250, 200, 100, 10, 5);
  rect(250, 300, 100, 10, 5);
  rect(250, 400, 100, 10, 5);

  fill("#92c692");
  rect(250, 100, hunger, 10, 5);
  rect(250, 200, happiness, 10, 5);
  rect(250, 300, cleanliness, 10, 5);
  rect(250, 400, stamina, 10, 5);

  fill("#f58282");
  textshadow("hunger", 100, 110);
  textshadow("happiness", 100, 210);
  textshadow("cleanliness", 100, 310);
  textshadow("stamina", 100, 410);
}

function shopDisplay() {
  background(bg);
  coinsDisplay();

  image(pancake, 40, 40, 100, 100);
  textshadow("10 c", 65, 150);

  image(chocolate, 160, 40, 100, 100);
  textshadow("5 c", 200, 150);

  image(coronet, 280, 30, 100, 100);
  textshadow("8 c", 330, 150);

  image(lollipop, 400, 55, 80, 80);
  textshadow("2 c", 430, 150);

  image(cake, 40, 250, 100, 100);
  textshadow("12 c", 60, 360);

  image(pizza, 150, 250, 110, 100);
  textshadow("9 c", 190, 360);

  image(ramen, 285, 240, 100, 100);
  textshadow("15 c", 310, 360);

  image(coffee, 400, 240, 100, 100);
  textshadow("6 c", 435, 360);
}

function updateStats() {
  hunger -= 0.01;
  happiness -= 0.01;
  cleanliness -= 0.006;

  if (happiness <= 0) {
    cinnaimgheight = 190;
    cinnaimage = cinnasad;
    pomimage = pomsad;
    happiness = 0;
  }
  if (happiness > 100) {
    happiness = 100;
  }

  if (hunger <= 0) {
    cinnaimgheight = 150;
    cinnaimage = cinnaangy;
    pomimage = pomangy;
    hunger = 0;
  }
  if (hunger > 100) {
    hunger = 100;
  }

  if (cleanliness <= 5) {
    if (pet === "cinna") {
      image(dirty, imgx - 10, imgy, cinnaimgwidth, cinnaimgheight);
    }
    if (pet === "purin") {
      image(dirty, imgx - 20, imgy - 50, cinnaimgwidth, cinnaimgheight);
    }
    cleanliness = 0;
  }
  if (cleanliness > 100) {
    cleanliness = 100;
  }

  if (stamina <= 5) {
    cinnaimgwidth = 160;
    cinnaimgheight = 170;
    cinnaimage = cinnasleep;
    pomimage = pomsleep;
    stamina = 0;
  }
  if (stamina > 10) {
    tired = false;
  }
  if (stamina > 100) {
    stamina = 100;
  }
}
function errortext(errormsg) {
  push();
  stroke(0);
  fill("#f3bfcf");
  rect(width / 2 - 100, height / 2 - 100, 200, 100, 5);
  noStroke();
  fill("#e7689d");
  text(`${errormsg}`, width / 2 - 79, height / 2 - 54);
  fill("#fffff");
  text(`${errormsg}`, width / 2 - 80, height / 2 - 55);
  okbtn.show();
  pop();
}

class Poop {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 40;
    this.height = 40;
  }
  draw() {
    image(poopimg, this.x, this.y, this.width, this.height);
  }
}

function newPoop() {
  if (poops.length > 5) {
    toomuchpoop = true;
    }
  else {
    toomuchpoop = false;
    poops.push(new Poop(random(70, 270), random(320, 420)));
  }
}

function textshadow(words, x, y) {
  noStroke();
  fill("#e7689d");
  text(`${words}`, x + 1, y + 1);
  fill("#fffff");
  text(`${words}`, x, y);
}