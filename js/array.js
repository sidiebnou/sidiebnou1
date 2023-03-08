// Array of objects for Names
const arrayOfNames = [
    {
    "First Name": 'Sidi Mohamed',
    "Last Name": 'Ebnou'
    },

]
//The typeof operator returns object because a JavaScript array is an object. 
//Array of Objects for schools
let type = typeof arrayOfNames
console.log(type)
const arrayOfSchools = [ 
   
    {
        "Schoole name": 'Xavier University',
        "State": 'Utah'
    },
    {
        "Schoole name": 'University Of New Orleans',
        "State": 'Louisiana'
    },
    {
        "Schoole name": 'Xavier University',
        "State": 'Louisiana'
    },
    
];
//String Array of Skills
const skillsArray = ["Java", "Javascript", "HTML", "C++", "SQL", "CSS", "React", "Bootstrap"]
//accessing skillsArrays at position zero and saving the resolts in fistElement 
const firstElement = skillsArray[0]


// const callbackFunction = (arg1, index, array) => {
//     console.log('arg1 = ', arg1)
//     console.log('index = ', index)
//     // console.log('full array = ', array)
//     console.log('---------------------------')

// }
//---while loop initialization and incrementation happen outside in separete statements. in most cases you need iterations-- But for loop they are written together.
//calling back an array example using [i] inside console.log 
let answer = "forty"
//the do while will excecute at least once without checking condition because of do
do {
   console.log("while loop does not need initalizatiion nor incrementation") 
} 
//the while loop is good by itself.
while (answer != "forty")
let i = 0;
console.log(i)
console.log(skillsArray.length)
while (i < skillsArray.length){
    console.log(skillsArray[i]);
    i++;
}  
//DO while loop is will excute code without checking any conditions. it is rarely used. so while will run at least once 
let j = 0;
do {
    console.log(arrayOfNames[j]);
    j++;
} while(i<arrayOfNames.length);

//for in loop return the key aka index. it is used to see the index.
const jobs = ["Software Engineer", "Restaurant Manager"];
let k = 0;
console.log(k)
for (let k in jobs){
    console.log(jobs[k]);
}

// For for loop is new
const schools = ["WGU", "UNO", "Delgado", "Xavier"]
for (let i of schools) {
    console.log(i); // Notice no need to add array name inside console.log. you only need the variable
}

// callbackFunction(arrayOfObjects[0], 0, arrayOfObjects)
// Map
const skills = skillsArray.map((arg1, index, array) => {
    console.log('arg1 = ', arg1)
    console.log('index = ', index)
    // console.log('full array = ', array)
    arg1['']
    console.log('---------------------------')

})
for(let i=0; i<skillsArray.length; i++){
}

//pop in is like normal looping. the in can be changed. in returns index.
for (let pop in skillsArray) {
    console.log(pop + " : " + skillsArray[pop])
}

//with math it is better to use const.
function bookAppointment(dateList, time){
    const randomDayPick = Math.floor(Math.random() * dateList.length);
    console.log("Pick your appointment: " + dateList[randomDayPick] + " " + time)
}
var dateList = ["Tommorow", "After tommorow", "4 days from now", "Next week"];
var time = "5-6pm";
bookAppointment(dateList, time);
var newDateList = ["Monday", "Thursday"];
var newTime = ["4-5pm"];
bookAppointment(newDateList, newTime);

//------------Aray Methodes------------
//note: Math and filter methodes return new array by filtering through excisting array
// ----forEach() Methode.------ usualy used with function 
// Use the dot notation to access the array followed by forEach methode.
arrayOfNames.forEach((value) => {console.log(value)}) // it will store the value inside value and the fuction is inside the bracket

//---------iterators-------------
// iterators. they don't loop thought each value. They are a structured way of pulling data at a one at a time fashion. it will set up an itterator and we send the itterator a next methode and that desplays the next value to us  
//we want to access a function that will creat fthe iterator. Arrays come with methode tied to their object that if we that methdoe it will creat an iterator.
// the way we access that itterator is by using a symbol to give us access 
// syntax: declare a variable set it to the array. and inde square braket [] call (or invoke it) the function that allow us to use the iterator.
let iterator = arrayOfSchools[Symbol.iterator]();

// We need to use it. if we want another value we can itterate again using the dot net notation to access another value.
console.log(iterator.next()); // done: false that is console loged at the end means that we are not done we still have other values in the array.
console.log(iterator.next());
console.log(iterator.next());

//Adding elements with high indexes can creat undefined holes in an array example bellow:
const fruits = ["Banana", "Orange", "Apple"];
fruits[6] = "Lemon";  // Creates undefined "holes" in fruits 
console.log(fruits);
console.log(fruits[0]); //Banana
//The pop() method removes the last element from an array
const dataNano = ["nao", "micro", "trillion"];
dataNano.pop(); 
//The pop() method returns the value 
let popChecker = dataNano.pop();
console.log(popChecker)

//new Array() is abuilt in array constructor just using []. it is the same, BOTH COME EMPTY or add things inside them 
const level = new Array(11, 23, 45)
const level2 = []



