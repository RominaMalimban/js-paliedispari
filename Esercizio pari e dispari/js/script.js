// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// salvo in una variabile l'input number:
let mioNum = document.querySelector("#numero");
console.log("Il mio numero è", mioNum);

// scelgo pari o dispari e lo salvo in una variabile:
let miaScelta = document.querySelector("#scelta");
console.log(miaScelta.value)
let valoreScelta = miaScelta.value; 

// creo bottone per click su scelta del numero/ pari e dispari e la funzione:
let botton1 = document.querySelector("button");
botton1.addEventListener("click",
    function(){
        // salvo in una variabile ciò che l'utente scrive nell'input:
        let selezione = parseInt(mioNum.value);

        document.querySelector("#testo-num").innerHTML = `Hai scelto il numero ${selezione}.`;
        document.querySelector("#testo-scelta").innerHTML = `Hai scelto ${valoreScelta}.`;
        miaScelta = "";
        mioNum.value = "";

        document.querySelector("#risultati").style.display = "block";

        // output somma mio numero e quello del pc:
        let somma = selezione + numCpuRandom;
        document.querySelector("#somma").innerHTML = `La somma tra il tuo numero e il numero del pc è ${somma}.`

        // creo la funzione per stabilire se la somma è pari o dispari:
        function pariODispari(){
            if(somma % 2 === 0){
                return "pari";
            }else{
                return "dispari";
            }
        }


        let risultato = pariODispari();
        document.querySelector("#risultato-somma").innerHTML = `${somma} è ${risultato}.`;

        // dichiaro chi ha vinto:
        if( valoreScelta === risultato ){
            document.querySelector("#risultato-finale").innerHTML = `Complimenti, hai vinto!`
        }else{
            document.querySelector("#risultato-finale").innerHTML = `Mi dispiace, hai perso!`
        }
    }
);

// output numero CPU:
let numCpuRandom = creaNumCpu();
document.querySelector("#numCpu").innerHTML = `Il numero generato dal pc è ${numCpuRandom}.`;

// creo la funzione per generare un numero random per il pc:
function creaNumCpu(){
    let numCpu = Math.floor(Math.random() * 5) + 1;

    return numCpu;
}



