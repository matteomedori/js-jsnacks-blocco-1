"use strict";

const array = [];
let somma = 0;

//for-------------------
for (let i = 0; somma < 50; i++) {
  const numero = Number(prompt("Inserisci un numero"));
  if (!isNaN(numero)) {
    array.push(numero);
    somma += array[i];
  }
}

//while-----------------
let i = 0;
while (somma < 50) {
  const numero = Number(prompt("Inserisci un numero"));
  if (!isNaN(numero)) {
    array.push(numero);
    somma += array[i];
    i++;
  }
}

//do-while--------------
let j = 0;
do {
  const numero = Number(prompt("Inserisci un numero"));
  if (!isNaN(numero)) {
    array.push(numero);
    somma += array[j];
    j++;
  }
} while (somma < 50);
