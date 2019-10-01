class Vehicles {
    constructor(color, model){
        this.color = color;
        this.model = model;
    }
    sayModelColor(){ 
        console.log(`My model is ${this.model} in ${this.color} color`)    
    }
}

class Car extends Vehicles{
    constructor(color, model){
        super(color, model);
    }
    sayModelColor(){ 
        console.log(`I'm a car and my model is ${this.model} in ${this.color} color`) 
}}

class Moto extends Vehicles{
    constructor(color, model){
        super(color, model);
    }
    sayModelColor () {console.log (`I'm a motocycle and my model is ${this.model} in ${this.color} color`)
    }
}

const mycar = new Car ("red", "totoya")
console.log(mycar)
mycar.sayModelColor()