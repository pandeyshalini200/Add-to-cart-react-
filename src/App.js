import './App.css';
import Header from './Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartPage from './Components/Cart';
import Home from './Components/Home';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <div className='App'>
        <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/cart' element={<CartPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
