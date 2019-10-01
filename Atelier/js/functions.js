const sayHelloWorld = () => {return("Hello World!")}
const doubleArgument = message => {return(message +" " + message)}
const multiplyPerTwo = value => value*2
const multiplyTwoNumber = (value1, value2) => value1*value2
const surroundWithStar = message => {return ("*" + message +"*")}


console.log(sayHelloWorld());
console.log(doubleArgument("John"));
console.log(multiplyPerTwo(4));
console.log(multiplyTwoNumber(4,8));
console.log(surroundWithStar("John"));