function mousePressed() {
  let botonPresionado = false;
  if (estado === "inicio") {
    if (detectarBoton(555, 50, 70, 50)) {
      estado = "primera";
      botonPresionado = true;
    }
    if (detectarBoton(10, height - 60, 120, 40)) {
      estado = "inicio5";
      botonPresionado = true;
    }} else if (estado === "primera") {
    if (detectarBoton(555, 50, 70, 50)) {
      estado = "segunda";
      botonPresionado = true;
    }
    if (detectarBoton(555, height - 100, 70, 50)) {
      estado = "inicio";
      botonPresionado = true;
    }} else if (estado === "segunda") {
    if (detectarBoton(555, 50, 70, 50)) {
      estado = "inicio2";
      botonPresionado = true;
    }
    if (detectarBoton(555, height - 100, 70, 50)) {
      estado = "primera";
      botonPresionado = true;
    }} else if (estado === "inicio2") {
    if (detectarBoton(80,355,120,50)) {
      estado = "tercera";
      botonPresionado = true;
    }
    if (detectarBoton(310,355,140,50)) {
      estado = "cuarta";
      botonPresionado = true;
    }} else if (estado === "tercera") {
    if (detectarBoton(555, height - 100, 70, 50)) {
      estado = "inicio2";
      botonPresionado = true;
    }} else if (estado === "cuarta") {
    if (detectarBoton(555, 50, 70, 50)) {
      estado = "quinta";
      botonPresionado = true;
    }} else if (estado === "quinta") {
    if (detectarBoton(555, 50, 70, 50)) {
      estado = "inicio3";
      botonPresionado = true;
    }
    if (detectarBoton(555, height - 100, 70, 50)) {
      estado = "cuarta";
      botonPresionado = true;
    }} else if (estado === "inicio3") {
    if (detectarBoton(80,355,120,50)) {
      estado = "sexta";
      botonPresionado = true;
    }
    if (detectarBoton(310,355,140,50)) {
      estado = "septima";
      botonPresionado = true;
    }} else if (estado === "sexta") {
    if (detectarBoton(555, height - 100, 70, 50)) {
      estado = "inicio3";
      botonPresionado = true;
    }} else if (estado === "septima") {
    if (detectarBoton(555, 50, 70, 50)) {
      estado = "inicio4";
      botonPresionado = true;
    }} else if (estado === "inicio4") {
    if (detectarBoton(80,355,120,50)) {
      estado = "octava";
      botonPresionado = true;
    }
    if (detectarBoton(310,355,140,50)) {
      estado = "novena";
      botonPresionado = true;
    }} else if (estado === "octava") {
    if (detectarBoton(555, height - 100, 70, 50)) {
      estado = "inicio4";
      botonPresionado = true;
    }} else if (estado === "novena") {
    if (detectarBoton(555, 50, 70, 50)) {
      estado = "inicio5";
      botonPresionado = true;
    }} else if (estado === "inicio5") {
    if (detectarBoton(555, 50, 70, 50)) {
      estado = "inicio";
      botonPresionado = true;
    }}
    if (botonPresionado) {
    tic.play();
    }
    if (!sonidoFondo.isPlaying()) {
    sonidoFondo.loop(true);
    }}

function cargarPantallas() {
  if (estado === "inicio") {
    cargaOtroFondo(fondos[0], 0, 0, width - 100, height);
    dibujarBoton(555, 50, 70, 50);
    dibujarBoton(10, height - 60, 120, 40);
    fill(255, 255, 255);
    textSize(30);
    text(textos[0],50,50,450,50);
    text(textos[19],50,50,450,600);
    textSize(20);
    text(textos[22],580,75);
    text(textos[25],60, height - 40);
  } else if (estado === "primera") {
    cargaOtroFondo(fondos[1], 0, 0, width - 100, height);
    dibujarBoton(555, 50, 70, 50);
    dibujarBoton(555, height - 100, 70, 50);
     fill(255, 255, 255);
    text(textos[1],50,50,450,100);
    text(textos[22],580,75);
    text(textos[23],580,height-75);
  } else if (estado === "segunda") {
    cargaOtroFondo(fondos[2], 0, 0, width - 100, height);
    dibujarBoton(555, 50, 70, 50);
    dibujarBoton(555, height - 100, 70, 50);
     fill(255, 255, 255);
    text(textos[2],50,50,450,100);
    text(textos[22],580,75);
    text(textos[23],580,height-75)
  } else if (estado === "inicio2") {
    cargaOtroFondo(fondos[0], 0, 0, width - 100, height);
    dibujarBoton(80,355,120,50);
    dibujarBoton(310,355,140,50);
     fill(255, 255, 255);
    text(textos[3],280,50);
    text(textos[4],130,380);
    text(textos[5],370,380);
  } else if (estado === "tercera") {
    cargaOtroFondo(fondos[3], 0, 0, width - 100, height);
     dibujarBoton(555, height - 100, 70, 50);
     fill(255, 255, 255);
    text(textos[6],280,50);
    text(textos[23],580,height-75)
  } else if (estado === "cuarta") {
    cargaOtroFondo(fondos[4], 0, 0, width - 100, height);
    dibujarBoton(555, 50, 70, 50);
     fill(255, 255, 255);
    text(textos[7],50,50,450,50);
    text(textos[22],580,75);
  } else if (estado === "quinta") {
    cargaOtroFondo(fondos[5], 0, 0, width - 100, height);
    dibujarBoton(555, 50, 70, 50);
    dibujarBoton(555, height - 100, 70, 50);
     fill(255, 255, 255);
    text(textos[8],50,50,450,600);
    text(textos[22],580,75);
    text(textos[23],580,height-75)
  } else if (estado === "inicio3") {
    cargaOtroFondo(fondos[0], 0, 0, width - 100, height);
     dibujarBoton(80,355,120,50);
    dibujarBoton(280,355,195,50);
     fill(255, 255, 255);
    text(textos[9],50,50,450,50);
    text(textos[10],130,380);
    text(textos[11],370,380);
  } else if (estado === "sexta") {
    cargaOtroFondo(fondos[6], 0, 0, width - 100, height);
   dibujarBoton(555, height - 100, 70, 50);
     fill(255, 255, 255);
    text(textos[12],50,50,450,600);
    text(textos[23],580,height-75)
  } else if (estado === "septima") {
    cargaOtroFondo(fondos[7], 0, 0, width - 100, height);
    dibujarBoton(555, 50, 70, 50);
     fill(255, 255, 255);
    text(textos[13],50,50,450,600);
    text(textos[22],580,75);
  } else if (estado === "inicio4") {
    cargaOtroFondo(fondos[0], 0, 0, width - 100, height);
     dibujarBoton(80,355,120,50);
    dibujarBoton(310,355,140,50);
     fill(255, 255, 255);
    text(textos[14],50,50,450,50);
    text(textos[15],130,380);
    text(textos[16],370,380);
  } else if (estado === "octava") {
    cargaOtroFondo(fondos[8], 0, 0, width - 100, height);
    dibujarBoton(555, height - 100, 70, 50);
     fill(255, 255, 255);
    text(textos[17],50,50,450,600);
    text(textos[23],580,height-75)
  } else if (estado === "novena") {
    cargaOtroFondo(fondos[9], 0, 0, width - 100, height);
    dibujarBoton(555, 50, 70, 50); 
     fill(255, 255, 255);
    text(textos[18],50,50,450,600);
    text(textos[22],580,75);
  } else if (estado === "inicio5") {
    cargaOtroFondo(fondos[0], 0, 0, width - 100, height); 
    dibujarBoton(555, 50, 70, 50); 
     fill(255, 255, 255);
    text(textos[20],50,50,450,50);
    text(textos[21],50,50,450,300);
    text(textos[24],580,80);
  }}

function detectarBoton(x, y, an, al) {
  return mouseX > x && mouseX < x + an && mouseY > y && mouseY < y + al;
}


function cargaOtroFondo(imag, x, y, ancho, alto, alinea = CORNER) {
  imageMode(alinea);
  image(imag, x, y, ancho, alto);
}


function dibujarBoton(px, py, pan, pal) {
  if (detectarBoton(px, py, pan, pal)) {
    fill(180, 150, 100);
  } else {
    fill(149, 126, 97);
  }
  rect(px, py, pan, pal, pal / 4);
}
