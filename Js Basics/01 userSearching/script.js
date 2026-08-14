const users = [
    {
        username: "Bikash",
        address: { district: "Lalitpur", province: "Bagmati" },
        age: 21,
        isActive: true,
        skills: ["Java", "C#"]
    },
    {
        username: "Sita",
        address: { district: "Bhaktapur", province: "Bagmati" },
        age: 25,
        isActive: false,
        skills: ["JavaScript", "HTML"]
    },
    {
        username: "Ram",
        address: { district: "Kathmandu", province: "Bagmati" },
        age: 30,
        isActive: true,
        skills: ["Node.js", "MongoDB"]
    },
    {
        username: "Mina",
        address: { district: "Pokhara", province: "Gandaki" },
        age: 27,
        isActive: true,
        skills: ["React", "CSS"]
    },
    {
        username: "Anita",
        address: { district: "Dharan", province: "Koshi" },
        age: 23,
        isActive: false,
        skills: ["Python", "Django"]
    }
];



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
        if (searchUser === elem.username || searchUser === elem.username.toLowerCase()) {
            found = true
            const { username, address: { district, province }, age, isActive, skills } = elem

                const box = document.createElement("div")
                const h1  = document.createElement("h1")
                h1.textContent = "User Details:"
                const p = document.createElement("p")
                p.innerHTML = `UserName: ${username} <br> Address :<br> District: ${district} <br> Province: ${province} <br> Age: ${age} <br> IsActive: ${isActive} <br> Skills: ${skills}`
                box.appendChild(h1)
                box.appendChild(p)
                result.appendChild(box)


        }
            
        });

        if(!found){ {
            const h1 = document.createElement("h1")
            h1.textContent = "Not Found Any Users"
            result.appendChild(h1)
        }
}
})