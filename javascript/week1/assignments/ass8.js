// 1. Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old

function above18(users)
{
  let over18 = users.filter(
      (user) => user.age > 18
  );
  console.log(over18);
}
let users = [
    { name: "Bharat", age: 21 },
    { name: "Deepak", age: 17 },
    { name: "Harkirat", age: 27 },
    { name: "Raj", age: 15 },
    { name: "Niraj", age: 20 },
  ];
  console.log(above18(users));