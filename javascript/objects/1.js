//songleton = when we declare as literals its not singleton
//pbject literals
const User = {
    name : "hitesh",
    age : "18",
    email : "gghj.com",
    loggedin : "yes",
    "lastlogin" : ["monday","tuesday"]
};
console.log(User.email);
console.log(User["email"]);
console.log(User["lastlogin"]);


