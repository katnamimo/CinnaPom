/* global loadImage, image */

let cinna, pom, bg, textbox, homebg, dirty, pomidle, pomidle2, cinnaidle, pomeat, cinnaeat;
let pomsleep, pomsleep2, cinnasleep, cinnasleep2, pomsad, cinnasad, pomangy, cinnaangy;
let pomquestion, cinnaquestion, pomlove, cinnalove, cinnaactive, cinnashake;
let pancake, chocolate, coronet, lollipop, cake, pizza, ramen;

function preload(){
  

  
  titlebg = loadImage("https://cdn.glitch.com/3b275e11-fb50-41c6-8b58-35bd62f90a90%2F22906ce0a625ad3d419f83749c9e9dc2.jpg?v=1628139635292")
  title = loadImage("https://cdn.glitch.com/3b275e11-fb50-41c6-8b58-35bd62f90a90%2Flarge.png?v=1628141242705")
  star = loadImage("https://cdn.glitch.com/3b275e11-fb50-41c6-8b58-35bd62f90a90%2Fgiphy%20(1).gif?v=1628141406886")
  snakeicon = loadImage("https://cdn.glitch.com/c0d4cfa2-f6bb-4ee8-8823-d604f7563bc5%2Fsnakeicon.png?v=1628240083350")
  frogicon = loadImage("https://cdn.glitch.com/3b275e11-fb50-41c6-8b58-35bd62f90a90%2Ffrogicon.png?v=1628142433768")
  bobaicon = loadImage("https://cdn.glitch.com/3b275e11-fb50-41c6-8b58-35bd62f90a90%2Fbobaicon.png?v=1628142436514")
  fruiticon = loadImage("https://cdn.glitch.com/c0d4cfa2-f6bb-4ee8-8823-d604f7563bc5%2Fbobaicon.png?v=1628239866499")
  gameoverbg = loadImage ("https://cdn.glitch.com/c0d4cfa2-f6bb-4ee8-8823-d604f7563bc5%2Fgameover.gif?v=1628231138377")
  
  
  cinna = loadImage("https://cdn.glitch.com/04b2d363-9b09-4272-a751-8885c932e4d4%2Fcinna.png?v=1627673359768");
  pom = loadImage ("https://cdn.glitch.com/04b2d363-9b09-4272-a751-8885c932e4d4%2Fpom.png?v=1627671772985");
  bg = loadImage ("https://cdn.glitch.com/04b2d363-9b09-4272-a751-8885c932e4d4%2Fbgbg.gif?v=1627674475941");
  bedbg = loadImage("https://cdn.glitch.com/3b275e11-fb50-41c6-8b58-35bd62f90a90%2Fbedroom.png?v=1628128349613")
  textbox = loadImage("https://cdn.glitch.com/7170d17e-d78f-4bd2-8f2d-851dd3f746c6%2Ftextbox.png?v=1627937019751");
  homebg = loadImage("https://cdn.glitch.com/3b275e11-fb50-41c6-8b58-35bd62f90a90%2Fhome.png?v=1628128347883");
  dirty = loadImage("https://cdn.glitch.com/7170d17e-d78f-4bd2-8f2d-851dd3f746c6%2Fgiphy.gif?v=1627933717743");
  poopimg = loadImage("https://cdn.glitch.com/9bbb4d21-7c0f-43c0-a3c8-0e50c4060fd6%2Fpoop.png?v=1628187907735")
  
  pomidle = loadImage("https://cdn.glitch.com/04b2d363-9b09-4272-a751-8885c932e4d4%2Fpomidle.gif?v=1627671138611");
  pomidle2 = loadImage("https://cdn.glitch.com/04b2d363-9b09-4272-a751-8885c932e4d4%2Fpomidle2.gif?v=1627671135388");
  cinnaidle = loadImage("https://cdn.glitch.com/7170d17e-d78f-4bd2-8f2d-851dd3f746c6%2Fcidle.gif?v=1627929818471");

  pomeat = loadImage("https://cdn.glitch.com/04b2d363-9b09-4272-a751-8885c932e4d4%2Fpomeat.gif?v=1627671135176");
  // cinnaeat = loadImage("");
 
  pomsleep = loadImage("https://cdn.glitch.com/04b2d363-9b09-4272-a751-8885c932e4d4%2Fpomsleep.gif?v=1627671134365");
  pomsleep2 = loadImage("https://cdn.glitch.com/c0d4cfa2-f6bb-4ee8-8823-d604f7563bc5%2Fpomsleep2.gif?v=1628235846577");
  cinnasleep = loadImage("https://cdn.glitch.com/c0d4cfa2-f6bb-4ee8-8823-d604f7563bc5%2Fcinnasleep.gif?v=1628234715505");
  cinnasleep2 = loadImage("https://cdn.glitch.com/3b275e11-fb50-41c6-8b58-35bd62f90a90%2Fcinnasleep2.gif?v=1628104491702");
  
  pomsad = loadImage("https://cdn.glitch.com/04b2d363-9b09-4272-a751-8885c932e4d4%2Fpomsad.gif?v=1627671135166");
  cinnasad = loadImage("https://cdn.glitch.com/7170d17e-d78f-4bd2-8f2d-851dd3f746c6%2Fcinnasad.gif?v=1627932175733");
 
  pomangy = loadImage("https://cdn.glitch.com/04b2d363-9b09-4272-a751-8885c932e4d4%2Fpomangy.gif?v=1627671135620");
  cinnaangy = loadImage("https://cdn.glitch.com/04b2d363-9b09-4272-a751-8885c932e4d4%2Fangy.png?v=1627671134365");
  // cinnaangy is a png not gif btw
  
  pomquestion = loadImage("https://cdn.glitch.com/04b2d363-9b09-4272-a751-8885c932e4d4%2Fpomquestion.gif?v=1627671134412");
  cinnaquestion = loadImage("https://cdn.glitch.com/04b2d363-9b09-4272-a751-8885c932e4d4%2Fcinnaquestion.gif?v=1627671137353");
  
  pomlove = loadImage("https://cdn.glitch.com/c0d4cfa2-f6bb-4ee8-8823-d604f7563bc5%2Fpomlove.gif?v=1628235723571")
  cinnalove = loadImage("https://cdn.glitch.com/9bbb4d21-7c0f-43c0-a3c8-0e50c4060fd6%2Fcinnalove.gif?v=1628198656523");
  
  cinnaactive = loadImage("https://cdn.glitch.com/04b2d363-9b09-4272-a751-8885c932e4d4%2Fcinnaactive.gif?v=1627671137560");
  cinnashake = loadImage("https://cdn.glitch.com/9bbb4d21-7c0f-43c0-a3c8-0e50c4060fd6%2Fcinnashake.gif?v=1628198770564");
  
  cinnabath = loadImage("https://cdn.glitch.com/3b275e11-fb50-41c6-8b58-35bd62f90a90%2Fcinnabath.png?v=1628107050046")
  pombath = loadImage("https://cdn.glitch.com/3b275e11-fb50-41c6-8b58-35bd62f90a90%2Fpombath.png?v=1628107051233")
  soap = loadImage("https://cdn.glitch.com/3b275e11-fb50-41c6-8b58-35bd62f90a90%2Fsoap.png?v=1628130793773")
  bubbles = loadImage("https://cdn.glitch.com/3b275e11-fb50-41c6-8b58-35bd62f90a90%2Fbubbles.gif?v=1628131102685")
  
  pancake = loadImage("https://cdn.glitch.com/7170d17e-d78f-4bd2-8f2d-851dd3f746c6%2Fpancakes.png?v=1627930727415");
  chocolate = loadImage("https://cdn.glitch.com/7170d17e-d78f-4bd2-8f2d-851dd3f746c6%2Fchocolate.png?v=1627930737674");
  coronet = loadImage("https://cdn.glitch.com/50142b99-7811-4de1-8f2e-fa1c6802e45c%2Fcoronet.png?v=1628020898687");
  lollipop = loadImage("https://cdn.glitch.com/7170d17e-d78f-4bd2-8f2d-851dd3f746c6%2Flollipop.png?v=1627930756883");
  cake = loadImage("https://cdn.glitch.com/7170d17e-d78f-4bd2-8f2d-851dd3f746c6%2Fcake.png?v=1627930796766");
  pizza = loadImage("https://cdn.glitch.com/1555a3f8-41bf-4395-aeeb-8aebff9871eb%2Fpizza.png?v=1628018815851");
  ramen = loadImage("https://cdn.glitch.com/7170d17e-d78f-4bd2-8f2d-851dd3f746c6%2Framen.gif?v=1627930915418");
  coffee = loadImage("https://cdn.glitch.com/50142b99-7811-4de1-8f2e-fa1c6802e45c%2Fcoffee.png?v=1628021015265");
  
  boba = loadImage("https://cdn.glitch.com/7170d17e-d78f-4bd2-8f2d-851dd3f746c6%2Fbadboba.png?v=1627956997475");
  hand = loadImage("https://cdn.glitch.com/3b275e11-fb50-41c6-8b58-35bd62f90a90%2Fhand.png?v=1628133030469")
  
  frog = loadImage("https://cdn.glitch.com/3b275e11-fb50-41c6-8b58-35bd62f90a90%2F3130f756-0c7a-4c1f-a3ab-3ef9b870c612_frog.png?v=1628135207774")
  cutecarleft = loadImage("https://cdn.glitch.com/3b275e11-fb50-41c6-8b58-35bd62f90a90%2F3130f756-0c7a-4c1f-a3ab-3ef9b870c612_car.gif?v=1628136029331")
  cutecarright = loadImage("https://cdn.glitch.com/c0d4cfa2-f6bb-4ee8-8823-d604f7563bc5%2Fezgif-7-10c26b6bc8a3.gif?v=1628233182088")
  froggerbg = loadImage("https://cdn.glitch.com/3b275e11-fb50-41c6-8b58-35bd62f90a90%2Ffroggerbg.png?v=1628143569841")
  snakebg = loadImage("https://cdn.glitch.com/3b275e11-fb50-41c6-8b58-35bd62f90a90%2Fsnakebg.jpg?v=1628143822861")
  bobabg = loadImage("https://cdn.glitch.com/3b275e11-fb50-41c6-8b58-35bd62f90a90%2Fbobabg.png?v=1628144482735")
  
  cinnabasket = loadImage("https://cdn.glitch.com/c0d4cfa2-f6bb-4ee8-8823-d604f7563bc5%2Fcinnabasket.png?v=1628237755177")
  pombasket = loadImage("https://cdn.glitch.com/c0d4cfa2-f6bb-4ee8-8823-d604f7563bc5%2Fpombasket.png?v=1628238283854")
  peach = loadImage("https://cdn.glitch.com/c0d4cfa2-f6bb-4ee8-8823-d604f7563bc5%2Ftemplate-sticker-600x600.png?v=1628238546880")
  //sounds
  eatsound = loadSound("https://cdn.glitch.com/3b275e11-fb50-41c6-8b58-35bd62f90a90%2Feat.mp3?v=1628107429527")
  kaching = loadSound("https://cdn.glitch.com/3b275e11-fb50-41c6-8b58-35bd62f90a90%2Fkaching.mp3?v=1628107712089")
  select = loadSound("https://cdn.glitch.com/3b275e11-fb50-41c6-8b58-35bd62f90a90%2Fselect.mp3?v=1628110827824")
 

  click = loadSound("https://cdn.glitch.com/3b275e11-fb50-41c6-8b58-35bd62f90a90%2Fclick.mp3?v=1628144600444")
  click2 = loadSound("https://cdn.glitch.com/c0d4cfa2-f6bb-4ee8-8823-d604f7563bc5%2Fhover.ogg?v=1628241186972")
  pickup = loadSound("https://cdn.glitch.com/c0d4cfa2-f6bb-4ee8-8823-d604f7563bc5%2Fse_DECISION.WAV?v=1628241349382")
  
  defaultmusic = loadSound("https://cdn.glitch.com/3b275e11-fb50-41c6-8b58-35bd62f90a90%2Fdefaultmusic.mp3?v=1628151009431")
  froggermusic = loadSound("https://cdn.glitch.com/3b275e11-fb50-41c6-8b58-35bd62f90a90%2Ffroggermusic.mp3?v=1628151006876")
  bathmusic = loadSound("https://cdn.glitch.com/3b275e11-fb50-41c6-8b58-35bd62f90a90%2Fbathmusic.mp3?v=1628133283304")
  bobamusic = loadSound("https://cdn.glitch.com/3b275e11-fb50-41c6-8b58-35bd62f90a90%2Fbobamusic.mp3?v=1628151000553")
  snakemusic = loadSound("https://cdn.glitch.com/3b275e11-fb50-41c6-8b58-35bd62f90a90%2Fsnakemusic.mp3?v=1628151005522")
  sleepmusic = loadSound("https://cdn.glitch.com/3b275e11-fb50-41c6-8b58-35bd62f90a90%2Fsleepmusic.mp3?v=1628151176293")
  fruitmusic = loadSound("https://cdn.glitch.com/c0d4cfa2-f6bb-4ee8-8823-d604f7563bc5%2Ffruitmusic.mp3?v=1628239082400")
}