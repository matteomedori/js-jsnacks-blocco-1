"use strict";
/*
Fai inserire un numero, che chiameremo N, all’utente.
Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100. Ogni volta che ne crei uno, stampalo a schermo.
*/

//numero inserito dall'utente
const numero = Number(prompt("Inserisci un numero"));

if (!isNaN(numero)) {
  //ciclo che esegue tante volte quanto il numero inserito
  for (let i = 0; i < numero; i++) {
    const array = [];
    //ciclo che esegue 10 volte
    for (let j = 0; j < 10; j++) {
      const numeroRandom = Math.floor(Math.random() * 101);
      array.push(numeroRandom);
    }
    alert(`array ${i + 1}: ${array}`);
  }
} else {
  alert("Non hai inserito un numero!");
}
