// GIOCO DEI DADI

// SELEZIONO IL CORPO PER AGGIUNGERE I CONTENUTI
const main = document.querySelector(`main`);

// GENERO UN NUMERO CASUALE PER L UTENTE

let numeroUtente = Math.floor(Math.random() * 6 + 1);
console.log(numeroUtente);
main.innerHTML += `<h2>Il tuo numero: ${numeroUtente}</h2>`

// GENERO UN NUMERO CASUALE PER IL COMPUTER 

let numeroPc = Math.floor(Math.random() * 6 + 1);
main.innerHTML += `<h2>Il numero del Pc: ${numeroPc}</h2>`
console.log(numeroPc);


// Controllo chi vince con la rispettiva conseguenza
if (numeroUtente > numeroPc) {
    main.innerHTML += `<h2>Hai Vinto!</h2>`
    alert(`Hai Vinto!`)
} else if (numeroUtente < numeroPc) {
    alert(`Hai perso!`)
    main.innerHTML += `<h2>Hai Perso!</h2>`
} else {
    main.innerHTML += `<h2>Hai Pareggiato!</h2>`
    alert(`Pareggio!`)
}
