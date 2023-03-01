//variáveis da bola
let xBola = 300;
let yBola = 200;
let diametroBola = 15;
let raio = diametroBola / 2;


//velocidade da bola
let velocidadeXBola = 6;
let velocidadeYBola = 6;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let comprimentoRaquete = 10;
let alturaRaquete = 90;

let colidiu = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBola();
  movimentaBola();
  verificaColisaoBorda();
  minhaRaquete ();  
  movimentaRaquete();
  //verificaColisaoRaquete();
  colisaoRaquete()
}

function mostraBola (){
  circle( xBola, 
          yBola,
          diametroBola);
}

function movimentaBola(){
  xBola += velocidadeXBola;
  yBola += velocidadeYBola;
}

function verificaColisaoBorda () {
   if (xBola+ raio > width  ||
       xBola < 0) {
      velocidadeXBola *= -1; 
  }
  
  if (yBola + raio  > height || 
      yBola < 0) {
     velocidadeYBola *= -1; 
  }
}

function minhaRaquete(){
  rect (xRaquete,
        yRaquete,  
        comprimentoRaquete, 
        alturaRaquete)
}

function movimentaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function verificaColisaoRaquete(){
    if(xBola - raio < xRaquete + comprimentoRaquete && yBola - raio < yRaquete +         alturaRaquete && yBola + raio > yRaquete){
       velocidadeXBola *= -1; 
    }
}

function colisaoRaquete() {
    colidiu = collideRectCircle(xRaquete, yRaquete, comprimentoRaquete, alturaRaquete,   xBola, yBola, raio);
    if (colidiu) {
        velocidadeXBola *= -1;
    }
}