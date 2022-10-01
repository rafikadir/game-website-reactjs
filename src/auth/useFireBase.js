import { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import app from '../auth/firebase.config';
import { useEffect } from "react";


const useFireBase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            setUser(user);
        })
        .catch((error) => {
        });
    };

    const handleGoogleSignout = () => {
        signOut(auth)
        .then(() => {})
    };

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        });
    },[])


    return {
        user,
        signInWithGoogle,
        handleGoogleSignout
    };
}

export default useFireBase;