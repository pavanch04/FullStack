
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getAuth,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDowHgwK0XZRa2tUoluPOX02-7qzlF0l6Q",
    authDomain: "signup-page-49d85.firebaseapp.com",
    projectId: "signup-page-49d85",
    storageBucket: "signup-page-49d85.appspot.com",
    messagingSenderId: "1007916962260",
    appId: "1:1007916962260:web:6826f9c8bfcfe158154641"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

  var firstname =document.getElementById("fname")
  var lastname =document.getElementById("lname")
  var email =document.getElementById("text")
  var password =document.getElementById("password")

  window.signup=function(e){
    e.preventDefault();
    var obj={
        firstname:firstname.value,
        lastname:lastname.value,
        email:email.value,
        password:password.value, 

    }
    createUserWithEmailAndPassword(auth,obj.email,obj.password).then(function(success){
        alert("signup successfully");
        window.location.href='page.html';
    })
    .catch(function(err){
        alert("error" + err)
    })
    console.log(obj)
  };



