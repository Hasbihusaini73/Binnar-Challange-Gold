import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage';
import DetailProduk from './components/DetailProduk';
import HasilPencarian from './components/HasilPencarian';
import CariMobil from './components/CariMobil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/DetailProduk' element={<DetailProduk />} />
        <Route path='HasilPencarian' element={<HasilPencarian />} />
        <Route path='CariMobil' element={<CariMobil />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
