const objectName = {}
//accessing an object property
objectName['objectProperty'] = {
    'city': 'Salt Lake City',
    'age': 31,
    'natianality': {
    'City': 'Nouakchott',
    'coutry': 'Mauritania',
    }
}
//Second way of accessing object properties with dot notation
objectName.City


const contact = ['ebnousidi@gmail.com', '725-724-5581', 'sidiebnou.com']

for(let i=0; i<contact.length; i++){
    const savedContact = contact[i]
    //console.log('Sidi ebnou email = ', savedContact)
    console.log('i = ', i)
    //contact[savedContact] = 'sidi_ebnou@yahoo.com'
    console.log("=====================")
}


//the bind() methode allow an object to borrow a methode from another object.
const person = {
    firstName:"Sidi Mohamed",
    lastName: "Ebnou",
    fullName: function () {
    return this.firstName + " " + this.lastName;
    }
}
//accessiong a specific key pair in the object person
console.log(person.lastName) 

const member = {
    //firstName property
    firstName:"Sidi Mohamed",
    lastName: "Ebnou",
    //function inside an object is a methode
    nameFunction: function(){
        return "Hello Sidi";
    },
    iQ: {
        mathTest: 80,
        puzzelTest: 100,
    },
    //this refers to the values inside the object so we can pull out the information we need
    iQcalculator: function(){
        return `${this.firstName} Your test is great`;

    }
}
console.log(member.iQcalculator())
console.log(member.nameFunction());   
let fullName = person.fullName.bind(member);

//we need a lot of members, so we use object constructors
//Object.creat is the object constructor. it will bring in what is inside the () and link it with the new object: memberList.
let memberList = Object.create(person);
//now memberList enherited firstName and we can give it a new value or use the original name.
memberList.firstName = "Dan";
console.log(memberList);
//accessing enherited lastName from the new object memberList
console.log(memberList.lastName);
//accessing enherited fullName() function. note the firstName will the new updated name in memberList.
//you can also modify the functions, arrays, and anything inside the inherited object.
console.log(memberList.fullName());

//the for in loop will loop in the object and bring as an array using [] inside log will do that we can not the dot not notation.
for(let addComputerIQ in member){
    console.log(member[addComputerIQ]);
}
// similar
for (let addNotSmart in member){
    console.log(`On ${addNotSmart} give them more education ${member[addNotSmart]}`)
}
// to delete a key value you can use delete
delete member.iQ;
console.log(member.hasOwnProperty("mathTest")) //checking to see if it has the deleted property hasowproperty return true or false

//destructuring objects
//it changes lastName to lstN and firstName to fstn their resutl is still the same lstN: Ebnou
//totaly, we created 2 new variable pairs. lstN: Ebnou and fstN: Sidi Mohamed
const { lastName: lstN, firstName: fstN} = member;
console.log(lstN);

//Passing the object inside a function
function employeePicks({lastName}){
    return`${lastName} is our favorite`;
}
console.log(employeePicks(member)); //it will destructure the function and only bring lastName


