class BarraDeVida {
  constructor() {
    this.vida = 90;
  }

  mostrar() {
    fill(255, 0, 0);
    rect(10, 10, this.vida * 2, 20);
    noFill();
    stroke(255);
    rect(10, 10, 180, 20);
  }

  reducirVida() {
    this.vida -= 30;
  }
}
