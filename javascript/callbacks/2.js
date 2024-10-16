hello(leave);
goodbye();
function hello(callback){
    console.log("hello");
    callback();
}
function leave(){console.log("leaves");
}
function goodbye(){
    console.log("goodbye!");
}