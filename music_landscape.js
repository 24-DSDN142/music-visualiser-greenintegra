let last_words = "";
let last_words_opacity = 0;
let firstRun = true;

//Images
let appleImage;
let eyesImage;
let planeImage;
let carImage;
let carSihlouetteImage;
let girlImage = [];
let appleMask = [];
let halftone = [];

//Pulse engine variables
let fadeStart = 0;
let isPulsing = false;
let pulseLength = 500;

let randomPulseX;
let randomPulseY;
let randomPulseSize;

//Instrumental timestamps
let chime1 = 5412;
let chime2 = 6367;
let chime3 = 6850;
let chime4 = 16657;
let chord1 = 7322;
let chord2 = 7828;
let chord3 = 8306; //480ms approx. between beats

let openEyes = 14500;

let vibeChange = 60700; //"The airport..." gonna do some color changing

let tripleBoom = 67120; //approx 500ms between each
let boom1 = 67616; //300 actually
let boom2 = 67866;
let boom3 = 68100;
let preGlitchBreath = 68248;
let glitchBreath = 70089;

//Lyrical timestamps
let lyric1 = 15200;
let throwApple = 22330;
let throwAppleEnd = 26582;
let theAirport1 = 29650;
let theAirport2 = 52539;
let imGonnaDrive1 = 72000;
let imGonnaDrive2 = 74000;
// let iThinkThe = 75900;
// let rightToThe = 78500;
// let coreClap = 79263;
let iThinkThe = 75900;
let rightToThe = 79000;
let coreClap = 79263;
// let iThinkThe = 0;
// let rightToThe = 3300;
// let coreClap = 3500;

let yellowOrGreen = 40614;
let isYellowOrGreen = false;
let drumGirl;

//Pattern values
let applesVertical = 7;
let applesHorizontal = 10;

//Other variables
let interval = 480;


function draw_one_frame(words, vocal, drum, bass, other, counter) {
  //P5 variables that must be running in function
  let bratGreen = color(137, 204, 4);
  let realTime = map(counter, 0, 9282, 0, 154709);
  angleMode(DEGREES);
  imageMode(CENTER);
  rectMode(CENTER);
  noStroke();

  background(0, 0, 0);

  if (firstRun) {

    //Images
    appleImage = loadImage('apple.png');
    eyesImage = loadImage('eyes.png');
    planeImage = loadImage('airplane.png');
    carImage = loadImage('car.png');
    carSihlouetteImage = loadImage('carSihlouette.png');
    appleMask.push(loadImage('appleMask.png'));
    appleMask.push(loadImage('rottenAppleMask.png'));
    halftone.push(loadImage('HalftoneX'));
    halftone.push(loadImage('HalftoneY'));
    girlImage.push(loadImage('/girl/girlBody.png')); //0
    girlImage.push(loadImage('/girl/girlClothes.png')); //1
    girlImage.push(loadImage('/girl/girlHead.png')); //2
    girlImage.push(loadImage('/girl/girlFrontHair.png')); //3
    girlImage.push(loadImage('/girl/girlChin.png')); //4
    girlImage.push(loadImage('/girl/girlEyelids.png')); //5
    girlImage.push(loadImage('/girl/girlEyesClosed.png')); //6
    girlImage.push(loadImage('/girl/girlLeftEye.png')); //7
    girlImage.push(loadImage('/girl/girlRightEye.png')); //8
    girlImage.push(loadImage('/girl/girlNose.png')); //9
    girlImage.push(loadImage('/girl/mouth.png')); //10
    girlImage.push(loadImage('/girl/mouth1.png')); //11
    girlImage.push(loadImage('/girl/mouth2.png')); //12
    girlImage.push(loadImage('/girl/mouth3.png')); //13
    girlImage.push(loadImage('/girl/mouth4.png')); //14

    firstRun = false
  }


  //Left blip
  if (realTime >= chime1 - 100 && realTime < chime1 + 1400) {
    push();
    rectMode(CORNER);
    fill(red(bratGreen), green(bratGreen), blue(bratGreen), map(realTime, chime1 + 400, chime1 + 500, 100, 0));
    rect(0, 0, map(other, 50, 100, 0, canvasWidth / 2), canvasHeight);
    pop();
  }

  //Right blip
  if (realTime >= chime2 - 100 && realTime < chime2 + 1400) {
    push();
    rectMode(CORNER);
    fill(red(bratGreen), green(bratGreen), blue(bratGreen), map(realTime, chime2 + 400, chime2 + 500, 100, 0));
    rect(canvasWidth, 0, map(other, 50, 100, 0, -canvasWidth / 2), canvasHeight);
    pop();
  }


  if (realTime > imGonnaDrive1 && realTime < imGonnaDrive2) {
    push();
    image(carSihlouetteImage, canvasWidth/2.25, 3.4*(canvasHeight/4), canvasWidth, canvasHeight);
    rectMode(CORNER);
    fill(0,0,0);
    rect(map(realTime, imGonnaDrive1, imGonnaDrive1 + 2000, 0, -canvasWidth), canvasHeight/2, canvasWidth, canvasHeight / 2);
    tint(255,map(realTime,imGonnaDrive1+1500,imGonnaDrive1+2000,255,0))
    pop();
  }

  //Secondary background color
  if (realTime >= chime3 && realTime < vibeChange) {
    fill(bratGreen);
    rect(canvasWidth / 2, canvasHeight / 2, map(realTime, chime3, chime3 + 100, 0, canvasWidth), canvasHeight);
  }
  if ((realTime >= 40721 + 200 && realTime < 40721 + 400)) {
    bratGreen = color(242, 231, 36);
    fill(bratGreen);
    rect(canvasWidth / 2, canvasHeight / 2, canvasWidth, canvasHeight);
  } else if (realTime >= 40721 + 400 && realTime < vibeChange) {
    bratGreen = color(137, 204, 4);
    fill(bratGreen);
    rect(canvasWidth / 2, canvasHeight / 2, canvasWidth, canvasHeight);
  } else if (realTime >= vibeChange && realTime < tripleBoom) {
    let startColor = color(137, 204, 4);
    let endColor = color(4, 30, 204);
    bratGreen = (lerpColor(startColor, endColor, map(realTime, vibeChange, tripleBoom - 100, 0, 1)));
    fill(bratGreen);
    rect(canvasWidth / 2, canvasHeight / 2, canvasWidth, canvasHeight);
  } else if (realTime >= tripleBoom && realTime < preGlitchBreath) {
    push();
    bratGreen = color(137, 204, 4);
    if (realTime >= boom1 && realTime < boom2) {
      fill(red(bratGreen), green(bratGreen), blue(bratGreen), map(realTime, boom1, boom2, 255, 0));
      rect(canvasWidth / 2, canvasHeight / 2, canvasWidth, canvasHeight);
    } else if (realTime >= boom2 && realTime < boom3) {
      fill(red(bratGreen), green(bratGreen), blue(bratGreen), map(realTime, boom2, boom3, 255, 0));
      rect(canvasWidth / 2, canvasHeight / 2, canvasWidth, canvasHeight);
    } else if (realTime >= boom3) {
      fill(red(bratGreen), green(bratGreen), blue(bratGreen), map(realTime, boom3, boom3 + 234, 255, 0));
      rect(canvasWidth / 2, canvasHeight / 2, canvasWidth, canvasHeight);
    }
    pop();
  } else if (realTime >= glitchBreath) { //160ms between each 5
    let ahhh = 68744;
    let yeah = 69848;
    let breathMultiplier = 160;
    let breath1 = glitchBreath;
    let breath2 = breath1 + (breathMultiplier);
    let breath3 = breath2 + (breathMultiplier);
    let breath4 = breath3 + (breathMultiplier);
    let breath5 = breath4 + (breathMultiplier);
    let breathLength = 200;

    let sbreathMultiplier = 320;
    let sbreath1 = 70929;
    let sbreath2 = sbreath1 + (sbreathMultiplier);
    let sbreath3 = sbreath2 + (sbreathMultiplier);
    let sbreath4 = sbreath3 + (sbreathMultiplier);
    let sbreath5 = sbreath4 + (sbreathMultiplier);
    let sbreathLength = 200;
    push();
    if (realTime >= ahhh && realTime <= yeah) {
      rect(0, 0, canvasWidth, map(realTime, ahhh, yeah, 0, canvasHeight));
    }
    pop();
    push();
    fill(255, 255, 255);
    rectMode(CORNER);
    translate(map(realTime, breath1, breath1 + breathLength, -100, canvasWidth + 100), 0);
    rect(0, 0, 200, canvasHeight);
    pop();
    push();
    fill(255, 255, 255);
    rectMode(CORNER);
    translate(map(realTime, breath2, breath2 + breathLength, -100, canvasWidth + 100), 0);
    rect(0, 0, 100, canvasHeight);
    pop();
    push();
    fill(255, 255, 255);
    rectMode(CORNER);
    translate(map(realTime, breath3, breath3 + breathLength, -100, canvasWidth + 100), 0);
    rect(0, 0, 50, canvasHeight);
    pop();
    push();
    fill(255, 255, 255);
    rectMode(CORNER);
    translate(map(realTime, breath4, breath4 + breathLength, -100, canvasWidth + 100), 0);
    rect(0, 0, 50, canvasHeight);
    pop();
    push();
    fill(255, 255, 255);
    rectMode(CORNER);
    translate(map(realTime, breath5, breath5 + breathLength, -100, canvasWidth + 100), 0);
    rect(0, 0, 50, canvasHeight);
    pop();

    push();
    fill(255, 255, 255);
    rectMode(CORNER);
    translate(map(realTime, sbreath1, sbreath1 + sbreathLength, -100, canvasWidth + 100), 0);
    rect(0, 0, 200, canvasHeight);
    pop();
    push();
    fill(255, 255, 255);
    rectMode(CORNER);
    translate(map(realTime, sbreath2, sbreath2 + sbreathLength, -100, canvasWidth + 100), 0);
    rect(0, 0, 100, canvasHeight);
    pop();
    push();
    fill(255, 255, 255);
    rectMode(CORNER);
    translate(map(realTime, sbreath3, sbreath3 + sbreathLength, -100, canvasWidth + 100), 0);
    rect(0, 0, 50, canvasHeight);
    pop();
    push();
    fill(255, 255, 255);
    rectMode(CORNER);
    translate(map(realTime, sbreath4, sbreath4 + sbreathLength, -100, canvasWidth + 100), 0);
    rect(0, 0, 50, canvasHeight);
    pop();
    push();
    fill(255, 255, 255);
    rectMode(CORNER);
    translate(map(realTime, sbreath5, sbreath5 + sbreathLength, -100, canvasWidth + 100), 0);
    rect(0, 0, 50, canvasHeight);
    pop();
  } else if (realTime>imGonnaDrive2 && realTime < iThinkThe){
    push();
    fill(red(bratGreen), green(bratGreen), blue(bratGreen), map(realTime, imGonneDrive2+1000, imGonnaDrive2+2000, 0, 255));
    rect(0, 0, canvasWidth, canvasHeight);
    pop();
  } else if (realTime > coreClap) {
    push();
    rectMode(CORNER);
    fill(red(bratGreen),green(bratGreen),blue(bratGreen),map(realTime,coreClap,coreClap+1000,255,0));
    rect(0, 0, canvasWidth, canvasHeight);
    pop();
  }
  
  if (realTime > coreClap) {
    push();
    rectMode(CORNER);
    fill(255,255,255,map(realTime,coreClap,coreClap+1000,255,0));
    rect(0, 0, canvasWidth, canvasHeight);
    pop();
  }

  //Background pattern
  if (realTime < chime4) {
    for (let x = 0; x < applesHorizontal; x++) {
      for (let i = 0; i < applesVertical; i++) {
        push();
        tint(red(bratGreen), green(bratGreen), blue(bratGreen), map(realTime, chime3, chime4, 0, 100));
        scale(map(realTime, chime3, chime4, 3, 1));
        translate(map(realTime, chime3, chime4, -canvasWidth / 3, 0), map(realTime, chime3, chime4, -canvasHeight / 3, 0));
        image(appleImage, (map(i, 0, applesVertical, 0, -canvasWidth)) + (map(x, 0, applesHorizontal, 0, canvasWidth * 2)), map(i, 0, applesVertical, 0, canvasHeight * 1.75), map(bass, 60, 100, 75, 100), map(bass, 60, 100, 75, 100));
        pop();
      }
    }
  }
  if (realTime > coreClap) {
    for (let x = 0; x < applesHorizontal; x++) {
      for (let i = 0; i < applesVertical; i++) {
        push();
        tint(red(bratGreen), green(bratGreen), blue(bratGreen), map(realTime, coreClap, coreClap+750, 0, 100));
        //scale(map(realTime, chime3, chime4, 3, 1));
        //translate(map(realTime, chime3, chime4, -canvasWidth / 3, 0), map(realTime, chime3, chime4, -canvasHeight / 3, 0));
        image(appleImage, (map(i, 0, applesVertical, 0, -canvasWidth)) + (map(x, 0, applesHorizontal, 0, canvasWidth * 2)), map(i, 0, applesVertical, 0, canvasHeight * 1.75), map(bass, 60, 100, 75, 100), map(bass, 60, 100, 75, 100));
        pop();
      }
    }
  }
  if (realTime >= chime4 && realTime < chime4 + 2001) {
    push();
    let applesVertical = 7;
    let applesHorizontal = 10;
    for (let x = 0; x < applesHorizontal; x++) {
      for (let i = 0; i < applesVertical; i++) {
        tint(red(bratGreen), green(bratGreen), blue(bratGreen), 100);
        if (realTime < chime4 + 1000) {
          image(appleImage, (map(i, 0, applesVertical, 0, -canvasWidth)) + (map(x, 0, applesHorizontal, 0, canvasWidth * 2)), (map(realTime, chime4, chime4 + 1000, (map(i, 0, applesVertical, 0, canvasHeight * 1.75)), canvasHeight)), map(bass, 60, 100, 75, 100), map(bass, 60, 100, 75, 100));
        } else if (realTime < chime4 + 2000) {
          tint(red(bratGreen), green(bratGreen), blue(bratGreen), map(realTime, chime4 + 1000, chime4 + 2000, 100, 0));
          image(appleImage, (map(i, 0, applesVertical, 0, -canvasWidth)) + (map(x, 0, applesHorizontal, 0, canvasWidth * 2)), (map(realTime, chime4, chime4 + 1000, (map(i, 0, applesVertical, 0, canvasHeight * 1.75)), canvasHeight)), map(bass, 60, 100, 75, 100), map(bass, 60, 100, 75, 100));
        }
      }
    }
    pop();
  } else if (realTime >= throwApple && realTime < throwAppleEnd) {
    push();
    if (realTime >= throwApple && realTime <= throwApple + 500) {
      tint(red(bratGreen), green(bratGreen), blue(bratGreen), map(realTime, throwApple, throwApple + 500, 0, 100));
    } else if (realTime >= throwAppleEnd - 500 && realTime <= throwAppleEnd) {
      tint(red(bratGreen), green(bratGreen), blue(bratGreen), map(realTime, throwAppleEnd - 500, throwAppleEnd, 100, 0));
    } else {
      tint(red(bratGreen), green(bratGreen), blue(bratGreen), 100);
    }
    translate(3 * (canvasWidth / 4), map(realTime, throwApple, throwAppleEnd, canvasHeight, 0));
    rotate(map(realTime, throwApple, throwAppleEnd, 0, 1000));
    image(appleImage, 0, 0, 150, 150);
    pop();
  } else if ((realTime >= theAirport1 && realTime < theAirport1 + 5000)) {
    push();
    tint(red(bratGreen), green(bratGreen), blue(bratGreen), 100);
    image(carImage, map(realTime, theAirport1, theAirport1 + 4000, canvasWidth + 50, -50), 50, 50, 50);
    image(carImage, map(realTime, theAirport1 + 1000, theAirport1 + 4200, canvasWidth + 50, -50), 125, 50, 50);
    image(carImage, map(realTime, theAirport1 + 500, theAirport1 + 4200, canvasWidth + 50, -50), 325, 50, 50);
    image(carImage, map(realTime, theAirport1 + 500, theAirport1 + 3500, canvasWidth + 50, -50), 465, 50, 50);
    image(carImage, map(realTime, theAirport1 + 500, theAirport1 + 3700, canvasWidth + 50, -50), 200, 50, 50);
    pop();
    push();
    rotate(45)
    tint(red(bratGreen), green(bratGreen), blue(bratGreen), 100);
    image(planeImage, map(realTime, theAirport1, theAirport1 + 4000, -50, canvasWidth + 50), map(realTime, theAirport1, theAirport1 + 4000, canvasWidth + 50, -50), 50, 50);
    image(planeImage, map(realTime, theAirport1 + 500, theAirport1 + 4500, -150, canvasWidth + 50), map(realTime, theAirport1, theAirport1 + 4000, canvasWidth + 50, -150), 50, 50);
    pop();
  } else if ((realTime >= theAirport2 && realTime < theAirport2 + 5000)) {
    push();
    tint(red(bratGreen), green(bratGreen), blue(bratGreen), 100);
    image(carImage, map(realTime, theAirport2, theAirport2 + 4000, canvasWidth + 50, -50), 250, 50, 50);
    image(carImage, map(realTime, theAirport2 + 1200, theAirport2 + 4200, canvasWidth + 50, -50), 375, 50, 50);
    image(carImage, map(realTime, theAirport2 + 1500, theAirport2 + 4200, canvasWidth + 50, -50), 425, 50, 50);
    image(carImage, map(realTime, theAirport2 + 500, theAirport2 + 3000, canvasWidth + 50, -50), 565, 50, 50);
    image(carImage, map(realTime, theAirport2 + 750, theAirport2 + 3700, canvasWidth + 50, -50), 600, 50, 50);
    pop();
    push();
    rotate(45)
    tint(red(bratGreen), green(bratGreen), blue(bratGreen), 100);
    image(planeImage, map(realTime, theAirport2, theAirport2 + 4000, -50, canvasWidth + 850), map(realTime, theAirport2, theAirport2 + 4000, canvasWidth + 850, -50), 50, 50);
    image(planeImage, map(realTime, theAirport2 + 500, theAirport2 + 4500, -450, canvasWidth + 350), map(realTime, theAirport2, theAirport2 + 4000, canvasWidth + 350, -450), 50, 50);
    pop();
  }


  //Pulse handler
  if (drum >= 90) {
    if (!isPulsing) {
      fadeStart = 0
      isPulsing = true;
      fadeStart = millis();
      randomPulseX = round(random(0, canvasWidth));
      randomPulseY = round(random(0, canvasHeight));
      randomPulseSize = round(random(0, 100));
    }
  }
  if (drum < 90) {
    isPulsing = false;
  }

  //Pulse engine
  if ((fadeStart > 0 && realTime >= chord1 + 100 && realTime < tripleBoom+200)||(fadeStart > 0 && realTime > coreClap)) {
    let elapsedTime = millis() - fadeStart;if(realTime>=throwApple+100&&realTime<=throwAppleEnd+3500){
      push();
      noStroke();
      fill(0, 0, 0, map(elapsedTime, 100, pulseLength, 100, 0));
      circle(randomPulseX, randomPulseY, map(elapsedTime, 0, pulseLength, randomPulseSize, randomPulseSize * 3));
      pop();
    }else{
    push();
    noFill();
    stroke(0, 0, 0, map(elapsedTime, 100, pulseLength, 100, 0));
    strokeWeight(map(elapsedTime, 100, pulseLength, 100, 0));
    circle(canvasWidth / 2, canvasHeight / 2, map(elapsedTime, 0, pulseLength, 30, canvasHeight));
    pop();
    }
  }

  //Other outline effects
  if (realTime >= chime3 && realTime < tripleBoom){
    let circleDepth;
    let myDrum = 0;

    if (realTime <= chime4) {
      stroke((red(bratGreen)-100),(green(bratGreen)-100),(blue(bratGreen)-100),map(realTime,chime3,chime4,0,200));
    } else {
      stroke((red(bratGreen)-100),(green(bratGreen)-100),(blue(bratGreen)-100),200);
    }

    if (drum > 70) {
      myDrum = map(drum,70,100,0,100)
    }
    push();
    noFill();
    strokeWeight(map(myDrum,0,100,20,60));
    circleDepth = map(myDrum,0,100,200,400);
    circle(0,canvasHeight,circleDepth);
    circleDepth = map(myDrum,0,100,300,500);
    circle(canvasWidth,canvasHeight,circleDepth);
    pop();

    let valuerOther = map(other,50,100,0,100);
    let valuerDrum = map(drum,50,100,0,100);
    image(halftone[0],0,0,map(valuerOther,50,100,1200,1000),900);
    image(halftone[1],0,0,1200,map(valuerDrum,50,100,900,750));
  }

  //Head bopping value handler
  if (drum < 70) {
    drumGirl = 0
  } else {
    drumGirl = drum
  }

  //Character engine
  for (let i = 0; i <= 14; i++) {

    //Head bopping-transition in
    if (realTime < chime3 + 4300) {
      if (i == 5 || i >= 11 || i == 7 || i == 8) {

      } else if (i < 2) {
        image(girlImage[i], canvasWidth / 2, (map(realTime, chime3 + 1000, chime3 + 4300, canvasHeight + 200, canvasHeight / 1.5)), canvasHeight / 1.2, canvasHeight / 1.2);
      } else {
        image(girlImage[i], canvasWidth / 2, (map(realTime, chime3 + 1000, chime3 + 4300, canvasHeight + 200, canvasHeight / 1.5) + (map(-drumGirl, 70, 100, 0, -2))), canvasHeight / 1.2, canvasHeight / 1.2);
      }

      //Head bopping
    } else if ((realTime >= chime3 + 4300 && realTime < openEyes)||(realTime>coreClap)) {
      if (i == 5 || i >= 11 || i == 7 || i == 8) {

      } else if (i < 2) {
        image(girlImage[i], canvasWidth / 2, canvasHeight / 1.5, canvasHeight / 1.2, canvasHeight / 1.2);
      } else {
        image(girlImage[i], canvasWidth / 2, map(-drumGirl, 70, 100, (canvasHeight / 1.52), (canvasHeight / 1.52) - 2), canvasHeight / 1.2, canvasHeight / 1.2);
      }

      //Pause movements
    } else if (realTime >= openEyes && realTime < lyric1) {
      if (i == 6 || i > 10) {

      } else {
        image(girlImage[i], canvasWidth / 2, canvasHeight / 1.5, canvasHeight / 1.2, canvasHeight / 1.2);
      }

      //Lip syncing
    } else if ((realTime >= lyric1 && realTime < throwApple)||(realTime>coreClap)) {
      if (i == 6 || i > 10) {

      } else if (i < 10) {
        image(girlImage[i], canvasWidth / 2, canvasHeight / 1.5, canvasHeight / 1.2, canvasHeight / 1.2);
      } else {
        if (map(vocal, 60, 80, 10, 14) < 10) {
          image(girlImage[10], canvasWidth / 2, canvasHeight / 1.5, canvasHeight / 1.2, canvasHeight / 1.2)
        } else if (map(vocal, 60, 80, 10, 14) > 14) {
          image(girlImage[14], canvasWidth / 2, canvasHeight / 1.5, canvasHeight / 1.2, canvasHeight / 1.2)
        } else {
          image(girlImage[int(map(vocal, 50, 80, 10, 14))], canvasWidth / 2, canvasHeight / 1.5, canvasHeight / 1.2, canvasHeight / 1.2)
        }
      }

      //Resume head bopping with lip syncing
    } else if (realTime >= throwApple && realTime < preGlitchBreath) {
      push();
      if (realTime >= throwApple && realTime <= throwAppleEnd - 1000) {
        translate(map(realTime, throwApple, throwAppleEnd - 1000, 0, -canvasWidth / 4), 0);
      } else if (realTime > throwAppleEnd - 1000 && realTime < throwAppleEnd + 2000) {
        translate(-canvasWidth / 4, 0);
      } else if (realTime > throwAppleEnd + 2000 && realTime < throwAppleEnd + 4000) {
        translate(map(realTime, throwAppleEnd + 2000, throwAppleEnd + 4000, -canvasWidth / 4, 0), 0);
      }
      if (realTime > tripleBoom) {
        if (i == 2 || i == 0) {
          image(girlImage[i], canvasWidth / 2, canvasHeight / 1.5, canvasHeight / 1.2, canvasHeight / 1.2);
        }
      } else {
        if (i == 6 || i > 10) {

        } else if (i < 2) {
          image(girlImage[i], canvasWidth / 2, canvasHeight / 1.5, canvasHeight / 1.2, canvasHeight / 1.2);
        } else if (i < 10) {
          image(girlImage[i], canvasWidth / 2, map(-drumGirl, 70, 100, (canvasHeight / 1.52), (canvasHeight / 1.52) - 2), canvasHeight / 1.2, canvasHeight / 1.2);
        } else {
          if (map(vocal, 60, 80, 10, 14) < 10) {
            image(girlImage[10], canvasWidth / 2, map(-drumGirl, 70, 100, (canvasHeight / 1.52), (canvasHeight / 1.52) - 2), canvasHeight / 1.2, canvasHeight / 1.2)
          } else if (map(vocal, 60, 80, 10, 14) > 14) {
            image(girlImage[14], canvasWidth / 2, map(-drumGirl, 70, 100, (canvasHeight / 1.52), (canvasHeight / 1.52) - 2), canvasHeight / 1.2, canvasHeight / 1.2)
          } else {
            image(girlImage[int(map(vocal, 50, 80, 10, 14))], canvasWidth / 2, map(-drumGirl, 70, 100, (canvasHeight / 1.52), (canvasHeight / 1.52) - 2), canvasHeight / 1.2, canvasHeight / 1.2)
          }
        }
      }
      pop();
    } else if (realTime >= imGonnaDrive1 && realTime < imGonnaDrive1 + 2000) {
      push();
      translate(map(realTime, imGonnaDrive1, imGonnaDrive1 + 2000, 0, canvasWidth / 2), 0);
      if (realTime >= imGonnaDrive1 && realTime < imGonnaDrive1 + 500) {
        tint(255, (map(realTime, imGonnaDrive1, imGonnaDrive1 + 500, 0, 255)));
      } else if (realTime >= imGonnaDrive1 + 1500 && realTime < imGonnaDrive1 + 2000) {
        tint(255, (map(realTime, imGonnaDrive1 + 1500, imGonnaDrive1 + 2000, 255, 0)));
      }
      if (i < 5 || i == 6 || i == 9) {
        if (i < 1) {
          image(girlImage[i], canvasWidth / 2, canvasHeight / 1.5, canvasHeight / 1.2, canvasHeight / 1.2);
        } else {
          image(girlImage[i], canvasWidth / 2, map(-drumGirl, 70, 100, (canvasHeight / 1.52), (canvasHeight / 1.52) - 2), canvasHeight / 1.2, canvasHeight / 1.2);
        }
      } else if (i >= 10) {
        if (map(vocal, 60, 80, 10, 14) < 10) {
          image(girlImage[10], canvasWidth / 2, map(-drumGirl, 70, 100, (canvasHeight / 1.52), (canvasHeight / 1.52) - 2), canvasHeight / 1.2, canvasHeight / 1.2)
        } else if (map(vocal, 60, 80, 10, 14) > 14) {
          image(girlImage[14], canvasWidth / 2, map(-drumGirl, 70, 100, (canvasHeight / 1.52), (canvasHeight / 1.52) - 2), canvasHeight / 1.2, canvasHeight / 1.2)
        } else {
          image(girlImage[int(map(vocal, 50, 80, 10, 14))], canvasWidth / 2, map(-drumGirl, 70, 100, (canvasHeight / 1.52), (canvasHeight / 1.52) - 2), canvasHeight / 1.2, canvasHeight / 1.2)
        }
      }
      pop();
    } else if (realTime >= imGonnaDrive2 && realTime < imGonnaDrive2 + 2000) {
      push();
      translate(canvasWidth/2, map(realTime, imGonnaDrive2, imGonnaDrive2 + 2000, 0, canvasHeight / 2));
      scale(map(realTime, imGonnaDrive2, imGonnaDrive2 + 2000, 1, 2));
      if (realTime >= imGonnaDrive2 && realTime < imGonnaDrive2 + 500) {
        tint(255, (map(realTime, imGonnaDrive2, imGonnaDrive2 + 500, 0, 255)));
      } else if (realTime >= imGonnaDrive2 + 1500 && realTime <= imGonnaDrive2 + 2000) {
        tint(255, (map(realTime, imGonnaDrive2 + 1500, imGonnaDrive2 + 2000, 255, 0)));
      }
      if (i < 5 || i == 6 || i == 9) {
        if (i < 1) {
          image(girlImage[i], 0, canvasHeight / 1.5, canvasHeight / 1.2, canvasHeight / 1.2);
        } else {
          image(girlImage[i], 0, map(-drumGirl, 70, 100, 0, 0 - 2), canvasHeight / 1.2, canvasHeight / 1.2);
        }
      } else if (i >= 10) {
        if (map(vocal, 60, 80, 10, 14) < 10) {
          image(girlImage[10], 0, map(-drumGirl, 70, 100, 0, 0 - 2), canvasHeight / 1.2, canvasHeight / 1.2)
        } else if (map(vocal, 60, 80, 10, 14) > 14) {
          image(girlImage[14], 0, map(-drumGirl, 70, 100, 0, 0 - 2), canvasHeight / 1.2, canvasHeight / 1.2)
        } else {
          image(girlImage[int(map(vocal, 50, 80, 10, 14))], 0, map(-drumGirl, 70, 100, 0, 0 - 2), canvasHeight / 1.2, canvasHeight / 1.2)
        }
      }
      pop();
    }
  }


  //Apple Mask
  if(realTime >= iThinkThe && realTime <= rightToThe){
    push();
    translate(canvasWidth/2,canvasHeight/2);
    let resizeApple = map(realTime,iThinkThe,rightToThe,2*(canvasWidth),canvasWidth/4);
    image(appleMask[0],0,0,resizeApple,resizeApple);
    pop();
  } else if (realTime > rightToThe && realTime < coreClap) {
    push();
    translate(canvasWidth/2,map(realTime,rightToThe,coreClap,canvasHeight/2,canvasHeight-50));
    rotate(map(realTime,rightToThe,coreClap,0,45));
    let resizeApple = map(realTime,rightToThe,coreClap,canvasWidth/4,canvasWidth/5);
    image(appleMask[0],0,0,resizeApple,resizeApple);
    pop();
  } else if (realTime >= coreClap) {
    push();
    translate(canvasWidth/2,canvasHeight-50);
    rotate(45);
    let resizeApple = (canvasWidth/5);
    tint(0,map(realTime,coreClap,coreClap+1000,255,0));
    image(appleMask[1],0,0,resizeApple,resizeApple);
    pop();
  }



  //Speakers
  //137,204,4
  let speaker1PositionX = 100;
  let speaker1PositionY = 100;
  let speaker1SizeX = 100;
  let speaker1SizeY = 200;
  let speaker1Rotation = 30;
  let speaker1Color = color(red(bratGreen) - 40, green(bratGreen) - 40, blue(bratGreen) - 40);

  let speaker2PositionX = canvasWidth - 100;
  let speaker2PositionY = canvasHeight - 100;
  let speaker2SizeX = 100;
  let speaker2SizeY = 200;
  let speaker2Rotation = -130;
  let speaker2Color = color(red(bratGreen) + 100, green(bratGreen) + 100, blue(bratGreen) + 100);

  let speaker3PositionX = canvasWidth - 80;
  let speaker3PositionY = canvasHeight - 240;
  let speaker3SizeX = 100;
  let speaker3SizeY = 120;
  let speaker3Rotation = -150;
  let speaker3Color = color(red(bratGreen) + 30, green(bratGreen) + 50, blue(bratGreen) - 4);

  //Speakers
  if (realTime >= chime3 && realTime < chime3 + 3300) {
    push();
    translate(map(realTime, chime3 + 300, chime3 + 3300, -50, speaker1PositionX), map(realTime, chime3 + 300, chime3 + 3300, -50, speaker1PositionY));
    drawSpeaker(0, 0, map(drum, 0, 100, speaker1SizeX / 2, speaker1SizeX), map(drum, 0, 100, speaker1SizeY / 2, speaker1SizeY), speaker1Rotation, speaker1Color);
    pop();
    push();
    translate(map(realTime, chime3 + 300, chime3 + 3300, canvasWidth + 50, speaker2PositionX), map(realTime, chime3 + 300, chime3 + 3300, canvasHeight + 50, speaker2PositionY));
    drawSpeaker(0, 0, map(drum, 0, 100, speaker2SizeX / 2, speaker2SizeX), map(drum, 0, 100, speaker2SizeY / 2, speaker2SizeY), speaker2Rotation, speaker2Color);
    pop();
    push();
    translate(map(realTime, chime3 + 300, chime3 + 3300, canvasWidth + 50, speaker3PositionX), map(realTime, chime3 + 300, chime3 + 3300, canvasHeight + 50, speaker3PositionY));
    drawSpeaker(0, 0, map(drum, 0, 100, speaker3SizeX / 2, speaker3SizeX), map(drum, 0, 100, speaker3SizeY / 2, speaker3SizeY), speaker3Rotation, speaker3Color);
    pop();


  } else if ((realTime >= chime3 + 3300 && realTime < tripleBoom)||(realTime>coreClap)) {
    push();
    translate(speaker1PositionX, speaker1PositionY);
    drawSpeaker(0, 0, map(drum, 0, 100, speaker1SizeX / 2, speaker1SizeX), map(drum, 0, 100, speaker1SizeY / 2, speaker1SizeY), speaker1Rotation, speaker1Color);
    pop();
    push();
    translate(speaker2PositionX, speaker2PositionY);
    drawSpeaker(0, 0, map(drum, 0, 100, speaker2SizeX / 2, speaker2SizeX), map(drum, 0, 100, speaker2SizeY / 2, speaker2SizeY), speaker2Rotation, speaker2Color);
    pop();
    push();
    translate(speaker3PositionX, speaker3PositionY);
    drawSpeaker(0, 0, map(drum, 0, 100, speaker3SizeX / 2, speaker3SizeX), map(drum, 0, 100, speaker3SizeY / 2, speaker3SizeY), speaker3Rotation, speaker3Color);
    pop();
  }


  //Speaker creator
  function drawSpeaker(x, y, w, h, rotation, r, g, b) {
    push();
    rotate(rotation);
    translate(x, y);
    noStroke();
    fill(50, 50, 50);
    ellipse(0, 0, w, h);

    fill(r, g, b);
    ellipse(-w / 12, 0, w / 1.25, h / 1.25);

    fill(50, 50, 50);
    ellipse(-w / 4, 0, w / 4, h / 4);
    pop();
  }
}