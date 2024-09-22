//for-in used for objects and arrays
let student = {
    firstname : "aryan",
    age:18,
    cgpa:8.5,
};
let l = 0;
for (let i in student){

    console.log(i,student[i]);
    l++;
}
console.log(l);