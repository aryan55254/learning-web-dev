function addnum() {
    let ans = 0;
    for (let i = 0;i<arguments.length; i++){
       ans = ans + arguments[i]
    }
    return ans

}//unlimited arguments
let result = addnum(1,2,5);
console.log(result);
