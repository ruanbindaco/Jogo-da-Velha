/*
 1 - condição de vitória, empate ou derrota
 2 - Ia começando as vezes
 3 - Placar
*/
var jogadas = 0;
var grid = [0, 0, 0, 0, 0, 0, 0, 0, 0];
function play(pos){
  var img = document.getElementById(pos);
  img.src = "x.png";
  img.removeAttribute("onclick");
  jogadas++;
  grid[ pos - 1 ] = 1;

  verificaVitoria();

  if(jogadas != 9){
  playIa();
  }
  if(jogadas >= 9){
    endGame(0);
  }
  console.log(grid);
  }
function playIa(){
  var ia = Math.floor(Math.random() * 9 ) + 1; // [1, 9]
  var img = document.getElementById(ia);
 
  if(img.onclick){
    img.src = "circulo.png";
    img.removeAttribute("onclick");
    jogadas++;
    grid[ ia - 1] = -1;
    verificaVitoria();
  }else{
    playIa();
  }
}

function verificaVitoria(){
  //verificar as condições de vitoria do jogador e da Ia
  var linha1 = grid[0] + grid[1] + grid[2];
  var linha2 = grid[3] + grid[4] + grid[5];
  var linha3 = grid[6] + grid[7] + grid[8];

  var coluna1 = grid[0] + grid[3] + grid[6];
  var coluna2 = grid[1] + grid[4] + grid[7];
  var coluna3 = grid[2] + grid[5] + grid[8];

  var diagonal1 = grid[0] + grid[4] + grid [8];
  var diagonal2 = grid[2] + grid[4] + grid [6];

  if(
    linha1 == 3 || linha2 == 3 || linha3 == 3 || coluna1 == 3 || coluna2 == 3 || coluna3 == 3 || diagonal1 == 3 || diagonal2 == 3
    ){
      //jogador ganhar
      endGame(1);
    }
  if(
    linha1 == -3 || linha2 == -3 || linha3 == -3 || coluna1 == -3 || coluna2 == -3 || coluna3 == -3 || diagonal1 == -3 || diagonal2 == -3
    ){
      //IA ganhar
      endGame(-1);
    }
}

 function endGame(ganhador){ 
  var btn = document.getElementById("btnReset")
  btn.disabled = false;

  if(ganhador == 1){
    btn.innerText = "Você Ganhou! jogar novamente?";
    acabou();
  }if(ganhador == -1){
    btn.innerText = "Você Perdeu! jogar novamente?";
    acabou();
  }if(ganhador == 0){
    btn.innerText = "Jogar novamente?";
    acabou();
  }
 }

 function acabou(){
//retira todos os onclick 
  var img = document.getElementById("1");
  img.removeAttribute("onclick");

  var img = document.getElementById("2");
  img.removeAttribute("onclick");

  var img = document.getElementById("3");
  img.removeAttribute("onclick");

  var img = document.getElementById("4");
  img.removeAttribute("onclick");

  var img = document.getElementById("5");
  img.removeAttribute("onclick");

  var img = document.getElementById("6");
  img.removeAttribute("onclick");

  var img = document.getElementById("7");
  img.removeAttribute("onclick");

  var img = document.getElementById("8");
  img.removeAttribute("onclick");

  var img = document.getElementById("9");
  img.removeAttribute("onclick");
 }
