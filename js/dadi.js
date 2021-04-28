// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// 1. creare scelta random per l'utente e per il pc
var sceltaUtente = Math.floor((Math.random() * 6) + 1);
document.getElementById("scelta-utente").innerHTML = sceltaUtente;
document.getElementById("scelta-utente").style.color = "yellow";
// console.log(sceltaUtente);

var sceltaPc = Math.floor((Math.random() * 6) + 1);
document.getElementById("scelta-pc").innerHTML = sceltaPc;
document.getElementById("scelta-pc").style.color = "yellow";
// console.log(sceltaPc);

// 2. confrontare le scelte e decretare il vincitore, o un pareggio
if (sceltaUtente > sceltaPc) {
    document.getElementById("risultato").innerHTML = "Hai vinto!";
    document.getElementById("risultato").style.color = "green";
    // console.log("hai vinto");
} else if (sceltaUtente == sceltaPc) {
    document.getElementById("risultato").innerHTML = "Pareggio!";
    document.getElementById("risultato").style.color = "grey";
    // console.log("pareggio");
} else {
    document.getElementById("risultato").innerHTML = "Hai perso!";
    document.getElementById("risultato").style.color = "red";
    // console.log("hai perso");
}



