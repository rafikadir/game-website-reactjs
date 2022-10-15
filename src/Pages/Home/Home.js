import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Games from '../../Components/Games/Games';
import useFirebase from '../../hooks/useFirebase';

const Home = () => {
    const {user} = useFirebase();

    return (
        <div className='container-fluid px-4 mt-5'>
            <div className='row'>
                
                <div className="col-lg-2">
                    <Sidebar />
                </div>
                <div className="col-lg-10">
                    { user?.displayName ?
                        <h1 className='mb-4'>HI, Rafi Kadir</h1>
                        :
                        <h1 className='mb-4'>Top Picks</h1>
                    }
                   <Games />
                </div>
            </div>
        </div>
    );
};

export default Home;