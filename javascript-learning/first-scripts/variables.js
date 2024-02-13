let firstName = "Petr";
let lastName;

console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);
firstName = "Alžběta";
console.log(lastName);
console.log(firstName);
lastName = "Fifka";
console.log(lastName);
firstName = "Pepa";
console.log(firstName);
firstName = lastName;
console.log(lastName);
// Redeklarace proměnné var
if (true) {
  var varInsideIf = "Proměnná var"; //Toto se ignoruje
  var varInsideIf = "Změněno";
  console.log(varInsideIf);
}
/*
    Toto
    je 
    víceřádková
    poznámka
*/
if (true) {
  let letInsideIf = "Proměnná let";
  console.log(/* Poznámka! */ letInsideIf);
}

let letInsideIf = "Změněno";

const constantVariable = "nastaveno";
