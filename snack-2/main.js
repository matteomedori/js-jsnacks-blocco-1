"use strict";
//L’utente inserisce due parole in successione, con due prompt.
//Il software stampa prima la parola più corta, poi la parola più lunga.

const parola1 = prompt("Inserisci la prima parola");
const parola2 = prompt("Inserisci la seconda parola");

if (parola1.length > parola2.length) {
  console.log(parola2);
  console.log(parola1);
} else if (parola1.length < parola2.length) {
  console.log(parola1);
  console.log(parola2);
} else {
  console.log(parola1);
  console.log(parola2);
  console.log("Le parole hanno stessa lunghezza");
}
