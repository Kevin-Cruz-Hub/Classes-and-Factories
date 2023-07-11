class Hamster {
    constructor(owner, name, price){
        this.owner = owner || ' ',
        this.name = name,
        this.price = price || 15
    }
    wheelRun(){
        console.log('squeak squeak');
    }
    eatFood(){
        console.log('nibble nibble')
    }
    getPrice(){
        return this.price
    }
}
// const Yotaro = new Hamster()
// Yotaro.wheelRun()
// Yotaro.eatFood()
// console.log(Yotaro.getPrice())
// console.log(Yotaro)
// ===================================================================

class Person {
    constructor(name, age, height, weight, mood, bankAccount){
        this.name = name,
        this.age = age || 0,
        this.height = height || 0,
        this.weight = weight || 0,
        this.mood = mood || 0,
        this.hamsters = [],
        this.bankAccount = bankAccount || 0
    }
    getName(){
        return this.name
    }
    getAge(){
        return this.age
    }
    getWeight(){
        return this.weight
    }
    greet(person){
        console.log(`Welcome, ${person}`)
    }
    static eat(){
        return this.weight+=10;
    }
    #exercise(){
        return this.weight-=5;
    }
    ageUp(){
        this.age+=1;
        this.height+=1
        this.weight+=5
        this.mood-=1
        this.bankAccount+=10
    }
    buyHamster(hamster){
        this.hamsters.push(hamster)
        this.bankAccount-=10
        this.mood+=10

    }
}
const gerald = new Person('Gerald',24, 5, 200)
// gerald.ageUp()
// gerald.exercise()
// gerald.eat()
// gerald.eat()
// gerald.exercise()
// gerald.buyHamster('Yotaro')
// gerald.buyHamster('Sunny')
// console.log(gerald)

