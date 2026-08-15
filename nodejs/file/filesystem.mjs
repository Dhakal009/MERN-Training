import fs from "fs"

// fs.writeFile('test.txt', "hello world", () => console.log("File Written Successfully"))

// fs.appendFile('test.txt', "hello world2", () => console.log("File Written Successfully"))


fs.readFile("test.txt", (err, data) => {
    if (err) console.log(err.message)
    else console.log(data.toString())
})


// onlink=> delete, exist