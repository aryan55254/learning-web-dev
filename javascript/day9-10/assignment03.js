let gameNum = 25;
let userNum = prompt("guess the game number:");
while (userNum != gameNum ){
    userNum = prompt("try again:");
}
console.log("consrats right number");