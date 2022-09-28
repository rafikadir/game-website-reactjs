import React from 'react';
import './Header.scss';
import { BiUserCircle } from "react-icons/bi";
import { Link } from 'react-router-dom';
import dropdownItems from './HeaderData';
import app from '../../auth/firebase.config';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useState } from 'react';

const Header = () => {

    const [user, setUser] = useState({});
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();

    const handleGoogleSign = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            setUser(user);
            console.log(user);
        }).catch((error) => {
            console.log(error);
        });
    };

    const handleGoogleSignout = () => {
        signOut(auth).then(() => {
            setUser({});
          }).catch((error) => {

          });
    };

    return (
        <header className='header-area'>
            <div className="container-fluid px-4">
                <div className="row align-items-center">
                    <div className="col-lg-2">
                        <div className='logo'>
                            <Link to="/">Gamez</Link>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <div className='search-area'>
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Search games" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className='user-area'>
                            <div class="btn-group">                   
                                <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                   <BiUserCircle />
                                </button>
                                <ul class="dropdown-menu">
                                    {
                                        dropdownItems.map(dropdownItem => 
                                            <li><Link to={dropdownItem.link} className="dropdown-item">{dropdownItem.name}</Link></li>
                                        )
                                    }
                                    <li><Link to="/signin" className="dropdown-item signIn">Sign In</Link></li>

                                    {/* <button onClick={handleGoogleSign} className='sign-btn'>Sign In</button>
                                    <button onClick={handleGoogleSignout} className='sign-btn'>Sign Out</button> */}
                                </ul>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;