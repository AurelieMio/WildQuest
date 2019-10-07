/* Array.prototype.filter - Exercice 1

Ecrire une fonction getPositiveNumbers qui reçoit comme un argument un tableau de nombres.
En utilisant filter, cette fonction doit renvoyer un tableau ne contenant que des nombres
positifs ou nuls.

Exemple de tableau d'entrée:
  [7, -4, 2, 0, -10, 3, 11]
Sortie attendue:
  [7, 2, 0, 3, 11]

  Fonction qui marche aussi en decomposee*/ 
 array = [7, -4, 2, 0, -10, 3, 11]




// function getPositiveNumbers(number) {
//   return number >= 0
// }
// newArray = array.filter(getPositiveNumbers)
// vrai fonction pour les test
//newArray = array.filter(getPositiveNumbers)

const getPositiveNumbers = poupi =>
  {
    return poupi.filter(number => number >= 0);
  }




// Marche aussi avec callback independante
// const callback = number =>
//     number >=0


// function getPositiveNumbers(poupi){
//   return poupi.filter(callback);
// }

console.log(getPositiveNumbers(array))
// Si besoin, tu peux toujours visualiser le résultat avec console.log,
// mais alors, il faut alors lancer l'exercice avec node filter/ex1
// console.log(getPositiveNumbers([-2, -1, 0, 1, 2]));

// Ne pas modifier l'export
module.exports = getPositiveNumbers;
