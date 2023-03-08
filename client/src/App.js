import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
import Cart from './components/Cart';
import CheckoutPage from './pages/CheckoutPage';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import { useSelector } from 'react-redux';


function App() {

  const { username } = useSelector((state)=>state.user)
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Header />
        
        <main className="container flex-1 mx-auto px-4">
          <Routes>
            <Route exact path="/" element={<HomePage />}/>
            <Route exact path="/products" element={<ProductListPage />}/>
            {username && <Route path="/cart" element={<Cart />}/>}
            <Route path='/login' element={<Login />} />
            <Route path='/Signup' element={<Signup />} />
            <Route path="/checkout" element={<CheckoutPage />}/>      

          </Routes>
        </main>

        <Footer />
      </Router>
    </div>
  );
}

export default App;