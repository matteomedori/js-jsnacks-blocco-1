"use strict";

const array = [];
let somma = 0;

//for-------------------
for (let i = 0; somma < 50; i++) {
  console.log(i);
  const numero = Number(prompt("Inserisci un numero"));
  if (!isNaN(numero)) {
    array.push(numero);
    somma += array[i];
  } else {
    console.log("Inserisci solo numeri!");
    i--;
  }
}

//while-----------------
// let i = 0;
// while (somma < 50) {
//   const numero = Number(prompt("Inserisci un numero"));
//   if (!isNaN(numero)) {
//     array.push(numero);
//     somma += array[i];
//     i++;
//   } else {
//     console.log("Inserisci solo numeri!");
//   }
// }

// //do-while--------------
// let j = 0;
// do {
//   const numero = Number(prompt("Inserisci un numero"));
//   if (!isNaN(numero)) {
//     array.push(numero);
//     somma += array[j];
//     j++;
//   } else {
//     console.log("Inserisci solo numeri!");
//   }
// } while (somma < 50);

console.log("Somma dei numeri inseriti: ", somma);
