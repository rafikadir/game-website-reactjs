import React from 'react';
import './SignIn.scss';
import { useState } from 'react';
import useFirebase from '../../hooks/useFirebase';
import { useLocation, useNavigate } from 'react-router-dom';

const SignIn = () => { 
    
    const {user} = useFirebase();

    const {handleGoogleAuth,handleForm,handleEmailData,handlePass,handleLogIn} = useFirebase();
    const [hasAccount, setHasAccount] = useState(false);
    
    //Handle Button Toggle in
    const LogInCng = () =>{
        setHasAccount(true);
    }
    const SignUpCng = () => {
        setHasAccount(false);
    }

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from.pathname || '/';

    if(user){
        navigate(from, {replace: true});
    }

    return (
        <div className='container-fluid p-0 signin-container'>
            <div className='signInBanner'>
                <div className="form-area">
                    <form>
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
                            <button onClick={handleForm} className="btn mb-2">Create an Account</button>
                            :
                            <button onClick={handleLogIn}  className="btn mb-2">Log In</button>
                        }
                    </form>
                    <div>
                        <button onClick={handleGoogleAuth} className='btn mb-2'>Sign in with Google</button>
                    </div>

                    { 
                        !hasAccount ?
                        <button onClick={LogInCng} className='btn bg-white text-black'>Already Reistered? log In</button>
                        :
                        <button onClick={SignUpCng} className='btn bg-white text-black'>Not Reistered Yet? Sign Up</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default SignIn;