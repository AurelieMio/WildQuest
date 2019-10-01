let multiplicationTotal = 0
const valeurA = 4
const valeurB = 6
let nbLoop = 0

while(nbLoop != valeurB){
    multiplicationTotal = multiplicationTotal + valeurA;
    nbLoop ++ ;
}
console.log(multiplicationTotal)


 let somme = 0
 for(let i=0; i <= 100; i = i+5){
     console.log(i);
     somme = somme + i
 }
console.log(somme)

const operation = '/'
switch(operation){
    case "*":
        console.log(valeurA*valeurB);
        break;
    case "+":
        console.log(valeurA+valeurB);
        break;
    case "-":
        console.log(valeurA-valeurB);
        break;
    case "/":
        console.log(valeurA/valeurB);
        break;
}
