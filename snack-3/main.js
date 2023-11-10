"use strict";

/*
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

//inizializzo variabile somma
let somma = 0;

//ciclo di 10 iterazioni
for (let i = 0; i < 10; i++) {
  //salvo numero inserito dall'utente
  const numeroInserito = Number(prompt("inserisci un numero"));

  //sommo ogni numero alla somma complessiva
  somma += numeroInserito;
}

console.log(`Somma numeri inseriti: ${somma}`);
