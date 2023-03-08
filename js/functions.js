//Writing a simple fuction and calling it
//scorelevel and language are parameters
function teckScore (scoreLevel, language) {
    if (scoreLevel<10){
        console.log("keep improving " + language)
    } else{
        console.log("scrore level is out of reach")
    };

}
teckScore(5, "java");

//call it again and passing diffrent arguments
teckScore(11, "c++");

//you can also pass variables' arguments
let scoreLevel = 7;
let language = "Deun";
teckScore(scoreLevel, language);

//functions return a result
function improvement(overAll){
    let message;
    if (overAll > 80){
        message = "You are crushing it!";
    } else if(overAll < 80 && overAll > 60) {
        message = "Way to go! NOT SHABBY AT ALL";
    } else {
        message = "You need to improve";
    }
    return message;
}
//we can store the return message in variable 
const storeTheReturn = improvement(70);

//You can have many returns

function enginnerLevel(expirience){
    let projects = 9;
    let level = projects + expirience;

    if (level === 8){
        return "Excellent"
    } else if(level === 5){
        return "Get to work now"
    } else {
        return "Let get it going!"
    }
}
enginnerLevel(3);

// if you forget to declare a variable "without let or const" it becomes a global variable even if it inside a function.
// Math.random is an example of a function attached to an object 
//Arrow preferably a const
//you can store a function in a variable ex
const myFunction = (a, b) => a * b;
let topS = (parametre1, parametre2) => {
    const result = parametre1 + parametre2 
    return null;
}

//function methode
function getNames(theNames){
    let sliced = " sliced";
    return theNames.slice(0, theNames.indexOf("E")) + sliced.toLowerCase();
}
console.log(getNames("SidiMohamedEbnou"));



