import './App.scss';
import Header from './Components/Header/Header';
import GameDetails from './Pages/GameDetails/GameDetails';
import Home from './Pages/Home/Home';
import { Routes, Route} from "react-router-dom";


function App() {
  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:slug" element={<GameDetails />} />
      </Routes>
    </>
  );
}

export default App;
