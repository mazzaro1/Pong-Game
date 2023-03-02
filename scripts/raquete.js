//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;


let colidiu = false;

function mostraRaquete(x,y) {
  rect(x, y, raqueteComprimento, raqueteAltura);
}
  
function movimentaRaquete(){
    if (keyIsDown(UP_ARROW)){
      yRaquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)){
      yRaquete += 10;
    }
}
  
function colisaoRaqueteBiblioteca(x, y) {
    colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBola, yBola, raio);
    if (colidiu) {
      velocidadeXBola*= -1;
      raquetada.play();
    }
}


function movimentaRaqueteOponente(){
  velocidadeYOponente = yBola -yRaqueteOponente - raqueteComprimento / 2 - 30;
  yRaqueteOponente += velocidadeYOponente ;
  
}







