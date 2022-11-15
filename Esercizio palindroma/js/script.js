// Palidroma



// chiedo all'utente di inserire una parola:
let parola = document.getElementById("parola").value;
console.log("La parola inserita è", parola);

// output su pagina:

// creo bottone per il click:
let button = document.querySelector("button");

button.addEventListener("click",
    function(){
        let risultato = parPalindroma(parola);
        document.getElementById("risultato").innerHTML = `La parola da te inserita ${risultato}`;
    }
);


// creo la funzione per capire se è palindroma:
function parPalindroma(word){
    // divido la parola in sottostringhe:
    let parDivisa = word.split("");
    console.log("La parola divisa è:", parDivisa);

    // inverto le lettere:
    let parInvertita = parDivisa.reverse();
    console.log("La parola invertita è", parInvertita);

    // riunisco le lettere:
    let parFinale = parInvertita.join("");
    console.log("La parola finale è:", parFinale);

    // verifico se è palindroma oppure no:
    if(parFinale === parola){
        return "è palindroma"
    }else{
        return "non è palindroma"
    };
}




