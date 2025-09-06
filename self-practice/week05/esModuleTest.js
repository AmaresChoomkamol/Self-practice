// import { getLength, TAX } from "./utility.js"; // Named export
// import echo from "./utility.js"; // Default export


// console.log(getLength("Hello"));
// console.log(echo("Hello"));
// console.log(TAX);


import strLength, { Book,echo as Repeat , VAT } from "./utility.js"
//change echo -> repeat

const b1 = new Book(1234,"JS Beginner")
console.log(b1);

console.log(Repeat("No one perfect"))
console.log(VAT)
console.log(strLength("Frontend"))

 