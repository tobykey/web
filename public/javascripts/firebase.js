 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyCXXgMQpSNN7p_KU8bx9U2x7cbT__L7CD4",
   authDomain: "fir-491f6.firebaseapp.com",
   projectId: "fir-491f6",
   storageBucket: "fir-491f6.appspot.com",
   messagingSenderId: "948274318153",
   appId: "1:948274318153:web:3361ac5ac049d24df06898",
   measurementId: "G-8GC4N7JXT5"
 };

 // Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);