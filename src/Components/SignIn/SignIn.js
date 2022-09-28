import React from 'react';
import './SignIn.scss';

const SignIn = () => {
    return (
        <div className='container-fluid p-0 signin-container'>
            <div className='signInBanner'>
            <div className="form-area">
                <form>
                    <div class="mb-2">
                        <input type="email" class="form-control" placeholder='Enter Your E-mail'/>
                    </div>
                    <div class="mb-2">
                        <input type="password" class="form-control"  placeholder='Password'/>
                    </div>
                    <button type="submit" class="btn">Submit</button>
                </form>
            </div>
            </div>
        </div>
    );
};

export default SignIn;