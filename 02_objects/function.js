// function addtwonumber(number1,number2){
//     console.log(number1 + number2);
// }

// function addtwonumber(number1,number2){
//     let result = number1+ number2;
//     console.log("hello world");
//     return result;
    

// }
// const result = addtwonumber(3 , 5)
// console.log("Result:",result);

function loginusermessage(user= " Sam"){
    if(user === undefined){
        console.log("please enter the username");

    }
    return `${user} just logged in`
}
console.log(loginusermessage("astha"))
console.log(loginusermessage())