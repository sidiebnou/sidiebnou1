//jason: javascript object notation
/*
JSON is used to receive data.
JSON is used in many languages not just with javascript. 
JSON is a text format that is completely language independent.
meaning JSON is used to send & receive data in many languages ... not just in Javascript.
*/

const person = {
    firstName:"Sidi Mohamed",
    lastName: "Ebnou",
    fullName: function () {
    return this.firstName + " " + this.lastName;
    }
}
//sending
//JSON.stringify() is a built in methode in javascrit. turns everything into strings. storing in const sendJSON.
const sendJSON = JSON.stringify(person);
console.log(sendJSON);
//receiving form the server. and parcing it back to normal form
//once we parse it, we store it in const receiveJSON.
const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON); // back to javascript normal form
