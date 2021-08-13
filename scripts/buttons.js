/* global loadImage, image, createButton, text, shop, stats, play, home, playdot, playsnake, gamemode, playAgain, restartGame, minigame, coins*/

function createButtons(){    
  playdot = createButton ("▶");
  playdot.position (350, 120)
  playdot.hide();
  playdot.mousePressed(dotgameTrue); // if true, play dot game
  playdot.addClass("home");
  
  playsnake = createButton ("▶");
  playsnake.position (350, 220)
  playsnake.hide();
  playsnake.mousePressed(snakegameTrue); // if true, play snake game
  playsnake.addClass("home");
  
  playfrogger = createButton ("▶");
  playfrogger.position(350, 320);
  playfrogger.hide();
  playfrogger.mousePressed(froggergameTrue); // if true, play frog game
  playfrogger.addClass("home");
  
  playfruit = createButton ("▶");
  playfruit.position(350,420)
  playfruit.mousePressed(fruitgameTrue)
  playfruit.addClass("home")
  playfruit.hide();
  
  okbtn = createButton("ok")
  okbtn.addClass("home")
  okbtn.position(260,230)
  okbtn.mousePressed(confirmed)
  okbtn.hide();
  
  titleplay = createButton("play")
  titleplay.addClass("buttons")
  titleplay.position(200,260)
  titleplay.mousePressed(selectionmode)
  
  settingsbtn = createButton("settings")
  settingsbtn.addClass("buttons")
  settingsbtn.position(200, 315)
  settingsbtn.mousePressed(settingsmode)
  
  credits = createButton("credits")
  credits.addClass("buttons")
  credits.position(200, 370)
  credits.mousePressed(creditsmode)
  
  settingsbk = createButton("back")
  settingsbk.addClass("buttons")
  settingsbk.mousePressed(titlemode)
  settingsbk.position(width/2 -50, 310)
  settingsbk.hide();
  
  //music slider
  musicSlider = createSlider(0, 1.50,0.5, 0.125);
  musicSlider.position(width / 2 - 50, height / 2 - 50);
  musicSlider.addClass("sliders");
  musicSlider.hide();
  //sfx slider
  sfxSlider = createSlider(0, 1.50,0.5, 0.25);
  sfxSlider.position(width / 2 - 50, 150 );
  sfxSlider.addClass("sliders");
  sfxSlider.hide();
  
  //test sound buttons
  sfxplay = createButton ("▶");
  sfxplay.position (350, 140)
  sfxplay.hide();
  sfxplay.mousePressed(sfxtest);
  sfxplay.addClass("home");
  
  feed = createButton("feed")
  feed.position(140, 470)
  feed.hide();
  feed.mousePressed(eatsoundplay) // feed pet
  feed.addClass("home")
  
  stats = createButton("stats");
  stats.position(20, 20);
  stats.hide();
  stats.mousePressed(statsmode); // go to stats page
  stats.addClass("buttons");
  
  shop = createButton("shop");
  shop.position(140, 20);
  shop.hide();
  shop.mousePressed(shopmode); // go to shop page
  shop.addClass("buttons");
  
  play = createButton("play");
  play.position(260, 20);
  play.hide();
  play.mousePressed(playmode); // go to mini game page
  play.addClass("buttons");
  
  inventorybtn = createButton("inventory");
  inventorybtn.position(370,20);
  inventorybtn.hide();
  inventorybtn.mousePressed(inventorymode); // go to inventory
  inventorybtn.addClass("buttons");
  
  home = createButton("🏠");
  home.position (550, 40)
  home.hide();
  home.mousePressed(homemode); // go to home page
  home.addClass("home");
  
  
  sleepbutton = createButton ("🛏️")
  sleepbutton.position (550, 150)
  sleepbutton.addClass("home")
  sleepbutton.mousePressed(sleepmode); // if true, go to sleep
  sleepbutton.hide();
  
  cleanbutton = createButton("🧼")
  cleanbutton.position(550, 100)
  cleanbutton.addClass("home")
  cleanbutton.mousePressed(bathmode) // if true, take a bath
  cleanbutton.hide();
  
  petbutton = createButton ("✋")
  petbutton.mousePressed(petTrue)
  petbutton.position(550,200)
  petbutton.hide();
  petbutton.addClass("home") // if true, pet mode
  
  settingsbutton = createButton("⚙️")
  settingsbutton.mousePressed(settingsmode)
  settingsbutton.position(550,250)
  settingsbutton.hide();
  settingsbutton.addClass("home")
  
  foodmenu = createSelect();
  foodmenu.addClass("dropbtn")
  foodmenu.hide();
  foodmenu.position(40, 470)
  foodmenu.option('feed');
  foodmenu.option('pancake');
  foodmenu.option('chocolate');
  foodmenu.option('coronet');
  foodmenu.option('lollipop');
  foodmenu.option('cake');
  foodmenu.option('pizza');
  foodmenu.option('ramen');
  foodmenu.option('coffee');
  foodmenu.changed(selectevent) // select food to eat
}
function confirmed(){
  poor = false
  tired = false
  nofood = false
  full = false
  toomuchpoop = false
  cleanuptime =500
  okbtn.hide();
  select.play();
}
function sfxtest(){
  select.play();
}
function petTrue(){
  petmode = !petmode
}
function eatsoundplay(){
  eatsound.play();
}
function titlemode(){
  if (pet === 'cinna' || pet === 'purin'){
    select.play();
    gamemode = 1
  }
  else{
  select.play();
  gamemode = -1;
  }
}
function settingsmode(){
  select.play();
  gamemode = -2;
}
function selectionmode(){
  select.play();
  gamemode = 0;
}
function homemode(){
  select.play();
  bathmusic.stop();
  defaultmusic.play();
  loop();
  cinnaimage = cinnashake
  pomimage = pomidle2
  gamemode = 1;
  frameRate(60);
  setInterval(newPoop, 15000);
}
function statsmode(){ 
  select.play();
  gamemode = 2;
}
function shopmode(){
  select.play();
  gamemode = 3;
}
function playmode(){
  select.play();
  gamemode = 4;
}
function inventorymode(){
  select.play();
  gamemode = 5;
}
function bathmode(){
  gamemode = 6
  bathmusic.play();
}
function sleepmode(){
  gamemode = 7
  sleeptime = 500
  sleepmusic.play();
}
function creditsmode(){
  select.play();
  gamemode = -3
}
function displayTitles(){ // when in the play screen, show minigame options
  textshadow("boba collect", 200 , 115)
  image(bobaicon, 100, 60)
  textshadow("snake", 200, 215)
  image(snakeicon, 100, 160)
  textshadow("frogger", 200, 315)
  image(frogicon, 100, 260)
  textshadow("fruit catcher", 200, 415)
  image(fruiticon, 100, 360)
}
function dotgameTrue(){
  if (stamina > 10){
    playAgain();
    minigame = 1;
  }
  else {
    tooTired();
  }
}
function snakegameTrue() {
  if (stamina > 10){
    restartGame();
    minigame = 2;
  }
  else {
    tooTired()
  }
}
function froggergameTrue(){
  if (stamina > 10){
    froggerRestartGame();
    minigame = 3;
  }
  else {
    tooTired()
  }
}
function fruitgameTrue(){
  if (stamina > 10){
    fruitRestart();
    minigame = 4;
  }
  else {
    tooTired()
  }
}

function tooTired(){
  tired = true
}
function coinsDisplay(){
  textshadow(`Coins: ${coins}`, 10, 490)
}

function hideall(){
  stats.hide();
  inventorybtn.hide()
  playdot.hide();
  playsnake.hide();
  playfrogger.hide();
  playfruit.hide();
  foodmenu.hide();
  feed.hide();
  shop.hide();
  sleepbutton.hide();
  play.hide();
  petbutton.hide();
  cleanbutton.hide();
  settingsbutton.hide();
  titleplay.hide();
  okbtn.hide();
}

function stopsounds(){
//  defaultmusic.stop();
  froggermusic.stop();
  bathmusic.stop();
  bobamusic.stop();
  snakemusic.stop();
  sleepmusic.stop();
  fruitmusic.stop();
}

function selectevent(){
    let item = foodmenu.value();
    console.log(item)
    //noLoop();
    if (item === 'pancake') {
      const pancakeIndex = invpics.indexOf(pancake)
      if (inventory[0].quantity >= 1) {
        if (hunger <= 100 - inventory[0].hunger) {
          eatsound.play();
          inventory[0].quantity -= 1
          invpics.splice(pancakeIndex, 1)// ???
          hunger += inventory[0].hunger

        }
        else if (hunger >= 100 - inventory[0].hunger){
          full = true;
        }
      }
      else {
        nofood = true
      }
    }
    if (item === 'chocolate') {
      const chocolateIndex = invpics.indexOf(chocolate)
      if (inventory[1].quantity >= 1) {
        if (hunger <= 100 - inventory[1].hunger) {
          eatsound.play();
          inventory[1].quantity -= 1
          invpics.splice(chocolateIndex, 1)
          hunger += inventory[1].hunger
      }
        else if (hunger >= 100 - inventory[1].hunger){
          full = true;
        }
      }
      else {
        nofood = true
      }
    }
  if (item === 'coronet') {
    const coronetIndex = invpics.indexOf(coronet)
      if (inventory[2].quantity >= 1) {
        if (hunger <= 100 - inventory[2].hunger) {
          eatsound.play();
          inventory[2].quantity -= 1
          invpics.splice(coronetIndex, 1)
          hunger += inventory[2].hunger
        }
        else if (hunger >= 100 - inventory[2].hunger){
          full = true;
        }
      }
      else {
        nofood = true
      }
  }
  if (item === 'lollipop') {
    const lollipopIndex = invpics.indexOf(lollipop)
      if (inventory[3].quantity >= 1) {
        if (hunger <= 100 - inventory[3].hunger) {
          eatsound.play();
          inventory[3].quantity -= 1
          invpics.splice(lollipopIndex, 1)
          hunger += inventory[3].hunger
        }
        else if (hunger >= 100 - inventory[3].hunger){
          full = true;
        }
      }
      else {
        nofood = true
      }
  }
  if (item === 'cake') {
    const cakeIndex = invpics.indexOf(cake)
      if (inventory[4].quantity >= 1) {
        if (hunger <= 100 - inventory[4].hunger) {
          eatsound.play();
          inventory[4].quantity -= 1
          invpics.splice(cakeIndex, 1)
          hunger += inventory[4].hunger
        }
        else if (hunger >= 100 - inventory[4].hunger){
          full = true;
        }
      }
      else {
        nofood = true
      }
  }
  if (item === 'pizza') {
    const pizzaIndex = invpics.indexOf(pizza)
      if (inventory[5].quantity >= 1) {
        if (hunger <= 100 - inventory[5].hunger) {
          eatsound.play();
          inventory[5].quantity -= 1
          invpics.splice(pizzaIndex, 1)
          hunger += inventory[5].hunger
        }
        else if (hunger >= 100 - inventory[5].hunger){
          full = true;
        }
      }
      else {
        nofood = true
      }
  }
  if (item === 'ramen') {
    const ramenIndex = invpics.indexOf(ramen)
      if (inventory[6].quantity >= 1) {
        if (hunger <= 100 - inventory[6].hunger) {
          eatsound.play();
          inventory[6].quantity -= 1
          invpics.splice(ramenIndex, 1)
          hunger += inventory[6].hunger
        }
        else if (hunger >= 100 - inventory[6].hunger){
          full = true;
        }
      }
      else {
        nofood = true
      }
  }
  if (item === 'coffee') {
    const coffeeIndex = invpics.indexOf(coffee)
      if (inventory[7].quantity >= 1) {
        if (hunger <= 100 - inventory[7].hunger) {
          eatsound.play();
          inventory[7].quantity -= 1
          invpics.splice(coffeeIndex, 1)
          hunger += inventory[7].hunger
        }
        else if (hunger >= 100 - inventory[7].hunger){
          full = true;
        }
      }
      else {
        nofood = true
      }
  }
}

function hideallside(){
  sleepbutton.hide()
  cleanbutton.hide()
  petbutton.hide()
  settingsbutton.hide()
}
function hideplaydots(){
  playdot.hide();
  playsnake.hide()
  playfrogger.hide();
  playfruit.hide();
}
function displaySettings(){
  textshadow("music", 100, 190);
  sfxSlider.show();
  musicSlider.show();
  textshadow("sfx", 120, 140);
  
  const sfxvolume = sfxSlider.value();
  select.setVolume(sfxvolume);
  const musicvolume = musicSlider.value();
  defaultmusic.setVolume(musicvolume);
  froggermusic.setVolume(musicvolume);
  bathmusic.setVolume(musicvolume);
  bobamusic.setVolume(musicvolume);
  snakemusic.setVolume(musicvolume);
  sleepmusic.setVolume(musicvolume);
  fruitmusic.setVolume(musicvolume);
}

function updatePoop(){    
  if (toomuchpoop === true) {
      cleanliness -= 0.01
      if (cleanuptime < 0) {
        errortext("please clean up!")
      }
    }
    for (let i = 0; i < poops.length; i++) {
      const poopy = poops[i];
      poopy.draw();
    }
  }
function defaultvolume(){
  defaultmusic.setVolume(0.5);
  froggermusic.setVolume(0.5);
  bathmusic.setVolume(0.5);
  bobamusic.setVolume(0.5);
  snakemusic.setVolume(0.5);
  sleepmusic.setVolume(0.5);
  fruitmusic.setVolume(0.5);
}