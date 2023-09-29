// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
import { getAuth,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

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
const analytics = getAnalytics(app);
const auth = getAuth();

var Email = document.getElementById('email');
var Password = document.getElementById('password');

window.login = function(e) {
    e.preventDefault();
    var obj = {
        email:Email.value,
        password:Password.value
    }
    signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function(userCredential) {
        var user = userCredential.user;
        console.log(user.uid);
        alert("Login Successfull");
        window.location.href='search.html';
    })
    .catch(function(err) {
        console.log("Login failed");
        alert("Error: " + err );
    })
    console.log(obj);
}