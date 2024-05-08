//object literals
const mysys = Symbol("key 1")

const Jsuser = {
    name : "John",
    age :18,

    "full name" : "John singh",
    location : "Jaipur",
    email : "John123@gmail.com",
    [mysys] :"mykey1",
    islogged : false,
    lastlogindays: ["Monday","Saturday"]
}

// console.log(Jsuser.email)
// console.log(Jsuser["email"])
// console.log(Jsuser["full name"] )
// console.log(Jsuser[mysys])

Jsuser.email = "johnabc@gmail.com"
//Object.freeze(Jsuser)
Jsuser.email ="john1234@gmail.com"
//console.log(Jsuser)

Jsuser.greeting = function(){
    console.log("HelloJS user");
}

console.log(Jsuser.greeting);

