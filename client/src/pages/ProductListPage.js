import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cart/cartSlice';


function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('/products')
            .then(response => response.json())
            .then(data => {
                setTimeout(() => {
                    setProducts(data);
                    setLoading(false);
                  }, 1000);
            });
    }, []);

    return (
        <div className="p-8 container mx-auto">
        <h1 className="text-2xl font-bold mb-4 ">Find everything your Pet needs at PetPalace</h1>
            {loading ? (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <div key={index} className="bg-white shadow-md rounded-md p-4">
                            <Skeleton height={120} />
                            <Skeleton height={16} width="80%" className="mt-2" />
                            <Skeleton height={16} width="60%" className="mt-1" />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white shadow-md rounded-md p-4">
                            <img src={product.image_url} alt={product.name} className="w-full h-48 object-cover rounded-md" />
                            <h2 className="text-gray-800 font-medium text-lg mt-2">{product.name}</h2>
                            <p className="text-gray-500 text-sm mt-1">{product.description}</p>
                            <div className="flex justify-between items-center mt-4">
                                <span className="text-gray-700 font-semibold">${product.price}</span>
                                <button
                                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={() => {
                                        const {id, name,image_url, price} = product
                                        dispatch(addToCart({
                                           id, name, image_url, price
                                        }))
                                    }}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ProductList;