import {login} from "../firebase config/firebase";
 window.Signin=function()
{
    const allinput=document.getElementsByTagName('input')
const email=allinput[0]
const password=allinput[1]
const user={
    email:email.value,
    password:password.value 
}
login(user)

console.log(user)


}