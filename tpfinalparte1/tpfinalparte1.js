//Gael Sorzini
//https://youtu.be/hU9jdfZnXwE
let fondos = [];
let estado;
let sonidoFondo, tic;
let textos = []; 

function preload() {
  textos= loadStrings("data/text.txt");
  for (let i = 0; i < 10; i++) {
    fondos[i] = loadImage("data/fondo" + i + ".jpg");
  }
  sonidoFondo = loadSound('data/suspenso.mp3'); 
  tic = loadSound('data/click.mp3'); 
}

function setup() {
  createCanvas(640, 480);
  for (let i = 0; i < 10; i++) {
  fondos[i].resize(640, 480); 
  }
   estado = "inicio";
}

function draw() {
  background(219, 195, 170);
  cargarPantallas();
  fill(222, 179, 72);
  textSize(20);
  textAlign(CENTER, CENTER);
  let valorVolumen = map(mouseX, 0, width, 0.1, 1);
  sonidoFondo.amp(valorVolumen);
  }
