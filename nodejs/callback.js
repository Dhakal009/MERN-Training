// console.log("A");

// const add = (num1, num2) => {
//     setTimeout(() => {
//         const result = num1 + num2;
//         return result;
//     }, 2000);
// }

// const result = add(5, 10);
// console.log(result);
// console.log("B");

//solving using callback

console.log("A")

function add(num1, num2, callback) {
    setTimeout(() => {
        callback(num1 + num2)
    }, 2000);
}

add(1, 2, (result) => console.log(result))
console.log("C")

