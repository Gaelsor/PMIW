class Sombra {
  constructor(img) {
    this.img = img;
    this.x = random(width);
    this.y = -random(50, 150);
    this.size = 85;
    this.velY = 6; 
    this.contacto = false;
  }

  mover() {
    this.y += this.velY;
    if (this.y > height) {
      this.y = -this.size;
      this.x = random(width);
    }
  }

  mostrar() {
    image(this.img, this.x - 42, this.y - 42, this.size, this.size);
  }
}
