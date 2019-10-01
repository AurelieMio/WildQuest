const wilder = {
    name : "toto",
    city : "Paris",
    age : 50,
    isLearningJs : true,
}
console.log(wilder.hasOwnProperty('name'));
console.log(wilder.hasOwnProperty('isLearningJs'));
console.log(wilder.hasOwnProperty('isLearningPhp'));
console.log(Object.keys(wilder));
wilder.knowsHTML = true
wilder.knowsCSS = false
wilder.hobbies = "tricot"
console.log(wilder);
delete wilder.name;
wilder.firstName = "Toto"
wilder.lastName = "Titi"
console.log(wilder)