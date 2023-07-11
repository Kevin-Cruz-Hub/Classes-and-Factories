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
const Yotaro = new Hamster()
Yotaro.wheelRun()
Yotaro.eatFood()
console.log(Yotaro.getPrice())
console.log(Yotaro)