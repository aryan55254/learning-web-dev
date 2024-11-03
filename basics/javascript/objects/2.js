const mySym = Symbol("key 1")
const user = {
    [mySym] :"mykey1"
}
console.log(user[mySym]);