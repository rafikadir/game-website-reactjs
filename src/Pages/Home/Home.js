import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';

const Home = () => {
    return (
        <div className='container-fluid px-4'>
            <div className='row'>
                <div className="col-lg-2">
                    <Sidebar />
                </div>
                <div className="col-lg-10">
                    main
                </div>
            </div>
        </div>
    );
};

export default Home;