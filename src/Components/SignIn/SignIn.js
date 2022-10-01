import React from 'react';
import { useState } from 'react';
import './SignIn.scss';
import app from '../../auth/firebase.config';
import { getAuth,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword
    } from "firebase/auth";
import useFireBase from '../../auth/useFireBase';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

const auth = getAuth(app);

const SignIn = () => {
    const [user] = useAuthState(auth);
    const {signInWithGoogle} = useFireBase();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathName || '/';

    const handleGoogleSignin = () => {
        signInWithGoogle()
    };

    if(user){
        navigate(from, {replace: true});
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [registered, setRegistered] = useState(false);

    const handleEmail = event => {
        setEmail(event.target.value);
    };
    const handlePassword = event => {
        setPassword(event.target.value);
    };

    const handleName = event => {
        setName(event.target.value);
    };

    const submitForm = event => {
        if(registered){
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {

            });
        }
        
        else {
            createUserWithEmailAndPassword (auth, email, password)
            .then(result => {
                const user = result.user;
            })
            .catch(err => {
            });
        }

        event.preventDefault();
    };

    const handleRegisterd = event => {
        setRegistered(event.target.checked);
    };

    return (
        <div className='container-fluid p-0 signin-container'>
            <div className='signInBanner'>
                <div className="form-area">
                    <h4>{registered ? 'Log In' : 'Create an Account'}</h4>
                    <form onSubmit={submitForm}>
                        { !registered && <div className="mb-2">
                            <input onBlur={handleName} type="text" className="form-control" placeholder='Enter Your Name' required/>
                        </div>}
                        <div className="mb-2">
                            <input onBlur={handleEmail} type="email" className="form-control" placeholder='Enter Your E-mail' required/>
                        </div>
                        <div className="mb-2">
                            <input  onBlur={handlePassword} type="password" className="form-control"  placeholder='Password' required/>
                        </div>
                        <div class="form-check mb-3">
                            <input onChange={handleRegisterd} type="checkbox" class="form-check-input" id="checklogin"/>
                            <label class="form-check-label" for="checklogin">Already Registered</label>
                        </div>
                        <button type="submit" class="btn mb-2">{registered ? 'Log In' : 'Create an Account'}</button>
                    </form>

                    <button onClick={handleGoogleSignin}>Log in with Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;