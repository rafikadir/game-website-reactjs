import React from 'react';
import { useState } from 'react';
import './SignIn.scss';
import app from '../../auth/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registered, setRegistered] = useState(false);

    const auth = getAuth(app)

    const handleEmail = event => {
        setEmail(event.target.value);
    };
    const handlePassword = event => {
        setPassword(event.target.value);
    };


    const submitForm = event => {
        if(registered){
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("sign In sucess");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
        }
        
        else {
            createUserWithEmailAndPassword (auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => {
                console.log(err);
            });
        }
        

        event.preventDefault();
    };

    return (
        <div className='container-fluid p-0 signin-container'>
            <div className='signInBanner'>
            <div className="form-area">
                <form onSubmit={submitForm}>
                    <div className="mb-2">
                        <input onBlur={handleEmail} type="email" className="form-control" placeholder='Enter Your E-mail'/>
                    </div>
                    <div className="mb-2">
                        <input  onBlur={handlePassword} type="password" className="form-control"  placeholder='Password'/>
                    </div>
                    <button type="submit" class="btn">Create an Account</button>
                </form>
            </div>
            </div>
        </div>
    );
};

export default SignIn;