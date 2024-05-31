import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Evolution from './pages/Evolution';
import MapPage from './pages/MapPage';
import Accessories from './pages/Accessories';
import NFTs from './pages/NFTs';
import BattleGround from './pages/BattleGround';
import LandingPage2 from './pages/LandingPage2';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage2 />} />
          <Route path='/nfts' element={<NFTs />} />
          <Route path='/login' element={<Login />} />
          <Route path='/evolution' element={<Evolution />} />
          <Route path='/mappage' element={<MapPage />} />
          <Route path='/accessories' element={<Accessories />} />
          <Route path='/battleground' element={<BattleGround />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
