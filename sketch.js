let noiseScale1 = 0.01;
let noiseScale2 = 0.02;
let noiseScale3 = 0.03;

let color1;
let color2;
let color3;

function setup() {
  createCanvas(600*4/5, 800*4/5);
  frameRate(32);
  background(8, 10, 12);
  color1 = color(18, 36, 75);
  color2 = color(30, 129, 139);
  color3 = color(202, 45, 49);
  color4 = color(0,61,66);
}

function draw() {
  for (let x = 0; x < width; x++) {
    let noiseVal1 = noise(x * noiseScale1, frameCount * noiseScale1);
    let y1 = map(noiseVal1, 0, 1, 0, height/3);
    
    let noiseVal2 = noise(x * noiseScale2, frameCount * noiseScale2);
    let y2 = map(noiseVal2, 0, 1, height/3, height*2/3);
    
    let noiseVal3 = noise(x * noiseScale3, frameCount * noiseScale3);
    let y3 = map(noiseVal3, 0, 1, height*2/3, height);
    
    noFill();
    stroke(lerpColor(color1, color2, noiseVal1),100);
    strokeWeight(2);
    line(x, y1-100, x, height);
    
    stroke(lerpColor(color2, color4, noiseVal2), 100);
    line(x, y2-50, x, height);
    
    stroke(lerpColor(color3, color1, noiseVal3), 100);
    line(x, y3-50, x, height);
  }
}
