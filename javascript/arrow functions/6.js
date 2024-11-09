const obj = {
    value : 20,
    myfunction: function(){
        console.log(this.value);
    },
}
obj.myfunction();
//doesn't work in arrow function
//arrow refers to window , global scope 