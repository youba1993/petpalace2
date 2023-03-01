import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

  const logout = async (e) =>{
      e.preventDefault()
      const response = await fetch('/logout', {
        method: 'DELETE'
    });
    const data = await response.json();
    console.log(data)
  }
  
  return (
    <header className="bg-yellow-800 text-white">
      <div className="container mx-auto py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold">
            Pet Palace
          </Link>

          <ul className="flex space-x-4">
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/login">Sign In</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/" onClick={(e)=>logout(e)}>Logout</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;