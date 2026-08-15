
console.log("A")
function add(num1, num2) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (num1 < 0 || num2 < 0) {
                let err = new Error("Number cannot be negative")
                rej(err)
            } else {
                let sum = num1 + num2;
                res(sum)
            }
        },2000)
   })
}

add(1, 2)
    .then((data) => console.log(data))
    .catch((err) => console.log(err.message))


console.log("C")
