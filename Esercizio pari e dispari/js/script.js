// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// scelgo il mio numero e lo salvo in una variabile:
let mioNum = parseInt(document.querySelector("input").value);
console.log("Il mio numero è", mioNum);

// scelgo pari o dispari e lo salvo in una variabile:
let miaScelta = document.querySelector("#scelta").value;

// creo bottone per click su scelta del numero/ pari e dispari e la funzione:
let botton1 = document.querySelector("button");
botton1.addEventListener("click",
    function(){
        document.querySelector("#testo-num").innerHTML = `Hai scelto il numero ${mioNum}`;
        document.querySelector("#testo-scelta").innerHTML = `Hai scelto ${miaScelta}`;
        document.getElementById("risultati").style.display = "block";
    }
);


// while((miaScelta !== "pari") && (miaScelta !== "dispari")){
//     alert("Devi inserire pari o dispari");
// }

// output numero CPU:
let numCpuRandom = creaNumCpu();
document.querySelector("#numCpu").innerHTML = `Il numero generato dal pc è ${numCpuRandom}`;

// creo la funzione per generare un numero random per il pc:
function creaNumCpu(){
    let numCpu = Math.floor(Math.random() * 5) + 1;

    return numCpu;
}

// output somma mio numero e quello del pc:
let somma = mioNum + numCpuRandom;
document.querySelector("#somma").innerHTML = `La somma tra il tuo numero e il numero del pc è ${somma}`

let risultato = pariODispari();
document.querySelector("#risultato-somma").innerHTML = `${somma} è ${risultato}`

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
    document.querySelector("#risultato-finale").innerHTML = `Complimenti, hai vinto!`
}else{
    document.querySelector("#risultato-finale").innerHTML = `Mi dispiace, hai perso!`
}

