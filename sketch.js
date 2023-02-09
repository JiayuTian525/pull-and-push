

function setup() {
  createCanvas(1760, 2350);
  rectMode(CENTER);
  noStroke();

}

function draw() {
  background(55);

  fill(244,185,54);
  circle(820,833,810); // first arc

  fill(232,72,59);
  rect(820, 250, 880, 360);//first red rect

  fill(55);
  rect(620,840,500,810); //background rect

  fill(244, 178, 168);
  rect(625, 580, 490, 300);//second pink rect

  fill(48,164,96);
  circle(820,1730,1000); // second green arc

  fill(55);
  rect(820+550,1732,1000,1000); //second bg rect

  fill(26, 121, 190);
  triangle(870, 1730, 1370, 1730, 870, 2230);//blue tri
  ellipse(625, 980, 430, 430);//small blue circle

  fill(232,72,59);
  ellipse(625+500, 980+500, 430, 430);//final red circle

 

}
