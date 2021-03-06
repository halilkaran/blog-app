import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import {
  getDatabase,
  onValue,
  ref,
  remove,
  set,
  update
} from "firebase/database";

import { readBlogAction } from "../redux/actions/dashboardActions";
import { setLoginAction, setLogoutAction } from "../redux/actions/userAction";
import { successNote } from "./customTostify";

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

export const auth = getAuth(app);

//! Sign Up with Google Provider
export const signUpWithGoogle = (dispatch) => {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  signInWithPopup(auth, provider)
    .then((res) => {
      dispatch(setLoginAction(res.user.auth.currentUser));
    })
    .catch((error) => {
      successNote(error)
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
      console.log(user);
successNote("successfully registered")
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
    .catch((error) => {successNote("password or email is incorrect  ")});
};

export const writeBlogData = (userId, blogs) => {
  const db = getDatabase();
  console.log(blogs);
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

export const readBlogData = (dispatch) => {
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

export const updateBlogData = (blogs) => {
  console.log(blogs);
  const db = getDatabase();
  //  const newPostKey = push(child(ref(db), "blog")).key;

  const updates = {};
  const postData = blogs;
  // updates["/blog/" + blogs.id] = postData;
  updates["blog/" + blogs.id] = postData;
  return update(ref(db), updates);
};

export const deleteCard = (id) => {
  const db = getDatabase();
  // const userRef = ref(db, 'contact');
  remove(ref(db, "blog/" + id));
   successNote("Deleted");
};
