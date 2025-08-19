let obj = {
    animal1: "cat",
    animal2: "dog",
    animal3: "bird",
    func1(){return this.animal1}
}

// console.log(obj.func1())
// console.log(obj);

delete obj.func1;
obj.Time = new Date(2020,1,1)

// console.log(obj);

let composite = {
    obj1: {name: "John", age: 25},
    arr1: [2,4,6,8,10],
    Full: [{id: 12345, TotalBook: 500},'Hello'],
    Call(){return this.Full}
}

// console.log(composite.Call())
console.log(composite.Full[0].id);



//1.object literal
// const book={isbn:12345678, title:'Introduction to JS',authors:[{firstname:'John'}, 
//     {lastname:'Smith'},{firstname:'Danial'}, {lastname:'Doh'}], 
// versions:[1.0, 2.0,3.0], isAvailable:true, getISBN(){return this.isbn}}

// console.log(book)
// console.log(book.getISBN())
// console.log(book.authors);

// book.publishDate = new Date(1963,11,5)

// for (const key in book){
//     console.log(book[key])
// }


// console.log("-------------------------------------------")

// console.log(book["publishDate"])


let obj1 = {
    name: "John",
    name: "Somchai",
    name: "Smith",
    name: "Jack"
}


//2. constructor function
// function Book(isbn,title){
//     this.isbn = isbn
//     this.title = title
// }

// const b1 = new Book(123,'JS')
// const b2 = new Book(888, 'CSS')
// console.log(b1);
// console.log(b2);

//3.class

class Book{
    constructor(isbn,title){
        this.isbn = isbn
        this.title = title
    }
    getISBN(){
        return this.isbn
    }
    setISBN(isbn){
        this.isbn = isbn
    }
    setTitle(title){
        this.title = title
    }
    getBookInfo(){
        return `isbn: ${this.isbn}, title: ${this.title}`
    }
}

// const myBook = new Book(12345,"JS Beginner")
// myBook.setTitle("Python For Beginner")
// console.log(myBook.getBookInfo())
// console.log(myBook.getISBN())

//4. using Object.create(existingObj)
// const journal = Object.create(myBook)
// journal.ISSN = 5678
// console.log(journal)
// console.log(journal.isbn)
// console.log(journal.title)

const b1 = {id:1, title:"JS"}
// const b2 = {id:1, title:"JS"}
b2 = b1

// console.log(b1 === b2)
// console.log(b1 == b2)
// console.log(Object.is(b1,b2))

// function doSomething(x){
//     x={id:1, title: "JS"}
//     x.id = 555
// }

// console.log(b1)
// doSomething(b1)
// console.log(b1)


// let book1 = {isbn: 12345,title:"JS"}
// let book2 = {isbn: 12345,title:"JS"}

// function compare(obj1,obj2){
//     return obj1.isbn === obj2.isbn
// }

// console.log(compare(book1,book2))

// const b1={isbn:123, title:"JS"}
// const b2={isbn:123, title:"JS"}

// function compareBook(x, y){
//     //boolean condition?true expression:false expression
//     // return x.isbn===y.isbn?true:false
//     if(x.isbn===y.isbn)
//         return true
//     else
//         return false

// }
// console.log(compareBook(b1, b2))


let book1 = {
    isbn: 123456789,
    title: "Javascript"
}

let book2 = {
    isbn: 123456789,
    title: "Javascript"
}

const keys=Object.keys(b1)
const values=Object.values(b1)


console.log(keys);
console.log(values);


function compareOBJ(obj1,obj2){
    let key1 = Object.keys(obj1)
    let key2 = Object.keys(obj2)
    let value1 = Object.values(obj1)
    let value2 = Object.values(obj2)

    if(key1 === key2 && value1 === value2){
        return `Key1: ${key1} , Key2: ${key2} ARE THE SAME ,,, Value1: ${value1} , Value2: ${value2} ARE THE SAME`
    }
    else{
        return "KEY AND VALUE ARE NOT THE SAME"
    }
}

//destructuring on array
const colors = ['red', 'green', 'blue']
const [,item2]= colors // const items = colors[1]
console.log(item2);

//destructuring on object
const b3={isbn: 1234,title: 'JS',authors:{firstname:'Jon',lastname:'Smith'}}
// const {isbn,title}=b3
const {isbn: BookISBN,title} = b3

console.log(BookISBN) //1234
console.log(title) //JS

const {authors:{firstname}} = b3
console.log(firstname);
 

//Shallow Equality

let book10 = {
    isbn: 123456789,
    title: "JavaScript"
}
let book20 = {
    isbn: 123456789,
    title: "JavaScript"
}

function shallowEquality(obj1,obj2){
    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)

    if(keys1.length !== keys2.length){
        return false
    }
    for(let key of keys1){
        if(obj1[key] != obj2[key]){
            return false
        }
    }
    return true
}

console.log("shallow equality: " + shallowEquality(book1, book2));
