var last_words = "";
var last_words_opacity = 0;
var bratGreen = color(100,255,0);

function draw_one_frame(words, vocal, drum, bass, other,counter) {
  var realTime = map(counter, 0, 9282, 0, 154709);
  fill(200);
  textAlign(LEFT);
  // demonstrate use of non-documented "counter" variable
  var seconds = realTime
  if(seconds > 0) {
    textSize(60);
    text(nf(realTime, 3, 2), 20, height-20);
  }
  print(realTime)

  background(0,0,0);
  fill(100,255,0);

  var chime1 = 5412;
  var chime2 = 6367;
  var chime3 = 6850;
  var chord1 = 7322;
  if (realTime > chime1-100 && realTime < chime2+100){
    push()
    fill(bratGreen, map(realTime, chime1+600, chime2, 100, 0));
    rect(0,0,map(other, 50, 100, 0, canvasWidth/2),canvasHeight);
    pop()
  }

  if (realTime > chime2-100 && realTime < chime3+400){
    push()
    fill(100, 255, 0, map(realTime, chime2+300, chime3+100, 100, 0));
    rect(canvasWidth,0,map(other, 50, 100, 0, -canvasWidth/2),canvasHeight);
    pop()
  }

if (realTime > chime3){
  background(bratGreen);
}

  if (realTime > chord1 && realTime < 7814){
    push()
    noFill();
    stroke(bratGreen, map(realTime, chord1+200, 7814, 100, 0));
    strokeWeight(20);
    circle(canvasWidth/2,canvasHeight/2,map(realTime, chord1, 7814, 30, canvasHeight));
    pop()
  }







  

  
  // background(255,236,180); // cream
  // fill(244,161,39); // orange

  // var stripeWidth = map(other, 40, 100, 40, 80, true);

  // var numStripes = height / stripeWidth;
  // for(var i=0; i<numStripes; i=i+2) {
  //   var cury = map(i, 0, numStripes-1, 0, height);
  //   rect(0, cury, width, stripeWidth);
  // }

  // var triangleHeight = map(bass, 40, 100, 200, 550, true);
  // fill(117,200,174); // teal
  // for(var i=0; i<3; i++) {
  //   var cur_x = map(i, 0, 4, 0, width);
  //   var next_x = map(i+1, 0, 3, 0, width);
  //   var mid_x = (cur_x + next_x) / 2.0;
  //   //var cur_y = 4 * height / 5;
  //   var cur_y = height 
  //   triangle(cur_x, cur_y, mid_x, cur_y - triangleHeight, next_x, cur_y);
  // }


  // var drumSize = map(drum, 30, 100, 30, 300, true);
  // fill(90,61,43); // brown
  // rect(0, 0, drumSize, drumSize);
  // rect(width, 0, -drumSize, drumSize);
  // rect(0, height, drumSize, -drumSize);
  // rect(width, height, -drumSize, -drumSize);

  // var ovalPlace = map(vocal, 20, 100, height-50, 50, true);
  // var ovalSize = map(vocal, 20, 100, 60, 150, true);
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
