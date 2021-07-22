class Player {
  constructor() {
    this.size = 50;
    this.x = this.size;
    this.y = height - this.size;
    this.velocityY = 0;
    this.gravity = 3;
  }
  jump() {
    this.velocityY = -25;
  }
  move() {
    this.y += this.velocityY;
    this.velocityY += this.gravity;
    this.y = constrain(this.y, 0, height - this.size);
  }
  show() {
    rect(this.x, this.y, 30, 50);
  }
}
