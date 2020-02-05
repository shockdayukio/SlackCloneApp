import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

if (!firebase.apps.length) {
  const config = {
    apiKey: "AIzaSyBWdKuOF10r6IYe62Ed03-r2iyjYUR9dXE",
    authDomain: "slack-clone-app-61428.firebaseapp.com",
    databaseURL: "https://slack-clone-app-61428.firebaseio.com",
    projectId: "slack-clone-app-61428",
    storageBucket: "slack-clone-app-61428.appspot.com",
    messagingSenderId: "420736770443",
    appId: "1:420736770443:web:b2362a90cc288f66d90f8e",
    measurementId: "G-CTLTDZTC8W"
  }
  firebase.initializeApp(config)
}

const db = firebase.firestore()
export {
  firebase,
  db
}