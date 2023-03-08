// package.json

/*

    JavaScript can change all the HTML elements in the page
    JavaScript can change all the HTML attributes in the page
    JavaScript can change all the CSS styles in the page
    JavaScript can remove existing HTML elements and attributes
    JavaScript can add new HTML elements and attributes
    JavaScript can react to all existing HTML events in the page
    JavaScript can create new HTML events in the page

*/



const simpleArray = ["Tesla", 500, {}]
// console.log(simpleArray.length)
// for (let i=4; i>=0; i--){
//     if(i === 1){
//         console.log("Second 1 is ", i === 1)
//     }
//     else if(i === 1){
//         console.log("third 1 is ", i === 1)
//     }
//     else if (i === 2){
//         console.log('2 is ', i === 2)
//     }
//     else {
//         console.log('Hit else statement')
//     }
// }
// let index = 0;
// while (index < 5){
//     console.log('!!!!!!!!!!!!!!!!!!!!')
//     console.log('Looping', index)

//     if(index === 1){
//         console.log("Second 1 is ", index === 1)
//     }
//     else if(index === 1){
//         console.log("third 1 is ", index === 1)
//     }
//     else if (index === 2){
//         console.log('2 is ', index === 2)
//     }
//     else {
//         console.log('Hit else statement')
//     }
//     index++
// }

//========== Declaring functions =============
function myFunctionName (userName, anotherArgument) {
    if(!userName || !anotherArgument) return null
    console.log(anotherArgument[0])
    if (userName === 'Sidimed') {
        return 'Ebnou'
    }
    else {
        return "Dan"
    }
}
const newFunction = (asdgf) => {
    if (asdgf === 'Deun') {
        return 'Ebnou'
    }
    else {
        return "John"
    }
}

// ========= Calling a function ===============
const deun = myFunctionName('Deun', [])
const john = myFunctionName('John')

console.log(deun)
console.log(john)
console.log(() => {})
console.log(function() {})
console.log(myFunctionName)
console.log(newFunction)





module.export = {

}









