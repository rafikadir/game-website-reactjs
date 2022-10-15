import React from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import GameDetails from './Pages/GameDetails/GameDetails';
import Home from './Pages/Home/Home';
import { Routes, Route} from "react-router-dom";
import SignIn from './Components/SignIn/SignIn';
import RequireAuth from './Components/auth/RequireAuth';
import Account from './Pages/Account/Account';

function App() {

  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:slug" element={<GameDetails />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/account" element={ 
              <RequireAuth>
                <Account/>
              </RequireAuth>
            } />
          <Route path="/wishlist" element={ 
            <RequireAuth>
              <Account/>
            </RequireAuth>
          } />

          <Route path="/favourite" element={ 
            <RequireAuth>
              <Account/>
            </RequireAuth>}
          />
      </Routes>
    </>
  );
}

export default App;
