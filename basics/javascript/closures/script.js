// a closue is the combination of a function bundled together(enclosed) with references to its surrounding state (the lexical environment), in other words closure give you access to an outer function scope from an inner function
//lexical scoping
function init()
{
    var name = "moilla";
    function displayname(){
        console.log(name);
    }
    displayname();//inner function is a closure
}
init();