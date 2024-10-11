let addsum = (...ee) => {
 let ans = 0;
 for (let i =0;i<ee.length;i++){
    ans = ans + ee[i];
 }
 console.log(ans);
}
addsum(4,5,6,6);