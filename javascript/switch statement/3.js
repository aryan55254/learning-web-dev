//check our grade by using a switch case.
let grade = "d";
let result;
switch(grade) {
    case "a" :
        result = "extraordinary";
        break;
    case "b" :
        result = "good";
        break; 
    case "c" :
        result = "average";
        break;
    default :
    result = "faail";           
}
console.log(result);