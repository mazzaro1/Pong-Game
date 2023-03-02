//variavel responsável pelos pontos do jogador
let meusPontos = 0;

//variável responsável pelos pontos do oponente.
let = pontosOponente = 0;

function incluiPlacar(){
    stroke(255)
    textAlign(CENTER);
    textSize(16)
    fill(color(80,80, 80));
    rect(150,10,40,20);
    fill(225)
    text(meusPontos, 170 , 26)
    fill(color(80,80, 80));
    rect(450,10,40,20);
    fill(225)
    text(pontosOponente, 470, 26)
}

function marcaPonto(){
    if (xBola > 590){
        meusPontos += 1
        ponto.play();
    }
    if (xBola < -1){
        pontosOponente += 1
        ponto.play();
    }
}

