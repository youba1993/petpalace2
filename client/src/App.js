import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
// import ProductDetailPage from './pages/ProductDetailPage';
// import CartPage from './pages/CartPage';
// import CheckoutPage from './pages/CheckoutPage';
import Login from './pages/Login';
import Signup from './pages/SignUp';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Header />
        
        <main className="container flex-1 mx-auto px-4">
          <Routes>
            <Route exact path="/" element={<HomePage />}/>
            <Route exact path="/products" element={<ProductListPage />}/>
            {/* <Route path="/products/:id" element={<ProductDetailPage />}/>
            <Route path="/cart" element={<CartPage />}/>           
            <Route path="/checkout" element={<CheckoutPage />}/> */}
            <Route path='/login' element={<Login />} />
            <Route path='/Signup' element={<Signup />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </div>
  );
}

export default App;