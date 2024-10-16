hello();
goodbye();
function hello(){
    setTimeout(function(){
    console.log("hello");
},3000);
}
function goodbye(){
    console.log("goodbye");
}