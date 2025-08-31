// Anonymous function

// const words = ['spray','limit','elit','exuberant','destruction','present'];
// const result = words.filter(word => word.length > 6);
// console.log(result);

// const words = ["apple","mango","orange"]
// const result = words.filter(/*  ตั้งชื่ออะไรก็ได้  */ wordLength) // callback function ที่ตรวจสอบเงื่อนไข true false

// function wordLength(word){
//     return word.length >= 6
// }

// console.log(result);


// Stack เข้ามาทีหลังออกก่อน push() pop()
// Queue เข้าก่อนออกก่อน unshift() shift()

// filter function does not change an original array
let words = ['mango','apple','mangosteen','orange']

//1. annonymous arrow function
// const shortWords = words.filter((word) => word.length <= 6) 

//2. annonymous function declaration
// const shortWords = words.filter(function (word) {
//     word.length <= 6
// })

//3. reuse callback function (named function)
function wordLength(word){
    return word.length <= 6
}

const shortWords = words.filter(wordLength)
// const shortWords = words.filter(wordLength("apple")) //wordLength(true)

console.log(words);
console.log(shortWords);

// sort function changes original array
const sortedWord = words.sort()
console.log(words);
console.log(sortedWord);

let letters = [...'hello world']
let uppercase = ''
letters.forEach((letter) => {
    uppercase += letter.toUpperCase()
})
console.log(`uppercase: ${uppercase}`)

const products = [
    {id: 123, name: 'bag'},
    {id: 2, name: 'pen'},
    {id: 33, name: 'BAG'}
]

products.forEach((product) => console.log(product))

const array2 = [1,4,9,16]
const map1 = array2.map(x => x * 2)
console.log(map1)

// const words = ['mango','apple','mangosteen','orange']
// let uppercase = words.map((word) => word.toUpperCase())
// console.log(uppercase);
 
let students = [
  { id: 1, name: "Somchai Jaidee" },
  { id: 2, name: "Suda Deejai" },
  { id: 3, name: "John Smith" },
]

// students.filter((student) => student.id % 2 === 0 ).map((student) => console.log(student.id))

// const std = students.map((student) => student.id).filter(id => id % 2 === 0 )
// console.log(std);

// const mapid2 = students.map((students) => students.id).filter(id => id % 2=== 0)
// console.log(mapid2)


// return all words that include mango in array
words = ['Mango','mangosteen','orange','mangoes']

let mango = words.filter((word) => word.toLowerCase().includes("mango"))
// console.log(mango);

//return all words that include 'mango' (ignore case)
//result ['Mango', 'mangosteen', 'mangoes']

//includes()->array
// console.log(words.includes("Apple")) //true
// console.log(words.includes("apple")) //false
// console.log(words.includes("app")) //false

// //includes() ->string
// const sentence = "The quick brown fox jumps over the lazy dog."
// const word = "Ox"
// console.log(sentence.includes(word))
 
// const hasApple = words.some(word => word.toLowerCase().includes("apple"));
// console.log(hasApple ? "has apple" : "does not have apple");

let product = [1,'RED',102]
let productDetail = product.reduce ((detail, prop) => {
    return prop === 'RED' ? detail?.concat('R') : detail?.concat(prop)
}, '')
// console.log(productDetail);



let cart = [
    {productId: 1001, price: 500, quantity: 2},
    {productId: 1001, price: 10, quantity: 3},
    {productId: 1001, price: 5, quantity: 10}
]

// find cart total and return object that show the total {total: 1080}

let totalcart = cart.reduce((pricetotal, item) => {
    pricetotal.total += item.price * item.quantity;
    return pricetotal;
}, {total: 0})
 
console.log(totalcart);

students = [
  { id: 1, name: "Somchai Jaidee" },
  { id: 2, name: "Suda Deejai" },
  { id: 3, name: "John Smith" },
]

// students.filter((student) => student.id % 2 === 0 ).map((student) => console.log(student.id))

// const std = students.map((student) => student.id).filter(id => id % 2 === 0 )
// console.log(std);

// const mapid2 = students.map((students) => students.id).filter(id => id % 2=== 0)
// console.log(mapid2)


// return all words that include mango in array
words = ['Mango','mangosteen','orange','mangoes']

mango = words.filter((word) => word.toLowerCase().includes("mango"))
// console.log(mango);

//return all words that include 'mango' (ignore case)
//result ['Mango', 'mangosteen', 'mangoes']

//includes()->array
// console.log(words.includes("Apple")) //true
// console.log(words.includes("apple")) //false
// console.log(words.includes("app")) //false

// //includes() ->string
// const sentence = "The quick brown fox jumps over the lazy dog."
// const word = "Ox"
// console.log(sentence.includes(word))
 
// const hasApple = words.some(word => word.toLowerCase().includes("apple"));
// console.log(hasApple ? "has apple" : "does not have apple");

product = [1,'RED',102]
productDetail = product.reduce ((detail, prop) => {
    return prop === 'RED' ? detail?.concat('R') : detail?.concat(prop)
}, '')
// console.log(productDetail);



cart = [
    {productId: 1001, price: 500, quantity: 2},
    {productId: 1001, price: 10, quantity: 3},
    {productId: 1001, price: 5, quantity: 10}
]

// find cart total and return object that show the total {total: 1080}

totalcart = cart.reduce((pricetotal, item) => {
    pricetotal.total += item.price * item.quantity;
    return pricetotal;
}, {total: 0})
 
// console.log(totalcart);


 
// words1.splice(2,1,'banana')
// console.log(words1);
// words1.splice(3,2)
// console.log(words1);
// words1.splice(2,0,'melon','cherry')
// console.log(words1);

const words1 = ["Mango", "Apple", "mangosteen", "orange", "mangoes"]

let ans1 = words1.slice(2)
let ans2 = words1.slice(0,3)
let ans3 = words1.fill(null)

console.log(ans1);
console.log(ans2);
console.log(ans3);

 