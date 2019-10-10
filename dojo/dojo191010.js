// Creation fonction map homemade
array = [1,45,3,74,14,5,67,9,40] // Tableau d'essai

// const map = (callback,tableau) => {
//     let array2 = [];
//     for (let i=0; i<tableau.length; i++){
//          array2[i]= callback(tableau[i])
//     }
//     return array2
// }

// // 1e version callback
// const multiply = (valueInit) => {
//     return valueInit*4;
// }

// console.log(map(multiply, array))

// // 2e version callback qui marche aussi (la callback renvoie sur une fonction avec des arguments (INCEPTION))

// const multiply = (valueInit, multiplier, diviser) => {
//     return valueInit*multiplier/diviser;
// }

// console.log(map((item)=> multiply(item, 4, 12), array))

// Homemade filter (incroyable ca fonctionne \o/)

const filterDIY = (array, cb) => {
    let array2=[]
    let h=0
    for (let j=0; j<array.length; j++){
        if (cb(array[j])=== true ){
            array2[h] = array[j]
            h++
            console.log(array[j])
        } else {
        }
    }
    return array2
}

cb = (item) => item < 20

console.log(filterDIY(array, cb))