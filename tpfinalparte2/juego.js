class Juego {
  constructor(imagenes) {
    this.imagenes = imagenes;
    this.estado = "inicio";
    this.tiempo = 0;
    this.tiempoVictoria = 30;
    this.jugador = new Jugador(imagenes.personaImg);
    this.sombras = this.generarSombras(8, imagenes.sombraImg);
    this.barraDeVida = new BarraDeVida();
    this.textosInicio = {
      titulo: "VESTIR UNA SOMBRA",
      subtitulo: "Sorzini Gael",
      instrucciones: "Esquiva las sombras y trata de aguantar 30 segundos sin morir.",
      mensaje: "Haz clic para comenzar",
    };

    this.textosVictoria = {
      titulo: "¡Has vencido la sombra!",
      mensaje: "Haz clic para volver al inicio.",
    };

    this.textosDerrota = {
      titulo: "Has sido atrapado por las sombras...",
      mensaje: "Haz clic para reiniciar.",
    };
  }

  reiniciar() {
    this.estado = "juego"; 
    this.tiempo = 0;
    this.jugador = new Jugador(this.imagenes.personaImg);
    this.sombras = this.generarSombras(8, this.imagenes.sombraImg);
    this.barraDeVida = new BarraDeVida();
  }

  generarSombras(cantidad, sombraImg) {
    let sombras = [];
    for (let i = 0; i < cantidad; i++) {
      sombras.push(new Sombra(sombraImg));
    }
    return sombras;
  }

  mostrar() {
    image(this.imagenes.fondoImg, 0, 0, width, height);

    if (this.estado === "inicio") {
      this.mostrarPantallaInicio();
    } else if (this.estado === "juego") {
      this.jugar();
    } else if (this.estado === "victoria") {
      this.mostrarPantallaVictoria();
    } else if (this.estado === "derrota") {
      this.mostrarPantallaDerrota();
    }
  }

  actualizar() {
    if (this.estado === "juego") {
      this.tiempo += deltaTime / 1000;

      if (this.tiempo >= this.tiempoVictoria) {
        this.estado = "victoria";
      }
    }
  }

  jugar() {
    this.jugador.mostrar();
    this.jugador.mover();

    for (let sombra of this.sombras) {
      sombra.mostrar();
      sombra.mover();

      if (this.jugador.colision(sombra) && !sombra.contacto) {
        sombra.contacto = true;
        this.barraDeVida.reducirVida();

        if (this.barraDeVida.vida <= 0) {
          this.estado = "derrota";
        }
      } else if (!this.jugador.colision(sombra)) {
        sombra.contacto = false;
      }
    }

    this.barraDeVida.mostrar();
    fill(255);
    textSize(16);
    textAlign(RIGHT);
    text("Tiempo: " + nf(this.tiempo, 0, 2) + "s", width - 10, 30);
  }

  mostrarPantallaInicio() {
    fill(255);
    textAlign(CENTER);
    textSize(25);
    text(this.textosInicio.titulo, width / 2, height / 2 - 125);
    textSize(22);
    text(this.textosInicio.subtitulo, width / 2, height / 2 - 80);
    textSize(18);
    text(this.textosInicio.instrucciones, width / 2, height / 2);
    text(this.textosInicio.mensaje, width / 2, height / 2 + 60);
  }

  mostrarPantallaVictoria() {
    fill(255);
    textAlign(CENTER);
    textSize(24);
    text(this.textosVictoria.titulo, width / 2, height / 2 - 40);
    textSize(16);
    text(this.textosVictoria.mensaje, width / 2, height / 2);
  }

  mostrarPantallaDerrota() {
    fill(255);
    textAlign(CENTER);
    textSize(24);
    text(this.textosDerrota.titulo, width / 2, height / 2 - 40);
    textSize(16);
    text(this.textosDerrota.mensaje, width / 2, height / 2);
  }
}

function mousePressed() {
  if (juego.estado === "inicio" || juego.estado === "derrota" || juego.estado === "victoria") {
    juego.reiniciar();
    sonido.play();
     if (musica.isPlaying()) {
    musica.pause();
  } else {
    musica.play();
  }
}
    loop();
  } 
