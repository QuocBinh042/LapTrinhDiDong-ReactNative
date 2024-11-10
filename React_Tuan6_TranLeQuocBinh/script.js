//Default Param
// const sum = (a = 10, b = 0) => {
//     return a + b;
// }

// const sum = (a,b) => {
//     a = a || 0;
//     b = b || 0;
//     return a + b;
// }
// console.log(sum())

//Spread syntax
// const array1 = [1, 2, 3]
// const array2 = [4, 5, 6]
// const array3 = [...array1, ...array2]
// console.log(...array1)
// console.log(...array2)
// console.log(...array3)

// let infoUser = {
//     id: 1,
//     name: "Kinglsey",
//     phoneNumber: "0390004109818",
// }

// let infoUpdate = {
//     age: 18,
//     email: "quocbinh042@gmail.com"
// }

// let infoFinal = {
//     ...infoUser,
//     ...infoUpdate
// }
// console.log(infoFinal)

// const array1 = [1, 2, 3]
// const array2 = [4, 5, 6]
// const array3 = [
//     {
//         id: 1,
//         name: 'An'
//     },
//     {
//         id: 2,
//         name: 'B'
//     }
// ]
// const array4 = [...array1, ...array2, ...array3]
// console.log(...array4)

// const sum = (...number) => {
//     console.log(number);
//     const result = number.reduce((total, item) => {
//         return total + item;
//     }, 0);
//     return result;
// }

// console.log(sum(1, 24, 52, 35, 64, 2))

let infoUser = {
    id: 1,
    name: "Kinglsey",
    phoneNumber: "0390004109818",
}

// const { name } = infoUser;
// console.log(name)
// console.log(name)

const { name, phoneNumber } = infoUser;
console.log(name)
console.log(phoneNumber)




