import React from 'react';
import Favourite from '../../Components/Favourite/Favourite';
import Overview from '../../Components/Overview/Overview';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Wishlist from '../../Components/Wishlist/Wishlist';
import './Account.scss';

const Account = () => {
    return (
        <div className='container-fluid px-4 mt-5'>
            <div className='row'> 
                <div className="col-lg-2">
                    <Sidebar />
                </div>
                <div className="col-lg-10">
                    <div className="account-area">
                        <h2>Rafi Kadir</h2>
                        <nav>
                            <div className="nav" id="nav-tab" role="tablist">
                                <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Overview</button>
                                <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Favourite</button>
                                <button className="nav-link" id="nav-wish-tab" data-bs-toggle="tab" data-bs-target="#nav-wish" type="button" role="tab" aria-controls="nav-wish" aria-selected="false">Wishlist</button>
                            </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                <Overview/>
                            </div>
                            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                <Favourite/>
                            </div>
                            <div className="tab-pane fade" id="nav-wish" role="tabpanel" aria-labelledby="nav-wish-tab">
                                <Wishlist />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;