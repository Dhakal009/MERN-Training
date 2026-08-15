
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

async function getSum() {
    const result = await add(2, 3);
    console.log(result)
}

getSum();

console.log("C")

