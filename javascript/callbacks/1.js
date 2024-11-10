function greet(name,callback){
    console.log(`hello ${name}`);
    callback();
}
function saygoodbye(){
    console.log("goodbye");
}
greet("alice",saygoodbye);
//this was sync
