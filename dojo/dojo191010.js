// Creation fonction map homemade
array = [1,2,3] // Tableau d'essai

const map = (callback,tableau) => {
    let array2 = [];
    for (let i=0; i<tableau.length; i++){
         array2[i]= callback(tableau[i])
    }
    return array2
}

// 1e version callback
const multiply = (valueInit) => {
    return valueInit*4;
}

console.log(map(multiply, array))

// 2e version callback qui marche aussi (la callback renvoie sur une fonction avec des arguments (INCEPTION))

const multiply = (valueInit, multiplier, diviser) => {
    return valueInit*multiplier/diviser;
}

console.log(map((item)=> multiply(item, 4, 12), array))

