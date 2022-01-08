const player1 = "Bandeira Vermelha";
const player2 = "Bandeira Verde";
var playtime = player1;
var gameOver = false;




updateMostrador();
initialEspaco();

function updateMostrador() {
    if(gameOver) return;
    var player = document.querySelectorAll("img")[0];
    player.setAttribute("src", "images/X.png");
    
    if(playtime === player2) {
        var player = document.querySelectorAll("img")[0];
        player.setAttribute("src", "images/O.png");
    }
}

function initialEspaco() {
    var arrayEspaco = document.getElementsByClassName("espaco");
    const traverseSpace = Array.from(arrayEspaco);
    
    traverseSpace.forEach((item) => {
        item.addEventListener("click", function() {
            if(gameOver) return;

            if(item.getElementsByTagName("img").length === 0) {

                if(playtime == player1) {
                    item.innerHTML = '<img class= "header-img" src="images/X.png" alt="Jogador 1">';
                    item.setAttribute("jogada", player1);
                    playtime = player2;
                }
                else{
                    item.innerHTML = '<img class= "header-img" src="images/O.png" alt="Jogador 2">';
                    item.setAttribute("jogada", player2);
                    playtime = player1;
                }
            }
            updateMostrador();
            checkVencedor();
        });
    });
}

function checkVencedor() {
    var a1 = document.getElementById("a1").getAttribute("jogada");
    var a2 = document.getElementById("a2").getAttribute("jogada");
    var a3 = document.getElementById("a3").getAttribute("jogada");

    var b1 = document.getElementById("b1").getAttribute("jogada");
    var b2 = document.getElementById("b2").getAttribute("jogada");
    var b3 = document.getElementById("b3").getAttribute("jogada");

    var c1 = document.getElementById("c1").getAttribute("jogada");
    var c2 = document.getElementById("c2").getAttribute("jogada");
    var c3 = document.getElementById("c3").getAttribute("jogada");

    var vencedor = "";

    if(((a1==b1 && a1==c1) || (a1==a2 && a1==a3) || (a1==b2 && a1==c3) && a1!="")) {
        vencedor = a1;
    }

    else if(((b2==b1 && b2==b3 && b2!="") || (b2==a2 && b2==c2 && b2!="") || (b2==c3 && b2==a3) && b2!="")) {
        vencedor = b2;
    }

    else if(((c3==c2 && c3==c1) || (c3==a3 && c3==b3) && c3!="")) {
        vencedor = c3;
    }

    if(vencedor !="") {
        gameOver = true;
        document.getElementById("venceu").innerHTML = "Vencedor: " + vencedor;
    }
}