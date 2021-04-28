// 1. Email presenti nella lista
var mails = ["gianni@gmail.com", "andrea@gmail.com", "marco@gmail.com", "anna@gmail.com", "francesca@gmail.com",]

// 2. richiesta della mail all'utente
var mailUtente = prompt("Qual'è la tua email?");
document.getElementById("mail").innerHTML = mailUtente;
document.getElementById("mail").style.color = "violet";

// 2.1
var check = false;

// 3. Ciclo per confrontare se la mail utente è presente nella lista
for (var i = 0; i < mails.length; i++) {

    if (mailUtente == mails[i]) {
        check = true;
    }
}

// 4. Stampa messaggio (fuori dal ciclo) nel caso in cui la mail sia presente o meno
if (check == true) {
    document.getElementById("conferma").innerHTML = "Complimenti sei nella lista!";
    document.getElementById("conferma").style.color = "green";
} else {
    document.getElementById("conferma").innerHTML = "Spiacente, non sei in lista!";
    document.getElementById("conferma").style.color = "red";
}


