class Jugador {
  constructor(img) {
    this.img = img;
    this.x = width / 2;
    this.y = height - 50;
    this.size = 20;
    this.speed = 4;
  }

  mover() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.speed;
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.speed;
    }
    this.x = constrain(this.x, this.size / 2, width - this.size / 2);
  }

  mostrar() {
    image(this.img, this.x - 20, this.y - 20, 50, 60);
  }

  colision(sombra) {
    let distancia = dist(this.x, this.y, sombra.x, sombra.y);
    return distancia < 30;
  }
}
