import React from 'react';
import './SignIn.scss';

const SignIn = () => {
    return (
        <div className='container-fluid p-0 signin-container'>
            <div className='signInBanner'>
                <div className="form-area">
                    <form>
                        <div className="mb-2">
                            <input type="text" className="form-control" placeholder='Enter Your Name' required/>
                        </div>
                        <div className="mb-2">
                            <input type="email" className="form-control" placeholder='Enter Your E-mail' required/>
                        </div>
                        <div className="mb-2">
                            <input type="password" className="form-control"  placeholder='Password' required/>
                        </div>
                        <div class="form-check mb-3">
                            <input type="checkbox" class="form-check-input" id="checklogin"/>
                            <label class="form-check-label" for="checklogin">Already Registered</label>
                        </div>
                        <button type="submit" class="btn mb-2">Create an Account</button>
                    </form>

                    <button>Log in with Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;