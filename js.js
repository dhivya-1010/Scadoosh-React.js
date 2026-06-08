// let a = 10;
// console.log(a);

// const a = 10;
// const b = 20;

// const add = (a,b)=>{
//     console.log(a+b);
// };

// add(a,b);

//TEMPLATE LITERALS
//let a = "Dhivya";
//console.log("welcome " + a);
//console.log(`welcome ${a}`);


// //ARRAY DESTRUCTURING
// const arr = ["a","abs","min"]
// console.log(arr[0]);
// const [a,b,c] = arr;
// console.log(a);
// console.log(b);

//OBJECT DESTRUCTURING
// const stud = {
//     name: "dhivya",
//     age:21
// }

// const{name,age} = stud;
// console.log(name)
// console.log(age)

// //node - runtime environment of javascript

//SPREAD OPERATOR
//1.ARRAYS
// const a = [1,2,3]
// const b = [...a]
// console.log(b)

// const a = [1,2,3]
// const b = [4,5,6]
// const c = [...a,...b]
// console.log(c)


// //SPREAD OPERATOR
// //2. OBJECT
// const stud = {
//     "name":"Dhivya",
//     "age":21
// }

// const s1 = {
//     ...stud,
//     "city":"cbe"
// }

// console.log(s1)

//REST OPERATOR
//to collect the values without using loops or sth
// const add=(...num)=>{
//     console.log(num)
// }
// add(1,2,3,4,5,7)

//MAP
// const a = [1,2,3,4,5]

// //map
// const r=a.map(n=>n*2)
// console.log(r)


// //normal fn
// function add(n){
//     return n*2;
// };

//FILTER
// const a = [1,2,3,4,5]
// const b = a.filter((n)=>n%2==0)
// console.log(b)

//FOR EACH
// const a = [1,2,3,4]
// a.forEach((n)=>{
//     console.log(n)
// })

//FIND
// const a = [1,2,3,4]
// const b = a.find((n)=> n%2==0)
// console.log(b)

//TERNARY OPERATOR
let a = 19
console.log((a>18)?"You can vote":"You cant vote")