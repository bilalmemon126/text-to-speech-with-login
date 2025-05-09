let email = document.getElementById("email")
let password = document.getElementById("password")
let signup = document.getElementById("signup")

const firebaseConfig = {
  apiKey: "AIzaSyC-DT5fM0EkehLCjNLdPbBX3VfULFJXRXU",
  authDomain: "login-page-5f4d8.firebaseapp.com",
  projectId: "login-page-5f4d8",
  storageBucket: "login-page-5f4d8.firebasestorage.app",
  messagingSenderId: "1017619503633",
  appId: "1:1017619503633:web:1bc35a8b1bc761afecefb0",
  measurementId: "G-4XPBFS6MWW"
};

firebase.initializeApp(firebaseConfig);



signup.addEventListener("click", async (e) => {

  e.preventDefault();
  await firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      email.value = "";
      password.value = "";
      window.location.replace('./textToSpeech.html')
    })
    .catch((error) => {
      alert(error)
    });
})