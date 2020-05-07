import firebase from 'firebase/app';
import 'firebase/app'
import 'firebase/database'
import 'firebase/auth';


const Config = {
  apiKey: "AIzaSyB1JJFiwVKe_M5VRRdUuGDUnkqdsSuTYXw",
  authDomain: "m-city-c2c20.firebaseapp.com",
  databaseURL: "https://m-city-c2c20.firebaseio.com",
  projectId: "m-city-c2c20",
  storageBucket: "m-city-c2c20.appspot.com",
  messagingSenderId: "1036248094123",
  appId: "1:1036248094123:web:910b76a60f5a867b"
};
// Initialize Firebase
firebase.initializeApp(Config);

const firebaseDB = firebase.database();

const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');

export {
  firebase,
  firebaseMatches,
  firebasePromotions
}