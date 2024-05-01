//object literals
const mysys = Symbol("key 1")

const Jsuser = {
    name : "John",
    age :18,

    "full name" : "John singh",
    location : "Jaipur",
    email : "John123@gmail.com",
    [mySym] :"mykey1",
    islogged : false,
    lastlogindays: ["Monday","Saturday"]
}

console.log(Jsuser.email)
console.log(Jsuser["email"])
console.log(Jsuser["full name"] )
console.log(Jsuser[mySum])
