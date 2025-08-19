let animal = ["cat","dog","bird","fox"]

for (let i = 0; i < animal.length; i++){
    console.log(i,animal[i]); 
}

let i = 0

while (i < animal.length - 1) {
    console.log(i,animal[i]);
    i++
}

// สร้างตัวแปร 1 ตัว เก็บข้อมูลหลายๆ type ใน array

let arr = [true,false,2,3,"True",'False',{am : "SIUUUU"}]
let arr2 = [1,2,3,4,arr]


for (let i = 0; i < arr.length; i++){
    console.log(i,arr[i]);
}

console.log(arr);
console.log(`length: ${arr.length}`);
console.log(`first item: ${arr[0]}`);
console.log(`last item: ${arr[arr.length - 1]}`);
arr.push("OK")
console.log(arr);
arr.splice(2,4)
console.log(arr);

delete arr[2]
console.log(arr);

console.log(arr2);

const nums = [1,5,7]
nums[0] =  true
console.log(nums);
console.log(nums instanceof Array);


//array contains many objects
const colors=[{id:1, name:'red', tone:'hot'},{id:2, name:'purple', tone:'cool'},{id:3, name:'white', tone:'neutral'}]
console.log(colors[1])
 
const contacts=[{email:['abc@gmail.com','foo@kmutt.ac.th']},
{address:['Bangkok', 'Puket']}]
console.log(contacts[0].email[1])
 
//array contains many arrays
const groups=[['Malee', 'Jane'], ['John', 'Jay', 'Pete']]
console.log(groups)

for (i of groups) {
    console.log(i[i.length -1]);
}

// let a = [1,2,3]
// let b = [0,...a,4]

// console.log(b);

let c = [5,10,15]
let d = [...c]
console.log(d);


const greeting = "hello world"
// spread operator
const greetingCh=[...greeting]
console.log(greetingCh);

const cloneGreeting=['checked',...greetingCh,'done']
console.log(cloneGreeting);

let a = new Array(10)

console.log(a);
a[5] = 999
console.log(a);

let b = Array.of(21,1,2,3,4,"True")
console.log(b);

const str="hello"
const arr5= Array.from(str)
console.log(arr5);
console.log(arr5.length);

