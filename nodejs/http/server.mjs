import http from 'http';

const users = [{username:"bikash",password: "123"}]

const server =  http.createServer((req,res)=>{
    console.log(req.method,req.url)
    // res.setHeader("Content-Type","text/html")
    const path = req.url;
    // if(path == "/"){
    //     res.end("<h1>Home Page </h1>")
    // }else if(path == "/about"){
    //     res.end("About Page")
    // }else if(path == "/profile"){
    //     res.end("<h2>Profile Page</h2>")
    // }else{
    //     res.statusCode = 404;
    //     res.end("404 not found")
    // }

    res.setHeader("Content-Type","application/json")
    if(req.method == "GET"){
        if(path == "/users"){
            res.end(JSON.stringify(users))
        }
    }else if(req.method == "POST"){
        if(path == "/users"){
            let body = "";
            req.on("data",(chunk) => body += chunk);
            req.on("end",()=>{
                let data = JSON.parse(body);
                users.push(data);
                res.end("User added successfully")
            })
        }
    }
});



server.listen(3000,()=>console.log("Server is up and running"))

