const obj1 = {
    1:"A", 2:"b"
}
const obj2 = { 3:"c",4:"d"}
const obj4 = { 5:"c",6:"r"}
const obj3 = Object.assign({},obj1 , obj2, obj4)
console.log(obj3);
//well use spread operator more 
//keys =give aaray of keys
//enteries = gives arrays of every key value pair
//hasOwnproperty = check if it has this property
