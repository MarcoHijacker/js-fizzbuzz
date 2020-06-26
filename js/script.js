// // Esercizio FizzBuzz JS

// Dichiarazione variabili
var listaNumeri = [];

// Riempio l'array con i numeri da 1 a 100 (aggiungo +1 per fare in modo che listaNumeri[1]=1)
for (var i = 0; i < 100; i++) {
  listaNumeri[i+1] = (i+1);
}

// Faccio scorrere un for da 1 a 100: se trovo un numero multiplo di 3 e di 5 contemporaneamente, inserisco stringa FizzBuzz nel relativo posto dell'array.
// Se trovo un numero multiplo di 3 (e non contemporaneamente multiplo di 5, altrimenti mi sarei fermato al primo IF), inserisco Fizz nel relativo posto dell'array.
// Se trovo un numero multiplo di 5 (e non contemporaneamente multiplo di 3, altrimenti mi sarei fermato al primo IF), inserisco Buzz nel relativo posto dell'array.
for (var i = 0; i < 100; i++) {
  if ((i+1)%3 == 0 && (i+1)%5 == 0) { // Potevo giustamente usare (i+1)%15 == 0 per ovvie ragioni matematiche
    listaNumeri[i+1] = "FizzBuzz";
  } else if ((i+1)%3 == 0) {
      listaNumeri[i+1] = "Fizz";
    } else if ((i+1)%5 == 0) {
      listaNumeri[i+1] = "Buzz";
    }
  // Stampo nell'html il contenuto degli array dopo le sostituzioni Fizz e Buzz
  document.getElementById('listaNumeri').innerHTML += "<li>" + listaNumeri[i+1] + "</li>";
}

// BONUS - Versione senza array

// for (var i = 1; i < 100; i++) {
//   if (i%3 == 0 && i%5 == 0) {
//     console.log("FizzBuzz");
//   } else if (i%3 == 0) {
//     console.log("Fizz");
//   } else if (i%5 == 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }
