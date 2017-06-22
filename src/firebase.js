import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBMBE1AP8O0T45l8Qft1S52OC2XuaHwqME",
    authDomain: "goalcoach-79a54.firebaseapp.com",
    databaseURL: "https://goalcoach-79a54.firebaseio.com",
    projectId: "goalcoach-79a54",
    storageBucket: "",
    messagingSenderId: "199573859778"
};

export const firebaseApp = firebase.initializeApp(config);