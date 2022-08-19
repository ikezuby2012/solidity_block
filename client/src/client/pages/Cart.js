import React, { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { useSelector } from "react-redux";
import { Link, NavLink } from 'react-router-dom';
import axios from "axios";

import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";
import linked_in from "../images/linked_in.svg";
import footerlogo from "../images/footer-logo.svg";

import HomeTop from "../components/HomeTop";

const Cart = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const { user } = useSelector((state) => state.user);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            let token = JSON.parse(localStorage.getItem("token"));
            try {
                const res = await axios.get(`${process.env.REACT_APP_GET_ALL_USER_CART}/${user.id}`, {
                    headers: {
                        "Authorization": `bearer ${token}`
                    }
                });
                // console.log(res.data);
                setData(res.data.data);
                // console.log(data);
                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        };

        const timer = setTimeout(() => {
            fetchData();
        }, 50);

        return () => {
            clearTimeout(timer);
        }
    }, []);
    let sumPrice
    if (data.length !== 0) sumPrice = data.reduce((a, b) => a = a + b.total, 0);

    // const products = [
    //     {
    //         id: 1,
    //         name: 'Throwback Hip Bag',
    //         href: '#',
    //         color: 'Salmon',
    //         price: '$90.00',
    //         stock: 'Available',
    //         quantity: 1,
    //         imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    //         imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    //     },
    //     {
    //         id: 2,
    //         name: 'Medium Stuff Satchel',
    //         href: '#',
    //         color: 'Blue',
    //         price: '$32.00',
    //         stock: 'Available',
    //         quantity: 1,
    //         imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    //         imageAlt:
    //             'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    //     },
    //     {
    //         id: 3,
    //         name: 'Lebanese Stuff Satchel',
    //         href: '#',
    //         color: 'Orange',
    //         price: '$29.00',
    //         quantity: 1,
    //         stock: 'Out of stock',
    //         imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    //         imageAlt:
    //             'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    //     },
    // More products...
    // ]

    const [count, setCount] = useState(0);
    const handleSubstrate = () => {
        setCount(count - 1);
    }
    const handleAdd = () => {
        setCount(count + 1);
    }


    return (
        <>
            <HomeTop />
            <section className='mt-10 md:flex block justify-between w-10/12 mx-auto'>
                <div className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col  bg-white ">
                        <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                            <div className="flex items-start justify-between">
                                <p className=" text-sm text-gray-400"> Home {">"} Cart</p>

                            </div>

                            <div className="mt-8">
                                <div className="flow-root">
                                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                                        {data.map((product) => (
                                            <li key={product.id} className="flex py-6">
                                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                    <img
                                                        src={`${process.env.REACT_APP_HOST}/${product.drug.imageCover}`}
                                                        alt={product.drug.name}
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>

                                                <div className="ml-4 flex flex-1 flex-col">
                                                    <div>
                                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                                            <h3>
                                                                <Link to={`/product/${product.drug.id}`}> {product.drug.name} </Link>
                                                            </h3>
                                                            <p className="ml-4">{product.drug.price}</p>
                                                        </div>
                                                        <p className="mt-1 text-sm text-gray-500">
                                                            {/* {product.stock === "Available" && <span className='font-semibold text-green-600'>Available</span>} */}
                                                            {/* {product.stock === "Out of stock" && <span className='font-semibold text-red-600'>Out of stock</span>} */}
                                                            <span className='font-semibold text-green-600'>Available</span>
                                                        </p>
                                                    </div>
                                                    <div className="flex flex-1 items-end justify-between text-sm">
                                                        {/* <p className="text-gray-500">Qty {product.quantity}</p> */}
                                                        <div className="text-gray-500 border mt-4 rounded border-gray-300 py-2 px-4">
                                                            <span className='text-gray-300 pr-8'>Quantity</span>
                                                            <button
                                                                className='pr-4'
                                                                onClick={handleSubstrate}
                                                            >
                                                                -
                                                            </button>
                                                            <span className='pr-4'>
                                                                {product.quality}
                                                            </span>
                                                            <button
                                                                onClick={handleAdd}
                                                                className='pr-4'
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                        <div className="flex">
                                                            <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                                Remove
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                <div className='md:w-2/4 pt-20'>
                    <div className='flex justify-between mb-8'>
                        <p>Products:</p>
                        <p>NGN {sumPrice}</p>
                    </div>

                    <div className='flex justify-between mb-6'>
                        <p>Delivery(Enugu):</p>
                        <p>NGN 1,738</p>
                    </div>
                    <p className='text-sm text-blue-500 mb-4'>
                        <NavLink to="#">
                            Tap here to edit delivery address
                        </NavLink>
                    </p>
                    <div className="border-t border-gray-200 py-6 ">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <p>Total</p>
                            <p>NGN {sumPrice + 1738}</p>
                        </div>
                        {/* <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p> */}
                        <div className="mt-6">
                            <a
                                href="#"
                                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                            >
                                Checkout
                            </a>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                            {/* <p>
                   or{' '}
                   <button
                       type="button"
                       className="font-medium text-indigo-600 hover:text-indigo-500"
                       // onClick={() => setOpen(false)}
                   >
                       Continue Shopping<span aria-hidden="true"> &rarr;</span>
                   </button>
                   </p> */}
                        </div>
                    </div>
                </div>
            </section>
            <footer className="bg-[#0E2133] p-4 flex flex-col ">
                <div className="flex flex-col mt-[56px] md:flex-row md:justify-evenly">
                    <img src={footerlogo} className="w-[67.44px] h-[20px]" />
                    <div>
                        <h1 className="text-[#008BFF] text-md md:text-xl mt-[31px]">
                            OUR COMPANY
                        </h1>
                        <p className="text-gray-100 text-sm md:text-md mt-2">
                            PharmaBolt is a pharmaceutical service and <br /> delivery company
                            that provides customers with <br /> medication, consultancy
                            services and other <br /> related products when needed.
                        </p>

                        <div className="text-gray-100 mt-[18px] text-sm md:text-md">
                            <p className="md:mt-[29px]">Telephone: +234 818 5679 900</p>
                            <p className="md:mt-[29px]">E-mail: info@pharmabolt.com</p>
                            <p className="md:mt-[29px]">
                                Opening hours: 08:00AM - 10:00PM daily.
                            </p>
                        </div>
                    </div>
                    <div className="mt-10">
                        <h1 className="text-[#008BFF] text-md md:text-xl">
                            CUSTOMER SERVICE
                        </h1>

                        <section className="flex flex-row justify-between">
                            <div className="text-sm md:text-md">
                                <p className="mt-6 text-gray-100 ">Help</p>
                                <p className="mt-6 text-gray-100">Terms of Use</p>
                                <p className="mt-6 text-gray-100">Privacy Policy</p>
                                <p className="mt-6 text-gray-100">Contact us</p>
                                <p className="mt-6 text-gray-100">
                                    Shipping and delivery
                                </p>
                            </div>

                            <div className="md:ml-10 text-sm md:text-md">
                                <p className="mt-6 text-gray-100">My Accounts</p>
                                <p className="mt-6 text-gray-100">Order Status</p>
                                <p className="mt-6 text-gray-100">
                                    Payment and Vouchers
                                </p>
                                <p className="mt-6 text-gray-100">Cancellations</p>
                                <p className="mt-6 text-gray-100">Products</p>
                            </div>
                        </section>
                    </div>
                </div>

                <hr className="border border-[#E6E6E6] mt-[26px]" />

                <section className="flex flex-col justify-center items-center mt-6 md:flex-row-reverse md:justify-between">
                    <div className="flex flex-row">
                        <img src={facebook} alt="" className="mr-6" />
                        <img src={linked_in} alt="" className="mr-6" />
                        <img src={twitter} alt="" />
                    </div>
                    <p className=" text-xs text-gray-100 text-center mt-6 md:mt-0 md:text-sm">
                        Copyright ©2022 PharmaBolt. All Rights Reserved
                    </p>
                </section>
            </footer>
        </>
    )
}

export default Cart