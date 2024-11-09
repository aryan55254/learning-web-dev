//cleaner way to do async
//defining promise hard
//using promise easy
//represents eventual completion or failure of async func.
//callback based=settimeout(callback,3000);
//promise based= settimeoutpromisisfied(3000).then(callback)
function settimeoutpromisisfied(ms){
    return new Promise(resolve => setTimeout(resolve,ms)
    );
    function callback(){
        console.log("3 seconds have passed");
    }
}
settimeoutpromisisfied(3000).then(callback);