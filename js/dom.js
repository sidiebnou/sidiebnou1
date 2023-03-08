//DOM document Oject model
//------------------------
//DOM Manipulation
//GetElementById
//GetElementByClassName
//getElementsByTagName
//querySelector
//querySelectorAll

/*
The HTML DOM is a standard object model and programming interface for HTML. 
It defines:
    The HTML elements as objects
    The properties of all HTML elements
    The methods to access all HTML elements
    The events for all HTML elements
*/
//In the DOM, all HTML elements are defined as objects.
//If you want to access any element in an HTML page, you always start with accessing the document object.


//creating a node does not add it to the page you must add the new node as a child of an existing element on the page
//creat a new <h2> node
const newDeunElement = document.createElement('h2');
newDeunElement.innerHTML = "this is a heading";
newDeunElement.style.color ="green";

//to insert text it is preferable to the .textContent
const text = "hello deun";
queryDeun.textContent = text;

//grabbing multiple nodes and turnig them to arrays and looping over them
//for (i = 0, i < queryAll.length; i++;) {
//  queryAll[i].innerHTML = text;
//}

//specitically selecting a specific element by its name

const didi = getElementByClassName('div1');
didi.backgroundColor = "green";

//getElementsBytagName returns an array of elements, so you access specific elements using[] and access index inside brackeets [0]
const sidi = document.getElementById("sidi");
console.log('Sidi = ', sidi);
sidi.innerHTML = "The text from the intro paragraph is: ";
sidi.style.backgroundColor = 'red';
const div = document.createElement('div');
div.innerText = 'More text';
sidi.append(div);

//using query methodes is  more recomended. it means get li then inside the li s find id percentage-gain-or-loss
document.querySelector("li").getAttribute("percentage-gain-or-loss");

//will always seect the first item it finds. 
document.querySelector("stop-loss-calculator").backgroundColor = "red";
document.querySelector("li").style.background = "yellow";
const variable11 = document.querySelector("h1");
variable11.style.backgroundColor = "red";
//query selectorAll select all item with the same name like all li or all h1.
const testing = document.querySelectorAll("li, h1");
testing.innerHTML = "yellow";

//listening to buttons by using event listners
const button1 = document.getElementsByClassName("contact");
button1.addEventListener("click", function(){
  console.log("CLICKED BY DEUN");
})

//
const input= document.getElementById("input");
//mouseenter is the action we listen to
const button2 = document.getElementsById("search");
button2.addEventListener("mouseenter", function(){ 
  //creating a new div and placing it under
  const div = document.createElement("div");
  div.appendChild(document.createTextNode("testing"));
console.log("CLICKED BY DEUN");
})

 