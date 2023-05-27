let player1 = Math.floor((Math.random() * 6) + 1);
let player2 = Math.floor((Math.random() * 6) + 1);

document.querySelectorAll("img")[0].setAttribute("src", "img/dice" + player1 + ".png");
document.querySelectorAll("img")[1].setAttribute("src", "img/dice" + player2 + ".png");

if (player1 > player2) {

          document.querySelector("h1").innerHTML = "Player1 Wins🏁";

} else if (player2 > player1) {

          document.querySelector("h1").innerHTML = "Player2 Wins🏁";

} else if (player1 === player2) {

          document.querySelector("h1").innerHTML = "Draw!";

} else {
          document.querySelector("h1").innerHTML = "Refresh Me" 
}
