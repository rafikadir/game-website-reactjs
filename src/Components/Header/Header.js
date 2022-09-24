import React from 'react';
import './Header.scss';
import { BiUserCircle } from "react-icons/bi";


const Header = () => {
    return (
        <header className='header-area'>
            <div className="container-fluid px-4">
                <div className="row align-items-center">
                    <div className="col-lg-2">
                        <div className='logo'>
                        <   a href="/">Gamez</a>
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
                                    <li><a class="dropdown-item" href="/">My Account</a></li>
                                    <li><a class="dropdown-item" href="/">Favourite</a></li>
                                    <li><a class="dropdown-item" href="/">Review</a></li>
                                    <li><a class="dropdown-item" href="/">Collection</a></li>
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