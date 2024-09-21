//synch code line by line

function sum(n)
{
    let ans = 0;
    for (let i=1;i<=n;i++){
        ans += i
    }
    return ans;
}
let ans1 = sum(3);
console.log(ans1);