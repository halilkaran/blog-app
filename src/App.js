 import AppRouter from "./router/Router";
import './App.css';
 

import { ToastContainer } from "react-toastify";   
 import { useEffect } from "react";
 
 
 
import { setLoginAction } from "./redux/actions/userAction";
import { useDispatch } from "react-redux";
import { auth } from "./utils/firebase";
function App() {
   const dispatch = useDispatch();
useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((user) => {
    dispatch(setLoginAction(user));
  });
  return unsubscribe; //! clean-up function
}, [dispatch]);

  return (
    <>
      
      <ToastContainer />
      <AppRouter />
    </>
  );
}

export default App;
