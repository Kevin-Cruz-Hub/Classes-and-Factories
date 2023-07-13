class Hamster {
    constructor(name,owner, price){
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
    eat(){
        return this.weight+=10;
    }
    exercise(){
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
        this.bankAccount-=hamster.price
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
// ===================================================================

const Timmy = new Person('Timmy',5)
// 3.
for(let i = 1; i <= 5; i++){
    Timmy.eat()
}
// 4.
for(let i = 1; i <= 5; i++){
    Timmy.exercise()
}
// 5.
for(let i = 1; i <= 9; i++){
    Timmy.ageUp()
}
// 6.
const Gus = new Hamster('Gus')
// 7.
Gus.owner = 'Timmy'
// 8.
Timmy.buyHamster(Gus)
// 9.
for(let i = 1; i <= 15; i++){
    Timmy.ageUp()
}
// 10.
for(let i = 0; i < 2; i++){
    Timmy.eat()
}
// 11.
for(let i = 0; i < 2; i++){
    Timmy.exercise()
}
console.log(Gus)
console.log(Timmy)
// ===================================================================

class Dinner{
    constructor(appetizer, entree, dessert){
        this.appetizer = appetizer || '',
        this.entree = entree || ' ',
        this.dessert = dessert || ''
    }
}
class Chef{
    constructor(name){
        this.name = name
    }
    prepareDinner(appetizer, entree, dessert){
        const dinner = new Dinner(appetizer,entree,dessert)
        console.log(dinner)
    }
}
let chef1 = new Chef('Kevin')
chef1.prepareDinner('Dumplings','Ramen','Soup')
chef1.prepareDinner('Fries','Pizza','ice cream')