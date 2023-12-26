import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
  
  
  const firebaseConfig = {
    apiKey: "AIzaSyA7R2Fw0jR1hRbbUe6r5d9yJVy7_7DU09U",
    authDomain: "smit10-80688.firebaseapp.com",
    projectId: "smit10-80688",
    storageBucket: "smit10-80688.appspot.com",
    messagingSenderId: "617969304498",
    appId: "1:617969304498:web:91f4390d178d9fdef89aab",
    measurementId: "G-9M8JL0REW0"
  };
  const app=initializeApp(firebaseConfig)
  const auth=getAuth(app)


  function register(user)
  {
 
  const{email,password}=user
    createUserWithEmailAndPassword(auth,email,password)
      .then((userCredential) => {
        
        const user = userCredential.user;
       
  
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode)
      
      });
  }
function login(user){
  const{email,password}=user
  signInWithEmailAndPassword(auth,email,password)
  .then((userCredential) =>{
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    alert("success")
    console.log(user)
     window.location.href="../../Src/dashboard/dashboard.html"


    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });

}


  export{
    register
  }
  export{
   login
  }