import firebase from 'firebase/app';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyD0wJE4lp9kFJWj1_kAeug7XqJ28Rn5MEw",
    authDomain: "petzgram-4f660.firebaseapp.com",
    projectId: "petzgram-4f660",
    storageBucket: "petzgram-4f660.appspot.com",
    messagingSenderId: "415553812952",
    appId: "1:415553812952:web:d012a9c0ade50b1a0e9aad",
    measurementId: "G-VT0SSW856R"
};
 // Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
   
}

export const registerUser = (name: string, email: string, password: string) =>{
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch((error) =>{
        alert('codigo do erro: '+ error.code);
    });

    alert(email+' '+password);
}

export default firebase;