const sendautoemail = (to) => (subject)=> (body)=>console.log(`sending email to ${to} with subject${subject}:${body}`);
let step1 = sendautoemail("@gmail.com");
let step2 = step1("new order");
let step3 = step2("hey piyush here is order");