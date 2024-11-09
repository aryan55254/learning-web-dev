//write a code which cn give grades to students according to thier scores;
let score = prompt("enter the score:");
if (score <= 49){
    console.log("F  GRADE");
}
else if (score >= 50 && score <=59){
    console.log("D GRADE");
}
else if (score >=60 && score <=69){
    console.log("C GRADE");
}
else if (score >=70 && score <=89){
    console.log("B GRADE");
}
else {
    console.log("A GRADE");
}