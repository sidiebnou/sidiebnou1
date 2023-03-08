//instance properties: what they have. exampe: name, age, hight.
//instance methoddes: what they do. example: talk, jump, run 
//we use a class to creat many objects

class ClassName{
    constructor(){
        return "Whatever you want";
    }
}
//Declaration
class Sidi{
//methodes inside the class
    trading(){
        return "A champion";
    }
    broker(){
        return "Good excussion";
    }

}
//Using this in a class. the constructor method is a special method for creating and initializing an object created with a class. There can only be one special method with the name "constructor" in a class
class Trades{
    //The constructor methode
    //It has to have the exact name "constructor"
    //It is executed automatically when a new object is created
    //It is used to initialize object properties
    Constructor(long, short){
        this.long = long;
        this.short = short; 
    }
     
    
}
//The class is anonymous but assigned to a variable
const Timing = class {
    constructor(seconds, miliseconds){
        this.seconds = seconds;
        this.miliseconds = miliseconds;
    }
}
// the class here is stored in variable an has it's own name.
const TradingPlatform = class DasTraderPro {
    scanner(caps, market){
        this.caps = caps;
        this.market = market;
    }
};

//Methods are defined on the prototype of each class instance and are shared by all instances. Methods can be plain functions, async functions, generator functions, or async generator functions.
class Gains{
    constructor(thirtyPGain, fiftyP1Gain, fiftyP2Gain, entryPr30P, exitPr30P, entryPr50P1, exitPr50P1, entryPr50P2, exitPr50P2){
        this.thirtyPGain = thirtyPGain;
        this.fiftyP1Gain = fiftyP1Gain;
        this.fiftyP2Gain = fiftyP2Gain;
        this.entryPr = entryPr;
        this.entryEx = entryEx;
        this.entryPr30P = entryPr30P;
        this.exitPr30P = exitPr30P;
        this.entryPr50P1 = entryPr50P1;
        this.exitPr50P1 = exitPr50P1;
        this.entryPr50P2 = entryPr50P2;
        this.exitPr50P2 = exitPr50P2;

    }
    //after the constructor you can add other stuff
    // Getter
    get entryPrice30P(){
        return this.entryPr30P;
    }
    get exitPrice30P(){
        return this.exitPr30P;
    }
    get entryPrice50P1(){
        return this.entryPr50P1;
    }
    get exitPrice50P1(){
        return this.exitPr50P1;
    }
    get entryPrice50P2(){
        return this.entryPr50P2;
    }
    get exitPrice50Pr2(){
        return this.exitPr50P2;
    }
    //difference Entry - Exit
    get priceDifThirtyPGorL(){
        return this.exitPr30P - this.entryPr30P;
    }
    get priceDifFifty2PGorL(){
        return this.entryPr50P1 - this.exitPr50P1;
    }
    get priceDifFiftyP1GorL(){
        return this.entryPr50P2 - this.exitPr50P2;
    }
    //methode
    gainOrLossCalculator(){
        return this.priceDifThirtyPGorL + this.priceDifFifty2PGorL + this.priceDifFiftyP1GorL;
    }

}
//When you have a class, you can use the class to create objects
//the new key word creats a new empty object then sets the value of 'this' to be the new empty object and then calls the constructor method
let trade1 = new Trades("KBIO", "TOPS"); // passing values inside the constructor.
console.log("You traded " + trade1);


//chainning multiple methodes 
class User{
    constructor(email, name){
        this.email = email;
        this.name = name; 

    }
    login(){
        console.log(this.email, "just logged in");
    }
    logout(){
        console.log(this.name, "just logged out");
    }
}

//let userOne = new User("ebnousidi@gmail.com", "sidi");
//let userTwo = new User("sidi_ebnou@yahoo.com", "sidi");
//userOne.login().logout();
//userTwo.logout();

//Static properties cannot be directly accessed on instances of the class. Instead, they're accessed on the class itself.
class ClassWithStaticMethod {
    static staticProperty = 'someValue';
    static staticMethod() {
        return 'static method has been called.';
    }
    static {
        console.log('Class static initialization block called');
    }
}

console.log(ClassWithStaticMethod.staticProperty);
// Expected output: "someValue"
console.log(ClassWithStaticMethod.staticMethod());
// Expected output: "static method has been called."

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static displayName = "Point";
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.displayName; // undefined
p1.distance;    // undefined
p2.displayName; // undefined
p2.distance;    // undefined

console.log(Point.displayName);      // "Point"
console.log(Point.distance(p1, p2)); // 7.0710678118654755

