// localStorage.setItem("users","hello  world")
// localStorage.setItem("users",JSON.stringify("hello"))

//  const users=[]
//  const users=JSON.parse(localStorage.getItem("users"))||[]
// function onsignup(){

// const input=document.getElementsByTagName("input")
// const fullname=input[0].value
// const Email=input[1].value
// const passwordassword=input[2].value
// const confirmpassword=input[3].value
// const phonenumber=input[3].value

// const user={
//     fullname,
//     Email,
//     passwordassword,
//     confirmpassword,
//     phonenumber

// }
// users.push(user)
// localStorage.setItem("users",JSON.stringify(users))

// }
import { register } from "../firebase config/firebase.js"
window.onsignup=function()
{
const allinput=document.getElementsByTagName('input')
const fullname=allinput[0]
const email=allinput[1]
const password=allinput[2]
const phonenumber=allinput[3]

const user={
    fullname:fullname.value,
    email:email.value,
    password:password.value,
    phonenumber:phonenumber.value
}

register(user)



}
