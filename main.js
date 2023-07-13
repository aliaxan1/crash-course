console.log("hello Boss");
//

let constant=25;
const variable=35;
constant=35;
//variable=25;   //will return assignment to constant variable
console.log(constant,variable);

//                                     data types

//      primitive
//string
let str = "gbjdskfvb 16416   @Q%@^*$%#@$%";
//number
let num = 256;
//boolean
let bool = true;
//undefined
let undef = undefined;
//null
let nul = null;
//symbol
const sym = Symbol();
//bigint
let bigin = BigInt(1133235414554654644564374847484599999999999);
//      non-primitive
//objects
const obj ={
    key: "value",
    mthd: function() {
        // it is a method
    }
} 

//Array
const arr = ["a","b","c","d","e"];

//                                     Operations
//  arithmatic
console.log(constant-variable);// return 0
//  logical
console.log(!constant-variable==0);//return false
//  assignment
let ass;
ass = num;
console.log(ass);//return value of num i.e 256
//  comparison
console.log(num>constant);//true
//  string
console.log("cgasdkjfhkahnc"+"     "+"asdasdasasvsdvsd");



////                       EQUALITY


console.log('2'==2);//true
console.log('2'===2);//false




//                                Conditional Statements
//if
if(/*condition is*/true){
    //this block will fire
};


//if else
if (/*condition is */true) {
        //this block will fire

} else {
        //this block will fire
}

//if else of
if(false){

} else if(true){
    //this wile executed
}else{

}

//switch
let condition;
switch (condition) {
    case true:
        //this will work
        break;
    case false:
        //this will work
        break;

    default:
        //this will work
        break;
}

//                                    Loops
//for loop
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    
}
//while loop

while (condition) {
    
}
//do while loop
do {

}while (condition) {
    
}
// Function 
function greet(){
    console.log("greeting");
}
greet();
