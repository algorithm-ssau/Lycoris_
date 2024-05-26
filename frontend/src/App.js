// import Reactfrom from 'react';
import './styles/App.css';
import { CartPage, HomePage, PurchasePage, ShopItemsPage } from './pages';
import { HeaderNav } from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { ProfilePage } from './pages/ProfilePage';
import { RegistrationPage } from './pages/RegistrationPage';

function App() {  
  return (
    <BrowserRouter>
      <HeaderNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopItemsPage/>} />
        <Route path="/flower/:id" element={<PurchasePage/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="/registration" element={<RegistrationPage/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
