// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// scelgo il mio numero e lo salvo in una variabile:
let mioNum = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log("Il mio numero è", mioNum);

let miaScelta;
while((miaScelta !== "pari") && (miaScelta !== "dispari")){
    miaScelta = prompt("Scegli pari o dispari");
}
console.log("La mia scelta è:", miaScelta);

let numCpuRandom = creaNumCpu();
console.log("Il numero del cpu è", numCpuRandom);

// creo la funzione per generare un numero random per il pc:
function creaNumCpu(){
    let numCpu = Math.floor(Math.random() * 5) + 1;

    return numCpu;
}


// sommo il mio numero e quello del pc:
let somma = mioNum + numCpuRandom;
console.log("La somma dei due numeri è:", somma);

let risultato = pariODispari();
console.log("Il risultato è:", risultato);

// creo la funzione per stabilire se la somma è pari o dispari:
function pariODispari(){
    if(somma % 2 === 0){
        return "pari";
    }else{
        return "dispari";
    }
}


// dichiaro chi ha vinto:
if( miaScelta === risultato ){
    console.log("HAI VINTOOO");
}else{
    console.log("Mi dispiace ha vinto il pc")
}

