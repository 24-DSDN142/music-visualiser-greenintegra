let last_words = "";
let last_words_opacity = 0;
let firstRun = true;
let img;
let fadeStart = 0;
let isPulsing = false;
let pulseLength = 500;
let appleImage;
let girlImage = [];
let loaded = false;
let drumGirl;


function draw_one_frame(words, vocal, drum, bass, other, counter) {
  if (firstRun) {
    angleMode(DEGREES);
    imageMode(CENTER);

    appleImage = loadImage('apple.png');
    girlImage.push(loadImage('/girl/girlBody.png'));          //0
    girlImage.push(loadImage('/girl/girlClothes.png'));       //1
    girlImage.push(loadImage('/girl/girlHead.png'));          //2
    girlImage.push(loadImage('/girl/girlFrontHair.png'));     //3
    girlImage.push(loadImage('/girl/girlChin.png'));          //4
    girlImage.push(loadImage('/girl/girlEyelids.png'));       //5
    girlImage.push(loadImage('/girl/girlEyesClosed.png'));    //6
    girlImage.push(loadImage('/girl/girlLeftEye.png'));       //7
    girlImage.push(loadImage('/girl/girlRightEye.png'));      //8
    girlImage.push(loadImage('/girl/girlNose.png'));          //9
    girlImage.push(loadImage('/girl/mouth.png'));             //10
    girlImage.push(loadImage('/girl/mouth1.png'));            //11
    girlImage.push(loadImage('/girl/mouth2.png'));            //12
    girlImage.push(loadImage('/girl/mouth3.png'));            //13
    girlImage.push(loadImage('/girl/mouth4.png'));            //14

    firstRun = false
  }
  noStroke();
  background(0, 0, 0);
  let interval = 480;
  let bratGreen = color(137, 204, 4);
  let realTime = map(counter, 0, 9282, 0, 154709);

  let adjustedTime = realTime - 7828;
  let cycleTime = adjustedTime % interval;
  if (adjustedTime < 0) {
    adjustedTime = 0;
  }


  let chime1 = 5412;
  let chime2 = 6367;
  let chime3 = 6850;
  let chord1 = 7322;
  let chord2 = 7828;
  let chord3 = 8306; //480ms approx. between beats
  let openEyes = 14500;
  let lyric1 = 15200;

  if (realTime > chime1 - 100 && realTime < chime1 + 1400) {
    push();
    fill(137, 204, 4, map(realTime, chime1 + 400, chime1 + 500, 100, 0));
    rect(0, 0, map(other, 50, 100, 0, canvasWidth / 2), canvasHeight);
    pop();
  }

  if (realTime > chime2 - 100 && realTime < chime2 + 1400) {
    push();
    fill(137, 204, 4, map(realTime, chime2 + 400, chime2 + 500, 100, 0));
    rect(canvasWidth, 0, map(other, 50, 100, 0, -canvasWidth / 2), canvasHeight);
    pop();
  }

  if (realTime > chime3) {
    push();
    rectMode(CENTER);
    fill(137, 204, 4);
    rect(canvasWidth / 2, canvasHeight / 2, map(realTime, chime3, chime3 + 100, 0, canvasWidth), canvasHeight);
    pop();
    if (realTime < 16657){
      push();
      let applesVertical = 7;
      let applesHorizontal = 10;
      for (let x = 0; x < applesHorizontal; x++) {
        for (let i = 0; i < applesVertical; i++) {
          tint(255, 50);
          image(appleImage, (map(i, 0, applesVertical, 0, -canvasWidth)) + (map(x, 0, applesHorizontal, 0, canvasWidth * 2)), map(i, 0, applesVertical, 0, canvasHeight * 1.75), map(bass, 60, 100, 75, 100), map(bass, 60, 100, 75, 100));

        }
      }
      pop();
    } else {
      push();
      let applesVertical = 7;
      let applesHorizontal = 10;
      for (let x = 0; x < applesHorizontal; x++) {
        for (let i = 0; i < applesVertical; i++) {
          tint(255, 50);
          if (realTime < 16657+1000){
          image(appleImage, (map(i, 0, applesVertical, 0, -canvasWidth)) + (map(x, 0, applesHorizontal, 0, canvasWidth * 2)), (map(realTime, 16657, 16657+1000, (map(i, 0, applesVertical, 0, canvasHeight * 1.75)), canvasHeight)), map(bass, 60, 100, 75, 100), map(bass, 60, 100, 75, 100));
          } else {
            tint(255,map(realTime, 16657+1000, 16657+2000,50,0));
            image(appleImage, (map(i, 0, applesVertical, 0, -canvasWidth)) + (map(x, 0, applesHorizontal, 0, canvasWidth * 2)), (map(realTime, 16657, 16657+1000, (map(i, 0, applesVertical, 0, canvasHeight * 1.75)), canvasHeight)), map(bass, 60, 100, 75, 100), map(bass, 60, 100, 75, 100));
          }
          
        }
      }
      pop();}
    push();
    if (drum > 90) {
      if (!isPulsing) {
        fadeStart = 0
        isPulsing = true;
        fadeStart = millis();
      }
    }
    if (drum < 90) {
      isPulsing = false;
    }

    if (fadeStart > 0 && realTime > chord1 + 100) {
      let elapsedTime = millis() - fadeStart;
      // if (elapsedTime > pulseLength){
      //   isPulsing = false;
      // }
      push();
      noFill();
      stroke(0, 0, 0, map(elapsedTime, 100, pulseLength, 100, 0));
      strokeWeight(map(elapsedTime, 100, pulseLength, 100, 0));
      circle(canvasWidth / 2, canvasHeight / 2, map(elapsedTime, 0, pulseLength, 30, canvasHeight));
      pop();
    }
    pop();

    push();
    if (drum < 70) {
      drumGirl = 0
    } else {
      drumGirl = drum
    }
    if (loaded == false) {
      for (let i = 0; i <= 14; i++) {
        if (realTime < chime3 + 4300) {
          // translate(0, map(realTime, chime3, chime3+3300, canvasHeight, canvasHeight/1.5));
          if (i == 5 || i >= 11 || i == 7 || i == 8) {

          } else if (i < 2) {
            image(girlImage[i], canvasWidth / 2, (map(realTime, chime3+1000, chime3+4300, canvasHeight+200, canvasHeight/1.5)), canvasHeight / 1.2, canvasHeight / 1.2);
          } else {
            image(girlImage[i], canvasWidth / 2, (map(realTime, chime3+1000, chime3+4300, canvasHeight+200, canvasHeight/1.5)+(map(-drumGirl, 70, 100, 0, -2))), canvasHeight / 1.2, canvasHeight / 1.2);
          }
        } else if (realTime > chime3 + 4300 && realTime < openEyes) {
          if (i == 5 || i >= 11 || i == 7 || i == 8) {

          } else if (i < 2) {
            image(girlImage[i], canvasWidth / 2, canvasHeight / 1.5, canvasHeight / 1.2, canvasHeight / 1.2);
          } else {
            image(girlImage[i], canvasWidth / 2, map(-drumGirl, 70, 100, (canvasHeight / 1.52), (canvasHeight / 1.52) - 2), canvasHeight / 1.2, canvasHeight / 1.2);
          }
        } else if (realTime > openEyes && realTime < lyric1) {
          if (i == 6 || i > 10) {

          } else {
            image(girlImage[i], canvasWidth / 2, canvasHeight / 1.5, canvasHeight / 1.2, canvasHeight / 1.2);
          }
        } else if (realTime > lyric1) {
          if (i == 6 || i > 10) {

          } else if (i < 10) {
            image(girlImage[i], canvasWidth / 2, canvasHeight / 1.5, canvasHeight / 1.2, canvasHeight / 1.2);
          } else {
            if (map(vocal,50,80,10,14) < 10) {
              image(girlImage[10], canvasWidth / 2, canvasHeight / 1.5, canvasHeight / 1.2, canvasHeight / 1.2)
            } else if (map(vocal,50,80,10,14) > 14) {
              image(girlImage[14], canvasWidth / 2, canvasHeight / 1.5, canvasHeight / 1.2, canvasHeight / 1.2)
            } else {
              image(girlImage[int(map(vocal, 50, 80, 10, 14))], canvasWidth / 2, canvasHeight / 1.5, canvasHeight / 1.2, canvasHeight / 1.2)
            }
          }
        }
      }
    }
    pop();
  }




  let speaker1PositionX = 100;
  let speaker1PositionY = 100;
  let speaker1SizeX = 100;
  let speaker1SizeY = 200;
  let speaker1Rotation = 30;
  let speaker1Color = color(180, 244, 51);

  let speaker2PositionX = canvasWidth - 100;
  let speaker2PositionY = canvasHeight - 100;
  let speaker2SizeX = 100;
  let speaker2SizeY = 200;
  let speaker2Rotation = -130;
  let speaker2Color = color(205, 252, 111);

  let speaker3PositionX = canvasWidth - 80;
  let speaker3PositionY = canvasHeight - 240;
  let speaker3SizeX = 100;
  let speaker3SizeY = 120;
  let speaker3Rotation = -150;
  let speaker3Color = color(168, 252, 0);

  if (realTime > chime3 && realTime < chime3 + 3300) {
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


  } else if (realTime > chime3 + 3300) {
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

  // if (realTime > chord3 && realTime < chord3+500){
  //   push();
  //   noFill();
  //   stroke(137,204,4, map(realTime, chord3+200, 7814, 100, 0));
  //   strokeWeight(20);
  //   circle(canvasWidth/2,canvasHeight/2,map(realTime, chord3, 7814, 30, canvasHeight));
  //   pop();
  // }
  // while(realTime > chord3){
  //   push();
  //   noFill();
  //   stroke(137,204,4, map(realTime, chord3+200, 7814, 100, 0));
  //   strokeWeight(20);
  //   circle(canvasWidth/2,canvasHeight/2,map(realTime, chord3, 7814, 30, canvasHeight));
  //   wait(.5);
  //   pop();
  // }

  // for(let i = 1; i < 50; i++){
  //   push();
  //   print(i);
  //   let circlePulseStep = (i*500)+chord3
  //   noFill();
  //   stroke(137,204,4, map(realTime, chord3+200, 7814, 100, 0));
  //   strokeWeight(20);
  //   circle(canvasWidth/2,canvasHeight/2,map(realTime, chord3, 7814, 30, canvasHeight));
  //   pop();
  // }












  // background(255,236,180); // cream
  // fill(244,161,39); // orange

  // let stripeWidth = map(other, 40, 100, 40, 80, true);

  // let numStripes = height / stripeWidth;
  // for(let i=0; i<numStripes; i=i+2) {
  //   let cury = map(i, 0, numStripes-1, 0, height);
  //   rect(0, cury, width, stripeWidth);
  // }

  // let triangleHeight = map(bass, 40, 100, 200, 550, true);
  // fill(117,200,174); // teal
  // for(let i=0; i<3; i++) {
  //   let cur_x = map(i, 0, 4, 0, width);
  //   let next_x = map(i+1, 0, 3, 0, width);
  //   let mid_x = (cur_x + next_x) / 2.0;
  //   //let cur_y = 4 * height / 5;
  //   let cur_y = height 
  //   triangle(cur_x, cur_y, mid_x, cur_y - triangleHeight, next_x, cur_y);
  // }


  // let drumSize = map(drum, 30, 100, 30, 300, true);
  // fill(90,61,43); // brown
  // rect(0, 0, drumSize, drumSize);
  // rect(width, 0, -drumSize, drumSize);
  // rect(0, height, drumSize, -drumSize);
  // rect(width, height, -drumSize, -drumSize);

  // let ovalPlace = map(vocal, 20, 100, height-50, 50, true);
  // let ovalSize = map(vocal, 20, 100, 60, 150, true);
  // fill(229,119,30); // darker orange
  // ellipse(width/2, ovalPlace, ovalSize);

  // if(words == "") {
  //   last_words_opacity = last_words_opacity * 0.95;
  //   words = last_words;
  // }
  // else {
  //   last_words_opacity = (1 + last_words_opacity) * 1.1;
  //   if(last_words_opacity > 255) {
  //     last_words_opacity = 255;
  //   }
  // }
  // last_words = words;

  // textFont('Georgia');
  // textAlign(CENTER);
  // textStyle(BOLD);
  // textSize(80);
  // noStroke();
  // fill(0, 0, 0, int(last_words_opacity));
  // text(words, width/2, height/2);
}