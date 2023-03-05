import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../redux/users/userSlice';
import { useNavigate } from 'react-router-dom';

function Header() {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { username } = useSelector((state) => state.user)
  const logout = async (e) => {
    e.preventDefault()
    dispatch(userLogout())
    navigate("/")
  }
  
  const getTotalQuantity = () => {
    let total = 0
    cart.cart.forEach(item => {
      total += item.quantity
    })
    return total
  }

  return (
    <header className="bg-yellow-800 text-white">
      <div className="container mx-auto py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold">
            Pet Palace

          </Link>
          <span className='font-mono'>{username && "Welcome " + username}</span>
          <ul className="flex space-x-4">
            <li>
              <Link to="/products">Products</Link>
            </li>
            {username && (
              <ul className="flex space-x-4">
                <li>
                  <Link to="/cart">Cart <span className='bg-white rounded-md text-red-300'>{getTotalQuantity() || 0}</span></Link>
                </li>
                <li>
                  <Link to="/" className='text-sm text-red-400 ' onClick={(e) => logout(e)}>Logout</Link>
                </li>
              </ul>
            )}
            {!username && (
              <ul className="flex space-x-4">
                <li>
                  <Link to="/login">Sign In</Link>
                </li>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
              </ul>
            )

            }

          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;