const User = {
    name : "hitesh",
    age : "18",
    email : "gghj.com",
    loggedin : "yes",
    "lastlogin" : ["monday","tuesday"]
};
User.email = "aloo.com";
User.email="a.com";
console.log(User.email);

User.greeting = function()
{
    console.log("hello user");
}
console.log(User.greeting());
