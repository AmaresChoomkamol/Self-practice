//การสร้าง function

// 1.function declaration (camel case)

function devToolAdmin(dev){
 return this.dev = dev
}

function multiply1(a,b){ // a,b เป็น local variable เมื่อคำนวนเสร็จก็จะส่งคำตอบมาและ a,b ที่คำนวนค่านั้นๆก็จะถูก terminate 
    return a * b
}
console.log(multiply1(2,3)) //6

// 2.function expression (using arrow function syntax)
const mutiply = (a,b) => {
    return a * b
}
console.log(mutiply(2,2)) //4

const multiply2 = (a,b) => a * b // (a,b) => {return a*b} ถ้าใส่ปีกกาอย่าลืม return ไม่งั้นไม่มีค่าออกมา
console.log(multiply2(4,2)); //8

//3. function expression (using function declaration)
const multiply3 = function(a,b){return a*b}
console.log(multiply3(5,2))

// console.log(typeof multiply1);
// console.log(typeof multiply2);
// console.log(typeof multiply3);


const x = multiply1
const y = multiply2
const z = multiply3


// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);
console.log(x(2,3)); //6
console.log(y(3,3)); //9
console.log(z(4,3)); //12

let a=1
let b=a
console.log(typeof a);
console.log(typeof b);

console.log(x === multiply1);

if(x===multiply1)
    console.log("x equals to multiply1")
else
    console.log('x not equals to multiply1')


function doSomething(x){ //x = multiply1
    // return x(3,5) //multiply1(3,5)
    return x
}

console.log(doSomething(multiply1(2,3))); //pass function to another function

const w = doSomething(multiply1) //[Function: multiply1]
console.log(w(2,4)); //8

//Higher-Order Function รับ parameter ที่เป็น function หรือ return function ได้

function add(n1, n2) {
return n1 + n2
}
let sum = add 

function sayGoodBye(){
    return 'Good Bye'
}

function doSomething1(){
    return sayGoodBye
}

// let doIt=doSomething1()
// console.log(doIt());

console.log(doSomething1()); //Good bye
//doSomething1() [first ()] => sayGoodBye()[ second() ]


square = (side) => side * side
console.log(square(3));



function myFunc(theObject) {
 theObject.model = "A9999"
}
const product = {model: "A1001", price: 199}
console.log(product.model) // "A1001"
myFunc(product);
console.log(product.model) // "A9999"


function square1(side){
    side = 9
}
let theSide = 2;
square1(theSide)
console.log(theSide); //2

function sum1(x,y,...z){
    // return x + y
    // return arguments[0] + arguments[1]
    for(argu of arguments){
        console.log(argu);
    }
    console.log(`length: ${arguments.length}`);
    console.log(`x: ${x}`)
    console.log(`y: ${y}`)
    console.log(`z: ${z}`)
}
sum1(1,2,3,4,5,6,7,8)

// หา sum โดยที่ parameter ไม่ใส่ก็ได้ ใส่ก็ได้ ใส่เป็นร้อยตัวก็ได้ รองรับ parameter ทุกรูปแบบ


function Summation(...x){
    let sum = 0
    for(num of x){
        sum += num
    }
    return sum
}

console.log(Summation(10,10,10,10,10,));
console.log(Summation("chain",['chainno1']))

function who(name = 'unknown') {
return name;
}

console.log(who()); //unknown
console.log(who('Amares'))//Amares

function greeting(greet = "Hello", whom = "Guest", quote = "How are you?"){
    return `${greet} ${whom} ${quote}`
}

console.log(greeting('hi')); //hi Guest How are you
console.log(greeting('Good morninig','Guy','Great!')); //Good morning Guy Great!
console.log(greeting(undefined,null,"Fine"));//Hello null Fine
console.log(greeting());//Hello Guest How are you

function sum2(num1, num2, num3) {
    console.log(num1);
    console.log(num2);
    console.log(num3);
    return num1 + num2 + num3
}
let nums = [5, 20, 15]
//spread parameter
console.log(sum2(...nums)) //40


const nums2 = [1,3,5,7]
let q = nums2[0]
let student = {id: 1 , name: 'somchai'}
let [e] = nums2
let {id} = student

console.log([e]);


const students = {
studentId: 64001,
displayName: 'jsGuy',
fullName: {
firstName: 'Somchai',
lastName: 'DeeJai'
}
}


function studentId({ studentId }) {
    return studentId
}
console.log(studentId(students)) //64001



function getFreqOfWords(sentence) {
    if (typeof sentence !== "string") {
        return undefined;
    }

    const words = sentence.toLowerCase().split(" ");
    const freq = {};

    for (let word of words) {
        freq[word] = (freq[word] || 0) + 1;
    }

    return freq;
}

console.log(getFreqOfWords("Do you best just do it"));