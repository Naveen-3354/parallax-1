


class Car{
    constructor(name){
        this.name = "bmw"
    }

    static forward(){
        console.log("move 10m");
    }
}

const car = new Car()
console.log(car.name);

Car.forward(s)