function add(a){
    return function(b){
        return function(c){
            return a + b +c;
        }
    };
};
console.log(add(3)(4)(5));
function sendAutoEmail(to){
    return function(subject){
        return function(body){
            console.log(`sending email to ${to} with subject${subject}:${body}`)
        }
    }
}
let step1 = sendAutoEmail("@gmail.com");
let step2 = step1("new order");
let step3 = step2("hey piyush here is order");