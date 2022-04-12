import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword
} from "firebase/auth";
import {
  child,
  get,
  getDatabase,
  onValue,
  query,
  ref,
  set
} from "firebase/database";
import { useSelector } from "react-redux";
import { readBlogAction } from "../redux/actions/dashboardActions";
import { setLoginAction, setLogoutAction } from "../redux/actions/userAction";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

//! Sign Up with Google Provider
export const signUpWithGoogle = (dispatch) => {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  signInWithPopup(auth, provider)
    .then((res) => {
      dispatch(setLoginAction(res.user.auth.currentUser));
    })
    .catch((error) => {
      console.log(error);
    });
};

//!Logout
export const logOut = (dispatch) => {
  signOut(auth);
  dispatch(setLogoutAction());
};

//! Creating New User (Register)
export const createUser = async (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ..
    });
};

//!Sign in with email and password
export const signIn = (dispatch, email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
      dispatch(setLoginAction(res.user));
    })
    .catch((err) => alert(err));
};

export const writeBlogData = (userId, blogs) => {
  const db = getDatabase();
  set(ref(db, "blog/" + userId), blogs);
};

// export const readBlogData = async() => {
//   const dbRef = ref(getDatabase());
// let data = await get(child(dbRef, `blog`))
//   .then((snapshot) => {
//     snapshot.val()
      
     
//     })
//     .catch((error) => {
//       console.error(error);
//     });
  
//   return data
// };


export const readBlogData = (dispatch ) => {
  const db = getDatabase();
  const starCountRef = ref(db, "blog");
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    const arrayData = Object.values(data);
     console.log(arrayData);
    dispatch(readBlogAction(arrayData));
    
  });
};