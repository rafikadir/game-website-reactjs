import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Game from '../../Components/Game/Game';
import Games from '../../Components/Games/Games';

const Home = () => {
    return (
        <div className='container-fluid px-4 mt-5'>
            <div className='row'>
                <div className="col-lg-2">
                    <Sidebar />
                </div>
                <div className="col-lg-10">
                   <Games />
                </div>
            </div>
        </div>
    );
};

export default Home;