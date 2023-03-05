import React from "react";
import { useSelector } from 'react-redux'
import { incrementQuantity, decrementQuantity, removeItem } from '../redux/cart/cartSlice'
import { useDispatch } from 'react-redux'

function CartItem({ id, image, name, price, quantity = 0 }) {
    const dispatch = useDispatch()
    return (

        <div className="md:flex items-center py-4 border-t border-b border-gray-200">
            <div className="h-full w-1/4">
                <img src={image} alt='item' className="w-full h-full object-center object-cover" />
            </div>
            <div className="md:pl-3 md:w-3/4 w-full">
                <div className="flex items-center justify-between w-full pt-1">
                    <p className="text-base font-black leading-none text-gray-800">{name}</p>
                    <div className='flex items-center justify-between pt-5 pr-6'>
                        <button 
                        className="p-1 bg-gray-300 rounded-l"
                        onClick={() => dispatch(decrementQuantity(id))}> - </button>
                        <p className="px-4">{quantity}</p>
                        <button
                        className="p-1 bg-gray-300 rounded-l" 
                        onClick={() => dispatch(incrementQuantity(id))}> + </button>
                    </div>
                </div>
                <div className="flex items-center justify-between pt-5 pr-6">
                    <div className="flex itemms-center">
                        <button
                            className="text-base leading-none w-fit py-1 bg-red-600 hover:bg-red-700 border rounded-lg text-white"
                            onClick={() => dispatch(removeItem(id))}>
                            Remove
                        </button>
                    </div>
                    <p className="text-base font-black leading-none text-gray-800">${price}</p>
                </div>
            </div>
        </div >

    )
}


function Cart() {

    const cart = useSelector((state) => state.cart);

    const getTotal = () => {
        let taxDue = 0;
        let totalPrice = 0;
        let finalPrice = 0;
        cart.cart.forEach(item => {
          totalPrice += item.price * item.quantity
        })
        taxDue = totalPrice * (7 / 100);
        finalPrice = totalPrice + taxDue
        return {totalPrice, taxDue, finalPrice}
      }

    return (
        <div className="container flex-1 mx-auto py-4">
            <div className="container flex-1 mx-auto px-4">
                <div className="flex md:flex-row flex-col justify-end" id="cart">
                    <p className="text-4xl font-black leading-9 text-gray-500">Shopping Cart</p>
                    <div className="lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen" id="scroll">
                        {cart.cart?.map((item) => (
                            <CartItem
                                key={item.id}
                                id={item.id}
                                image={item.image_url}
                                name={item.name}
                                price={item.price}
                                quantity={item.quantity}
                            />
                        ))}
                    </div>

                    <div className="xl:w-1/2 md:w-1/3 xl:w-1/4 w-full bg-yellow-100 h-full">
                        <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                            <div>
                                <p className="text-4xl font-black leading-9 text-gray-500">Summary</p>
                                <div className="flex items-center justify-between pt-16">
                                    <p className="text-base leading-none text-gray-800">Subtotal</p>
                                    <p className="text-base leading-none text-gray-800">${getTotal().totalPrice.toFixed(2)}</p>
                                </div>
                                <div className="flex items-center justify-between pt-5">
                                    <p className="text-base leading-none text-gray-800">Shipping</p>
                                    <p className="text-base leading-none text-gray-800">$10</p>
                                </div>
                                <div className="flex items-center justify-between pt-5">
                                    <p className="text-base leading-none text-gray-800">Tax</p>
                                    <p className="text-base leading-none text-gray-800">${getTotal().taxDue.toFixed(2)}</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                                    <p className="text-2xl leading-normal text-gray-800">Total </p>
                                    <p className="text-2xl font-bold leading-normal text-right text-gray-800">${getTotal().finalPrice.toFixed(2)}</p>
                                </div>
                                <button className="text-base leading-none w-full py-5 bg-yellow-500 hover:bg-yellow-700 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >

    );
}

export default Cart;