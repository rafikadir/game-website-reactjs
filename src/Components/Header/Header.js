import React from 'react';
import './Header.scss';
import { BiUserCircle } from "react-icons/bi";
import { Link } from 'react-router-dom';
import dropdownItems from './HeaderData';
import useFirebase from '../../hooks/useFirebase';
import { useState } from 'react';

const Header = () => {

    const {user, handleSignout} = useFirebase();

    return (
        <header className='header-area'>
            <div className="container-fluid px-4">
                <div className="row align-items-center">
                    <div className="col-lg-2">
                        <div className='logo'>
                            <Link to="/">Game Zone</Link>
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
                                    <li>
                                        {!user?.uid 
                                        ? 
                                        <Link to="/signin" className="dropdown-item signIn">Sign In</Link>
                                        :
                                        <button onClick={handleSignout} className="dropdown-item signIn">Sign Out</button>}
                                    </li>
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