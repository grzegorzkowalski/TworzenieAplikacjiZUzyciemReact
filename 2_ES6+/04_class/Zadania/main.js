class Vehicle {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

class Car extends Vehicle {
    drive() {
        console.log(`Nazywam ${this.getName()} i jadę.`);
    }
}

class Boat extends Vehicle {
    sail() {
        console.log(`Nazywam ${this.getName()} i płynę.`);
    }
}

class Plane extends Vehicle {
    fly() {
        console.log(`Nazywam ${this.getName()} i lecę.`);
    }
}

const car = new Car("Kit");
car.drive();

const boat = new Boat("Lodka Bols");
boat.sail();

const plane = new Plane("Orzeł");
plane.fly();
// plane.drive();
// plane.sail();

//Zadanie 2
class Duck {
    constructor() {
        this.type = "ordinary";
    }
    swim() {
        console.log("I am swimming...");
    }
    sound() {
        console.log("Quack quack");
    }
    print() {
        console.log(`Looks like ${this.type} duck`);
    }
    // fly() {
    //     console.log( "I'm flying...");
    // }
}

Duck.prototype.fly = function () {
    console.log("I am flying from prototype");
}

const donaldDuck = new Duck();
donaldDuck.swim();
donaldDuck.sound();
donaldDuck.print();
donaldDuck.fly();

class WildDuck extends Duck {
    constructor() {
        super(); // <-- dziedziczymy konstruktor
        // działa jeśli w konstruktorze nie musimy podawać
        // parametrów
        // jest bez parametrowy
        this.type = "wild"; // <-- nadpisujemy wartość this.type
    }
}

const wildDuck = new WildDuck();
wildDuck.swim();
wildDuck.sound();
wildDuck.print();
wildDuck.fly();

class MallardDuck extends Duck {
    constructor() {
        super();
        this.type = "malard";
    }
}

const daisyDuck = new MallardDuck();
daisyDuck.swim();
daisyDuck.sound();
daisyDuck.print();
daisyDuck.fly();

class RubberDuck extends Duck {
    constructor() {
        super();
        this.type = "rubber";
    }
    fly() { // <-- przysłonięcie metody z klasy bazowej
        let test = super.fly(); //<-- odniesienie do metody
        // z klasy abstrakcyjnej przez słowo super
        console.log("Rubber ducks can't fly!");
    }
}

const howardTheDuck = new RubberDuck();
howardTheDuck.swim();
howardTheDuck.sound();
howardTheDuck.print();
howardTheDuck.fly();


//Nadpisanie metod typów wbudowanych
Array.prototype.smile = function () {
    console.log("Smiling :)");
}

Array.prototype.toString = function () {
    let string = "";
    this.forEach(el => {
        string += `-${el}-`;
    })
    return string;
}



