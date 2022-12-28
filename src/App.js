
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CariMobil from './components/CariMobil';
import HasilPencarian from './components/HasilPencarian';
import DetailProduk from './components/DetailProduk';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route exact path='/DetailProduk/' element={<DetailProduk />} />
        <Route path='/DetailProduk/:id' element={<DetailProduk />} />
        <Route path='HasilPencarian' element={<HasilPencarian />} />
        <Route path='CariMobil' element={<CariMobil />} /> 
      </Routes>
    </BrowserRouter> 
    
    
  );
}

export default App;
