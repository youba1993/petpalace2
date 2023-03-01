import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {

  return (
    <div className='p-8'>
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Shop for your furry friend
          </h2>
          <p className="text-lg mb-4">
            Discover our wide selection of pet products and accessories.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <Link to="/products" className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
          Shop Now
        </Link>
      </div>
    </div>
    </div>
  );
}

export default HomePage;