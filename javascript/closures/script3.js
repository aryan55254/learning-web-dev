function adder(num){
    function add(b){
        console.log(num+b);
    }
    return add;
}
const addto5=adder(5);
addto5(2);
