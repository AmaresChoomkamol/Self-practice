// function echo(value){
//     return value
// }

// const getLength = (str) => str.length
// const MAXStudent = 60

// default export
// module.exports = { echo, getLength , MAXStudent} // {echo:echo}

// export default function echo(value){ // Default export
//     return value
// }

// export function getLength(str){ //// Named export
//     return str.length
// } 

// const TAX = 0.07
// let x = 1

// export { TAX } // export list


function echo(value) {
  return value
}
function getLength(str) {
  return str.length
}
const TAX = 0.07
let x = 1

 class Book{
    constructor(isbn,title){
        this.title = title
        this.isbn = isbn
    }
 }


//export list
export { Book, echo, getLength as default, TAX as VAT }
 // change TAX -> VAT


