const users = [
    { username: "Aarav", password: "!@3" },
    { username: "Saraswati", password: "!@2" },
    { username: "Ram", password: "Pass@123" },
    { username: "Sita", password: "Pass@234" },
    { username: "Hari", password: "Pass@345" },
    { username: "Gita", password: "Pass@456" },
    { username: "Ramesh", password: "Pass@567" },
    { username: "Suresh", password: "Pass@678" },
    { username: "Mina", password: "Pass@789" },
    { username: "Bikash", password: "Pass@890" },
    { username: "Anita", password: "Pass@901" },
    { username: "Prakash", password: "Pass@012" }
]



const btn = document.getElementById("btn");
const result = document.querySelector(".result")


btn.addEventListener("click",(e)=>{
    e.preventDefault();
    result.innerHTML= ""
    result.style.display = "flex"
    const searchUser = document.getElementById("searched").value;
    let username;
    let password;
    let found=false
    users.forEach(elem => {
            if(searchUser === elem.username || searchUser === elem.username.toLowerCase()){
                found = true
                username = elem.username
                password = elem.password
                
            }
            
        });
    if(found){
        const box = document.createElement("div")
        const h1  = document.createElement("h1")
        h1.textContent = "User Details:"
        const p = document.createElement("p")
        p.innerHTML = `UserName = ${username} <br> password = ${password}`
        box.appendChild(h1)
        box.appendChild(p)
        result.appendChild(box)

    }else{
        const h1 = document.createElement("h1")
        h1.textContent = "Not Found Any Users"
        result.appendChild(h1)
    }
})