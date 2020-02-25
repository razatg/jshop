import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyA-uigrGYz4GXAcj1536guoR-DEiEHLuV4",
    authDomain: "jiffstore-5b6c1.firebaseapp.com",
    databaseURL: "https://jiffstore-5b6c1.firebaseio.com",
    projectId: "jiffstore-5b6c1",
    storageBucket: "jiffstore-5b6c1.appspot.com",
    messagingSenderId: "1042584987670",
    appId: "1:1042584987670:web:e8a94996ec4f413f74ad37",
    measurementId: "G-WW11LLNGL1"
  };
//firebase.database.enableLogging(true);

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();