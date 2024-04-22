
// Lista elementi

const emailRegistrate = [`pippo@pluto.it`, `mario@rossi.it`, `giseppe@verdi.it`, `marco@rossi.it`, `mario.verdi@pluto.it`,]
const numbEmail = emailRegistrate.length;
console.log(numbEmail);


function Cliccato() {

    const inputUtente = document.getElementById(`mail`).value;
    console.log(inputUtente)

    for (i = 0; i < numbEmail; i++) {

        let emailOra = emailRegistrate[i];
        console.log(emailOra)

        if (emailOra = inputUtente) {
            document.getElementById(`conferma`).innerHTML = `Sei in lista!`
        }

    }
}

//RIFERIMENTO AL BOTTONE

var button = document.getElementById("mailbutt");

// EVENTO CHE FA ATTIVARE LA FUNZIONE | FUNZIONE DA FAR SVOLGERE

button.addEventListener("click", Cliccato);