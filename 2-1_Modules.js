// In node every file is a module
// Modules - Encapsulated code (ONLY SHARE THAT WHICH IS NECCESSARY) 

const names = require("./2-2_Names_Modules.js"); 
const greet = require("./2-3_Utils_Modules.js"); 
const persons = require("./2-4_Alter_Flavour_Modules.js"); 
const calc = require("./2-5_Calcs_Modules.js"); 

// without sayHi function only using names module
// console.log(names.P1);
// console.log(names.P2);
// console.log(names.P3);
// console.log(names.P4);

// using sayhi module and calling the sayhi function

// greet.sayHi(names.P1);
// greet.sayHi(names.P2);
// greet.sayHi(names.P3);
// greet.sayHi(names.P4);



// alt flavours
// console,console.log(persons);

calc.sum(12,23)
calc.product(12,23)