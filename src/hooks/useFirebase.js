import { useEffect, useState } from "react";
import {getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword} from "firebase/auth";
import app from "../Components/auth/firebase.init";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState({});
    const [password, setPassword] = useState({});
  
    // Google Sign In
    const handleGoogleAuth = event => {
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            setUser(user);
        }).catch((error) => {});
        event.preventDefault();
    }

    // Create User with Email and pass
    const handleForm = e => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setUser(user);
        })
        .catch((error) => {
            console.log(error);
        });

        e.preventDefault();
    };

    // Sign in user with Email and Password
    const handleLogIn = e => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setUser(user);
        })
        .catch((error) => {
        });

        e.preventDefault();
    };

    //Handle Email
    const handleEmailData = event => {
        setEmail(event.target.value);
    };
    // Handle Password
    const handlePass = event => {
        setPassword(event.target.value);
    };

    // Signed In User
    useEffect(() => {
        onAuthStateChanged(auth, user=>{
            setUser(user);
        })
    },[])

    //Sign Out
    const handleSignout = () => {
        signOut(auth).then(() => {
          }).catch((error) => {
        });
    }

    return {
        user,
        handleGoogleAuth,
        handleSignout,
        handleForm,
        handleEmailData,
        handlePass,
        handleLogIn
    }
}

export default useFirebase;