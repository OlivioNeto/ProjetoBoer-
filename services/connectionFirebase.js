//biblioteca do firebase
import firebase from "firebase/compat/app";
//autenticação de email e senha
import "firebase/compat/auth";
//trabalha com o banco de dados criado no firebase
import "firebase/compat/database";

let firebaseConfig = {
  apiKey: "AIzaSyBkG7ogFmb5Tx-Lp6j0RS-9_ynInQ-PEIY",
  authDomain: "dbappboero.firebaseapp.com",
  databaseURL: "https://dbappboero-default-rtdb.firebaseio.com",
  projectId: "dbappboero",
  storageBucket: "dbappboero.appspot.com",
  messagingSenderId: "1010421622315",
  appId: "1:1010421622315:web:4af656cb39f4a6896e2c6e",
};
if (!firebase.apps.length) {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
