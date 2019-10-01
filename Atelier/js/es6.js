const hello = (firstName) => `Hello ${firstName} welcome into the Wild`

const fruits = ["Bananas", "Oranges", "Strawberries"];

const vegetables = ["Cabbages", "Carotts"];

const plantBasedDiet = [...fruits, ...vegetables]

console.log(hello("toto"));
console.log(plantBasedDiet);