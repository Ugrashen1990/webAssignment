
let emp1 = {
    id: 4556, 
    name: 'ugrashen', 
    salary: 65756376,
    age: 25,
    dowork:function(){
        console.log(this.name, 'is studying js');
    }
};  //object literal

//depricated
delete emp1.age;            

console.log(emp1);
emp1.dowork();


let emp = new Object();

emp.id = 54;
emp.name = 'ugrashen';

emp.dowork = function(){
console.log(this.name, 'is working');
}

console.log(emp);
console.log(typeof emp);
emp.dowork();

let emp1 ={
id : 123;
name : 'vivaan'
}
let emp2 {};
emp2.id = emp.id;
emp2.name = emp1.name;

emp2.name = 'jj';
console.log(emp1.name);

var msg1 = { to: 9611100033,
msg:"how are yor ?",
delivered: true,
read: false,from:7488527213
};
for(prop in msg1)
console.log(prop);

// object by object() constractor

var myCar = new Object();
myCar.name="Tiago";
myCar.model=2019;
myCar.colour="orange";
myCar.speed=0;
myCar.move = functoin();
this.speed++;



console.log(myCar.name, myCar.model);
console.log(myCar.model);
console.log(myCar.colour);
console.log(myCar.speed);
myCar.move();


// mutable property of an object

var emp1 = {name:"jack sparrow", age:45};
var emp2 = emp1;
emp2.name = "caption Borbossa";
console.log(emp1.name);

var i =10;
var j = i;
j = 1000;
console.log(i);


var studentX = "ugrashen";
var studentY = studentX;
studentY = " ayush";
console.log(studentX);


// accessing all properties & values using for in loop

var msg1 = {to:7488527213,
msg: "How are you?",
delevered: true,
read: false,
from:7903974938 };
for(prop in msg1)
console.log(prop);


for(property in msg1)
console.log(property + ":" + msg1[property]);
console.log(msg1);
console.log("=======================");

console.log(msg1["delevered"]);

var keyX = "delevered";
console.log(msg1[keyX]);


// Adding and deleting new property to an ecisting object.

var msg1 = {to:7488527213,
msg: "How are you?",
delevered: true,
read: false,
from:7903974938 };
for(prop in msg1)
console.log(prop);


for(property in msg1)
console.log(property + ":" + msg1[property]);
console.log("=======================");
msg1.timeStamp = 10;                             // adding a property

for(property in msg1)
console.log(property + ":" + msg1[property]);
console.log("========================");

delete msg1.from;                                // deleting a property
for(property in msg1)
console.log(property + ":" + msg1[property]);


var ford = {name:"Aspire",
colour:"blue",
start:function(){
    console.log("car started");
},
move:function(){
    console.log("car is moving");
}};
for(property in ford)
console.log(property + ":" + ford[property]);

// Adding a function in an exiting function
var ford = {name:"Aspire",
colour:"blue",
};

ford.printDetails = function() {
console.log(this.name + "\n" + this.colour);
}
ford.printDetails();


// Getters and Setters
// getter
var person = {
    firstName:"rahul",
    lastName: "kumar",
    language: "java",

    get lang(){
        return this.language;
    }
};
console.log(person.lang);

// setter

var person = {
firstName:"rahul",
lastName: "kumar",
language: "",

set lang(langu){
this.language= langu;
}
};
console.log(person.lang = "javaScript");



var emp={
id: 1234,
name: " jack",
salary: 65000,
city: "patna",
get empcity(){
return this.city;
},
get empsalary(){
return this.salary;
}
};
console.log(emp.city);
console.log(emp.salary);


var emp = {
id: 3456,
name: "kavya",
city: "kolkatta",
salary: 70000,

set empname(empname){
    this.name = empname;
}
};
emp.empname = "kiran";
console.log(emp.name);