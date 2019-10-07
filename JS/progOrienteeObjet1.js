class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    tellMyName(){
        return`I am ${this.name}` 
    }
    tellMyAge(){
        return `I am ${this.age} years old`
    }
}

const John = new Person("John", 40)

const Mary = new Person("Mary", 35)

console.log(John.tellMyName()+" and "+John.tellMyAge())
console.log(Mary.tellMyName()+" and "+Mary.tellMyAge())