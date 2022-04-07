import { useState,useEffect } from "react";
import { getDatabase,ref,push,set, onValue,query, remove,child,update } from "firebase/database"
import { successNote } from "./customTostify";
import { BsListUl } from "react-icons/bs";
import { date } from "yup/lib/locale";
import {
  
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword
} from "firebase/auth";

export const addBlog=(blog)=>{
    const db=getDatabase();
    const userRef=ref(db,"contact")
    const newUserRef=push(userRef)
    set(newUserRef,{
          img: blog.img,
    title: blog.title,
      date: blog.date,
    text: blog.text,
    email: blog.email,
    });
    successNote("Added successfully")
}

 
export const userStateChecker = (setCurrentUser) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user);
    } else {
      setCurrentUser(false);
    }
  });
};

export const signUpWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  signInWithPopup(auth, provider)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const logOut = () => {
  signOut(auth);
};

export const createUser = async (email, password, displayName) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, { displayName: displayName });
  } catch (error) {
    console.log(error);
  }
};

export const signIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
  }
};
