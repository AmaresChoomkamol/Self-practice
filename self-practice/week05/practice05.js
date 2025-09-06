const studentScores = [
    { name: 'Alice', score: 85},
    { name: 'Bob', score: 92},
    { name: 'Charlie', score: 68},
    { name: 'David', score: 55},
    { name: 'Eve', score: 78}
];

const passingNames = studentScores.filter((student) => student.score >= 70).map((student) => student.name.toUpperCase());

console.log(passingNames);


// const Newarr = []

// function PassStd(obj){
//     for(const i of obj){
//         if(i.score >= 70){
//             Newarr.push(i.name.toUpperCase())
//         }
//     }
// } // วิธีที่ใช้ for of
// PassStd(studentScores)
// console.log(Newarr);

console.log(Array.isArray([]))
console.log(Array.isArray([1,true]))
console.log(Array.isArray([1,true]))
console.log(Array.isArray("[]"))

const array1 = ["a","b","c"]
const array2 = ["d","e","f"]
const array3 = array1.concat(array2)
console.log(array3);
console.log(array3.toString())

// เปลี่ยน sort เป็น numeric

const array14 = [1,30,4,21,10000]

array14.sort((a,b) => a - b)
console.log(array14);

const stds = [
  { id: 1, name: "Tisanai", email: "tisanai@sit.kmutt.ac.th" },
  { id: 5, name: "Pornchai", email: "pornchai@sit.kmutt.ac.th" },
  { id: 2, name: "Suda", email: "suda@sit.kmutt.ac.th" },
]
 
// stds.sort((a,b) => a.id - b.id)
// stds.sort((a,b) => a.name.localeCompare(b.name))


function sorting(arr){
    let arr2 = []
    arr.sort((a,b) => a.name.localeCompare(b.name))
    for(const i of arr){
        arr2.push(i.name)
    }
    return arr2
}

console.log(sorting(stds));

let arrayy = [10,20,30,40,50]


console.log(arrayy.join(' '));
console.log(arrayy.indexOf(30,4));
