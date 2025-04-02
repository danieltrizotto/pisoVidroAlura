document.getElementById("botao").addEventListener("click", function () {///só ativa quando aperta o botao

var rodada = 1;

while(rodada <= 3) {
    console.log("Rodada: " + rodada);
    
    escolhaJogador =prompt("nivel:"+rodada+"/escolha um piso : 1 - 2 - 3");

    if(escolhaJogador > 3 || escolhaJogador == 0){
        alert("opçao invalida");
        continue;
    }

    var pisoQuebrado = Math.floor(Math.random()*3) + 1;

    if(escolhaJogador == pisoQuebrado) {
        alert("vc escolheu vidro,game over");
        break;
    }else{
        alert("vc escolheu piso certo, continue,o vidro estava no "+pisoQuebrado);
    }

    rodada = rodada + 1;
}

if(rodada > 3){
    alert("vc não conseguiu quebrar o vidro em 3 rodadas,vc venceu");
}



});