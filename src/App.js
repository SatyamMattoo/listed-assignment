import "./styles/app.css";
import {
  signOut,
  onAuthStateChanged,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import app from "./firebase.js";
import { useEffect, useState } from "react";
import Signin from "./components/Signin";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Stats from "./components/Stats";
import Graph from "./components/Graph";
import Products from "./components/Products";
import Schedule from "./components/Schedule";

const auth = getAuth(app);
const logOut = () => signOut(auth);

const loginGoogle = () => {
  const providerGoogle = new GoogleAuthProvider();
  signInWithPopup(auth, providerGoogle);
};

function App() {
  const [user, setUser] = useState(false);

  const photoURL = (user)?user.photoURL:"";
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (data) => {
      setUser(data);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      {!user ? (
        <div className="box">
          <div className="left-side">
            <div className="board">
              <p>Board.</p>
            </div>
          </div>
          <div className="right-side">
            <Signin loginGoogle={loginGoogle} />
          </div>
        </div>
      ) : (
        <div className="dashboard">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="main">
            <div className="first">
              <Header photo={photoURL} logOut={logOut}/>
            </div>
            <div className="second">
              <Stats />
            </div>
            <div className="third">
              <Graph />
            </div>
            <div className="fourth">
              <Products />
              <Schedule />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
