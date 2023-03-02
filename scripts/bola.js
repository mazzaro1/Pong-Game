//variáveis da bola
let xBola = 300;
let yBola = 200;
let diametroBola = 15;
let raio = diametroBola / 2;


//velocidade da bola
let velocidadeXBola = 6;
let velocidadeYBola = 6;

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

  function bolinhaNaoFicaPresa(){
    if (xBola + raio < 0){
      console.log('bolinha travou')
    xBola = 23
    }
  }