import React, { useState } from "react";

function Cart() {
    
    return (
        <div className="container flex-1 mx-auto py-4">
            <div className="container flex-1 mx-auto px-4">
                <div className="flex md:flex-row flex-col justify-end" id="cart">
                    <div className="lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen" id="scroll">

                        <div className="md:flex items-center py-4 border-t border-b border-gray-200">
                            <div className="h-full w-1/4">
                                <img src="https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2266427-center-1" alt className="w-full h-full object-center object-cover" />
                            </div>
                            <div className="md:pl-3 md:w-3/4 w-full">
                                <div className="flex items-center justify-between w-full pt-1">
                                    <p className="text-base font-black leading-none text-gray-800">Hill's Science Diet</p>
                                    <select className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none">
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                    </select>
                                </div>
                                <div className="flex items-center justify-between pt-5 pr-6">
                                    <div className="flex itemms-center">
                                        <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</p>
                                    </div>
                                    <p className="text-base font-black leading-none text-gray-800">$55.98</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="xl:w-1/2 md:w-1/3 xl:w-1/4 w-full bg-yellow-100 h-full">
                        <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                            <div>
                                <p className="text-4xl font-black leading-9 text-gray-800">Summary</p>
                                <div className="flex items-center justify-between pt-16">
                                    <p className="text-base leading-none text-gray-800">Subtotal</p>
                                    <p className="text-base leading-none text-gray-800">$55.98</p>
                                </div>
                                <div className="flex items-center justify-between pt-5">
                                    <p className="text-base leading-none text-gray-800">Shipping</p>
                                    <p className="text-base leading-none text-gray-800">$10</p>
                                </div>
                                <div className="flex items-center justify-between pt-5">
                                    <p className="text-base leading-none text-gray-800">Tax</p>
                                    <p className="text-base leading-none text-gray-800">$3</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                                    <p className="text-2xl leading-normal text-gray-800">Total</p>
                                    <p className="text-2xl font-bold leading-normal text-right text-gray-800">$68.98</p>
                                </div>
                                <button className="text-base leading-none w-full py-5 bg-yellow-500 hover:bg-yellow-700 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Cart;