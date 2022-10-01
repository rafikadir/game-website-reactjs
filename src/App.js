import './App.scss';
import Header from './Components/Header/Header';
import GameDetails from './Pages/GameDetails/GameDetails';
import Home from './Pages/Home/Home';
import { Routes, Route} from "react-router-dom";
import SignIn from './Components/SignIn/SignIn';
import WishList from './Pages/WishList/WishList';
import Require from './auth/Require';


function App() {
  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:slug" element={<GameDetails />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/wishlist" element={
            <Require>
              <WishList />
            </Require>
          } />
      </Routes>
    </>
  );
}

export default App;
