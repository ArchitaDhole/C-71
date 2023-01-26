import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDCrOq-7if-LyHiSoVRNsiUfP_MlaXPMTA",
    authDomain: "c-71-97fb6.firebaseapp.com",
    projectId: "c-71-97fb6",
    storageBucket: "c-71-97fb6.appspot.com",
    messagingSenderId: "485533936523",
    appId: "1:485533936523:web:9f9e7c5a56c7494e58dd8e"
};
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
