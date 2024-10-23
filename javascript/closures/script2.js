function main(name)
{
    
    function sayname()
    {
        console.log(name);
    }
    return sayname;
}
let fn = main("aryan");
fn(); 
console.log(fn);