/**
 * Week 2 - Exercise 6
 * @author: Jam Furaque
 */
// • Using ES6 syntax for class and subclass using extends to create a Sedan subclass which derives
// from Car Class. The parameters for the Car class is the model and year. The parameters for the
// subclass is the model, year and balance.
// • Use the super key word in the Sedan subclass to set the model and name in base Car
// constructor.

// SAMPLE OUTPUT
// Model: Pontiac Firebird Engine 1976
// Volvo SD has a balance of $30000.00
class Car {
    constructor(model, year){
        this.model = model;
        this.year = year;
    } 
    details(){
        return(`Model: ${this.model}, and Engine: ${this.year}`);
    }
}

class Sedan extends Car {
    constructor(model, year, balance){
        super(model, year);
        this.balance = balance;
    }
    info(){
        return(`${this.model} has a balance of $${this.balance.toFixed(2)}`);
    }
}

const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());


const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());

