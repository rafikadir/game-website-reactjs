import { getAuth } from 'firebase/auth';
import React from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import app from './../../auth/firebase.config';


const WishList = () => {
    const auth = getAuth(app);
    const [user] = useAuthState(auth);
    return (
        <div>
            <h1>Hi</h1>
            <h4>Your Save games will be here</h4>
        </div>
    );
};

export default WishList;