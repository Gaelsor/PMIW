//https://youtu.be/e0-zXDws4hc
//Gael Sorzini comision 1
let juego;
let sonido;
let imagenes = {}; 

function preload() {

  imagenes.fondoImg = loadImage("data/fondo.jpg");
  imagenes.personaImg = loadImage("data/persona.png");
  imagenes.sombraImg = loadImage("data/sombra.png");
  sonido = loadSound('data/sonido.mp3');
}

function setup() {
  createCanvas(600, 400);
  juego = new Juego(imagenes);
  noLoop();
}

function draw() {
  background(20);
  juego.mostrar();
  juego.actualizar();
}
