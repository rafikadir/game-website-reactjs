import React from 'react';
import './SignIn.scss';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword} from "firebase/auth";
import app from '../auth/firebase.init';
import { useState } from 'react';
import { useEffect } from 'react';

const SignIn = () => { 
    
    const auth = getAuth(app);

    const [user, setUser] = useState({});
    const [email, setEmail] = useState({});
    const [password, setPassword] = useState({});
    const [hasAccount, setHasAccount] = useState(false);
   
    // Google Button
    const handleGoogleAuth = event => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            setUser(user);
        }).catch((error) => {
            console.log(error)
        });

        event.preventDefault();
    }

    //Handle Email
    const handleEmailData = event => {
        setEmail(event.target.value);
    };
    // Handle Password
    const handlePass = event => {
        setPassword(event.target.value);
    };

    //HandleForm
    const handleForm = event => {

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setUser(user);
        })
        .catch((error) => {
            console.log(error);
        });

        event.preventDefault();
    };

    //Handle Button Toggle in
    const handleLogIn = () =>{
        setHasAccount(true);
    }

    const handleSignUp = () => {
        setHasAccount(false);
    }

    // Signedin User
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const uid = user.uid;
            } 
            else {
            }
          });
    });

    return (
        <div className='container-fluid p-0 signin-container'>
            <div className='signInBanner'>
                <div className="form-area">
                    <form onSubmit={handleForm}>
                       { !hasAccount ?
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder='Enter Your Name' required/>
                            </div>
                        :
                        null
                        }
                        <div className="mb-2">
                            <input onBlur={handleEmailData} type="email" className="form-control" placeholder='Enter Your E-mail' required/>
                        </div>
                        <div className="mb-2">
                            <input onBlur={handlePass} type="password" className="form-control"  placeholder='Password' required/>
                        </div>
                        {
                            !hasAccount ?
                            <button type="submit" class="btn mb-2">Create an Account</button>
                            :
                            <button type="submit" class="btn mb-2">Log In</button>
                        }
                    </form>
                    <div>
                        <button onClick={handleGoogleAuth} className='btn mb-2'>Sign in with Google</button>
                    </div>

                    { 
                        !hasAccount ?
                        <button onClick={handleLogIn} className='btn bg-white text-black'>Already Reistered? log In</button>
                        :
                        <button onClick={handleSignUp} className='btn bg-white text-black'>Not Reistered Yet? Sign Up</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default SignIn;