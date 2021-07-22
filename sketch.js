let player;
console.log("ml5 version:", ml5.version);

function setup() {
  createCanvas(400, 400);
  player = new Player();
}

function keyPressed() {
  if (key === " ") {
    player.jump();
  }
}

function draw() {
  background(170, 155, 120);
  player.show();
  player.move();
}
