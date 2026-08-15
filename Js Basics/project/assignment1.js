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



const userName = "bikash";

let foundUser = null;
users.forEach(user => {
    if (user.username === userName || user.username.toLowerCase() === userName.toLowerCase()) {
        foundUser = user;
        const { username, address: { district, province }, age, isActive, skills } = foundUser;
        console.log("User Details");
        console.log("Username:", username);
        console.log("District:", district);
        console.log("Province:", province);
        console.log("Age:", age);
        console.log("Active:", isActive);
        console.log("Skills:", skills);
    }

});
if (!foundUser) {

    console.log("User not found");

}