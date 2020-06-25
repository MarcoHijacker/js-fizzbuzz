// // Esercizio FizzBuzz JS

// Dichiarazione variabili
var listaNumeri = [];

// Riempio l'array con i numeri da 1 a 100 (aggiungo +1 per fare in modo che listaNumeri[1]=1)
for (var i = 0; i < 100; i++) {
  listaNumeri[i+1] = (i+1);
}

// Faccio scorrere un for da 1 a 100: se trovo un numero multiplo di 3, ma non multiplo di 5, inserisco stringa Fizz nel relativo posto.
// Se trovo un numero multiplo di 5 e non multiplo di 3, inserisco Buzz. Se è sia multiplo di 3 che di 5, inserisco FizzBuzz.
for (var i = 0; i < 100; i++) {
  if ((i+1)%3 == 0 && (i+1)%5 != 0) {
    listaNumeri[i+1] = "Fizz";
  } else if ((i+1)%5 == 0 && (i+1)%3 != 0) {
      listaNumeri[i+1] = "Buzz";
    } else if ((i+1)%3 == 0 && (i+1)%5 == 0) {
      listaNumeri[i+1] = "FizzBuzz";
    }
  // Stampo nell'html il contenuto degli array dopo le sostituzioni Fizz e Buzz
  document.getElementById('listaNumeri').innerHTML += "<li>" + listaNumeri[i+1] + "</li>";
}

// BONUS - Versione senza array

// for (var i = 1; i < 100; i++) {
//   if (i%3 == 0 && i%5 != 0) {
//     console.log("Fizz");
//   } else if (i%5 == 0 && i%3 != 0) {
//     console.log("Buzz");
//   } else if (i%5 == 0 && i%3 == 0) {
//     console.log("FizzBuzz");
//   } else {
//     console.log(i);
//   }
// }
