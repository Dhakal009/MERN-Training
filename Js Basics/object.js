const user = {
    username: "Bikash",
    address: {
        district:"lalitpur",
        province:"Bagmati"
    },
    age :21,
    isActive :true,
    skills:["Java","C#"]
};
// user.email = "bikash123@gmail.com"

// console.log(user)
// console.log(user.address)
// console.log(user["age"]);

// console.log(user.address.district)

// for(let key in user){
//     console.log(key,user[key])
// }



//                                             object spreading
// const newUser = {...user,experience:2}
// console.log(newUser)



//                                             object destructuring


// const userName =  user.username
// const age = user.age
// const skills = user.skills

// const {username:fullname,age,skills} = user;
// console.log(fullname,age,skills)



const users = [
    {username:"xyz", password:"!@3"},
    {username:"asa",password:"!@2"}
]
console.log(users[0].username);
