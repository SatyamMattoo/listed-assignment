import "./styles/app.css";
import {
  signOut,
  onAuthStateChanged,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import  app  from "./firebase.js";
import { useEffect, useState } from "react";

const auth = getAuth(app);
const logOut = () => signOut(auth);

const loginGoogle = () => {
  const providerGoogle = new GoogleAuthProvider();
  signInWithPopup(auth, providerGoogle);
};

function App() {

  const [user,setUser]= useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,(data)=>{
    setUser(data);
    });
    return () => {
      unsubscribe();
    }
  },[])

  return (
    <>
    {
    (!user)?
      <div className="box">
        <div className="left-side">
          <div className="board">
            <p>Board.</p>
          </div>
        </div>
        <div className="right-side">
          <div className="signin">
            <h1>Sign In</h1>
            <p>Sign In to your account</p>
            <div className="options">
              <button className="google" onClick={loginGoogle}>
                <img
                  src="https://img.icons8.com/?size=512&id=V5cGWnc9R4xj&format=png"
                  alt=""
                  height={"15px"}
                />
                <p>Sign In with Google</p>
              </button>
              <button className="apple">
                <img
                  src="https://img.icons8.com/?size=512&id=890&format=png"
                  alt=""
                  height={"15px"}
                />
                <p>Sign In with Apple</p>
              </button>
            </div>
            <form className="form">
              <p>Email address</p>
              <input type="text" placeholder="Enter your email" />
              <p>Password</p>
              <input type="password" placeholder="Enter your password" />
              <a href="/">Forgot Password?</a>
              <button className="submitBtn">Sign In</button>
            </form>
            <p className="register">
              Don't have a account? <a href="/">Register here</a>
            </p>
          </div>
        </div>
      </div>
    :
    <div className="container">
      <button onClick={logOut}>logout</button>
    </div>  
    }
    </>
  );
}

export default App;
