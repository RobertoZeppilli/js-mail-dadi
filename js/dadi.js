// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// 1. funzione per far partire l'azione
function clicca() {

    // 1.1 scelta random dell'utente con assegnazione relative icone
    var sceltaUtente = Math.floor((Math.random() * 6) + 1);
    document.getElementById("scelta-utente").innerHTML = sceltaUtente;
    document.getElementById("scelta-utente").style.color = "#fff";
    document.getElementById("scelta-utente").style.fontSize = "60px";
    document.getElementById("scelta-utente").style.marginLeft = "10px";
    if (sceltaUtente == 1) {
        document.getElementById("scelta-utente").innerHTML = '<i class="fas fa-dice-one"></i>';
    } else if (sceltaUtente == 2) {
        document.getElementById("scelta-utente").innerHTML = '<i class="fas fa-dice-two"></i>';
    } else if (sceltaUtente == 3) {
        document.getElementById("scelta-utente").innerHTML = '<i class="fas fa-dice-three"></i>';
    } else if (sceltaUtente == 4) {
        document.getElementById("scelta-utente").innerHTML = '<i class="fas fa-dice-four"></i>';
    } else if (sceltaUtente == 5) {
        document.getElementById("scelta-utente").innerHTML = '<i class="fas fa-dice-five"></i>';
    } else {
        document.getElementById("scelta-utente").innerHTML = '<i class="fas fa-dice-six"></i>';
    }

    // 1.2 scelta random pc con assegnazione relative icone
    var sceltaPc = Math.floor((Math.random() * 6) + 1);
    document.getElementById("scelta-pc").innerHTML = sceltaPc;
    document.getElementById("scelta-pc").style.color = "#fff";
    document.getElementById("scelta-pc").style.fontSize = "60px";
    document.getElementById("scelta-pc").style.marginLeft = "10px";
    if (sceltaPc == 1) {
        document.getElementById("scelta-pc").innerHTML = '<i class="fas fa-dice-one"></i>';
    } else if (sceltaPc == 2) {
        document.getElementById("scelta-pc").innerHTML = '<i class="fas fa-dice-two"></i>';
    } else if (sceltaPc == 3) {
        document.getElementById("scelta-pc").innerHTML = '<i class="fas fa-dice-three"></i>';
    } else if (sceltaPc == 4) {
        document.getElementById("scelta-pc").innerHTML = '<i class="fas fa-dice-four"></i>';
    } else if (sceltaPc == 5) {
        document.getElementById("scelta-pc").innerHTML = '<i class="fas fa-dice-five"></i>';
    } else {
        document.getElementById("scelta-pc").innerHTML = '<i class="fas fa-dice-six"></i>';
    }

    // 2. confrontare le scelte e decretare il vincitore, o un pareggio
    if (sceltaUtente > sceltaPc) {
        document.getElementById("risultato").innerHTML = " Hai vinto!";
        document.getElementById("risultato").style.color = "green";

    } else if (sceltaUtente == sceltaPc) {
        document.getElementById("risultato").innerHTML = " Pareggio!";
        document.getElementById("risultato").style.color = "grey";

    } else {
        document.getElementById("risultato").innerHTML = " Hai perso!";
        document.getElementById("risultato").style.color = "red";

    }
}


