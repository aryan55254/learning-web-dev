//hof function that accept functions as arguments or returns functions or both
function add(a,b){
    return a + b;
}
function operation(a,b,fn)
{
    let result = fn(a,b);
    console.log(result);
    
}
operation(3,4,add);