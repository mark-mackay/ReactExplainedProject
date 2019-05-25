import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyDt2RdxXqzmOIHxDoS7KgRrV1LBkuOqv7A",
  authDomain: "react-blog-demo-85f96.firebaseapp.com",
  databaseURL: "https://react-blog-demo-85f96.firebaseio.com",
  projectId: "react-blog-demo-85f96",
  storageBucket: "react-blog-demo-85f96.appspot.com",
  messagingSenderId: "1060897442291",
  appId: "1:1060897442291:web:6ed55535077e4c5f"
};

firebase.initializeApp(config);
export default firebase;
