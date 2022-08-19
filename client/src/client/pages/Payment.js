import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
import axios from "axios";

import HomeTop from "../components/HomeTop"

import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";
import linked_in from "../images/linked_in.svg";
import footerlogo from "../images/footer-logo.svg";

const Payment = () => {
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
    // console.log(data);
    let sumPrice
    // const text = data.reduce((a, b) => a = a + b.total, 0);
    // console.log(text);
    if (data.length !== 0) sumPrice = data.reduce((a, b) => a = a + b.total, 0);
    // const sumPrice = 10;


    const products = [
        {
            id: 1,
            name: 'Throwback Hip Bag',
            href: '#',
            color: 'Salmon',
            price: '$90.00',
            stock: 'Available',
            quantity: 1,
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
            imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
        },
        {
            id: 2,
            name: 'Medium Stuff Satchel',
            href: '#',
            color: 'Blue',
            price: '$32.00',
            stock: 'Available',
            quantity: 1,
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
            imageAlt:
                'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
        },
        // More products...
    ]
    const [count, setCount] = useState(0);
    const handleSubstrate = () => {
        setCount(count - 1);
    }
    const handleAdd = () => {
        setCount(count + 1);
    }

    const handleCardSelect = () => {
        setNum(num + 1)
    }
    const [num, setNum] = useState(0)
    const handleBankSelect = () => {
        setNum(num);
    }


    return (
        <>
            <HomeTop />
            <section className='md:flex block justify-around p-20 mx-auto'>
                <div className='mr-8 w-3/4'>
                    <div className="mt-10 sm:mt-0">
                        <div>

                            <div className="mt-5 md:mt-0 ">
                                <form action="#" method="POST">
                                    <div className='py-5 '>
                                        <p className='font-semibold text-lg'>DELIVERY INFORMATION</p>
                                        <p className='mt-2 text-sm'>Choose delivery method</p>
                                        <fieldset>
                                            <div className="mt-2  flex ">
                                                <div className="flex items-center mr-4">
                                                    <input
                                                        id="push-everything"
                                                        name="push-notifications"
                                                        type="radio"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="push-everything" className=" ml-3  text-sm font-medium text-gray-700">
                                                        Everything
                                                    </label>
                                                </div>
                                                <div className="r flex items-center">
                                                    <input
                                                        id="push-email"
                                                        name="push-notifications"
                                                        type="radio"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="push-email" className=" ml-3  text-sm font-medium text-gray-700">
                                                        Same as email
                                                    </label>
                                                </div>
                                            </div>
                                        </fieldset>
                                        <p className='mt-6 text-sm'>
                                            To pickup directly from the store, visit
                                            the following address:
                                        </p>
                                        <div className='mt-2 font-semibold'>
                                            <p>
                                                PharmaBolt Pharmacy
                                            </p>
                                            <p>
                                                15, Park Lane Avenue, G.R.A
                                            </p>
                                            <p>
                                                Enugu, Enugu State
                                            </p>
                                        </div>
                                        <p className='text-sm mt-2'>
                                            Please come with a valid reciept of your
                                            payment or transaction ID during pickup.
                                        </p>
                                    </div>

                                    <div className='mt-8'>
                                        <p className='font-semibold text-lg'>PAYMENT/BILLING</p>
                                        <p className='text-sm'>Choose a payment method</p>
                                    </div>
                                    <div className=" overflow-hidden ">
                                        <div className=" py-5 bg-white ">
                                            <div className="">

                                                <div>
                                                    <fieldset>
                                                        <div className="mt-2  flex ">
                                                            <div className="flex items-center mr-4">
                                                                <input
                                                                    id="push-everything"
                                                                    name="push-card"
                                                                    type="radio"
                                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                                />
                                                                <label className=" ml-3  text-sm font-medium text-gray-700">
                                                                    Debit/Credit card
                                                                </label>
                                                            </div>
                                                            <div className=" flex items-center">
                                                                <input
                                                                    id="push-bank"
                                                                    name="push-bank"
                                                                    type="radio"
                                                                    onClick={handleBankSelect}
                                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                                />
                                                                <label className=" ml-3  text-sm font-medium text-gray-700">
                                                                    Bank transfer
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </fieldset>
                                                </div>

                                                {/* {num===0 && <p>jummm</p>}
                                        {num===1 && <p>jummm</p>} */}
                                                <div>
                                                    <div className="col-span-6 sm:col-span-3 mt-4">
                                                        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                                                            Card number
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="cardNumber"
                                                            id="cardNumber"
                                                            placeholder='Enter the card number'
                                                            autoComplete="cardNumber"
                                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                        />
                                                    </div>

                                                    <fieldset>
                                                        <div className='flex '>
                                                            <div className=" mt-4 mr-4 w-full">
                                                                <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                                                                    CVV
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="cvv"
                                                                    placeholder='Enter CVV'
                                                                    id="cvv"
                                                                    autoComplete="family-name"
                                                                    className="mt-1 block w-full py-2 px-2 border
                                                                border-gray-300 bg-white rounded-md 
                                                                shadow-sm focus:outline-none 
                                                                focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                                />
                                                            </div>
                                                            <div className=" mt-4 w-full">
                                                                <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
                                                                    Expiry date
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="expiryDate"
                                                                    id="expiryDate"
                                                                    placeholder='MM/YY'
                                                                    autoComplete="expiryDate"
                                                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                                />
                                                            </div>
                                                        </div>
                                                    </fieldset>

                                                    <div className="col-span-6 mt-4 sm:col-span-4">
                                                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                            Email address
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="email-address"
                                                            id="email-address"
                                                            placeholder='Enter your email address'
                                                            autoComplete="email"
                                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                        />
                                                    </div>
                                                    <p className='text-sm'>

                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="mt-6">
                                            <a
                                                href="#"
                                                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                            >
                                                Checkout
                                            </a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='md:w-2/4 w-1/4 px-20'>
                    <div className="mt-8">
                        <div className="flow-root">
                            <ul role="list" className="-my-6 divide-y divide-gray-200">
                                {data.length !== 0 ? <>
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
                                                    </div>
                                                    <p className="font-semibold">{product.drug.price}</p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </> : <h3>
                                    add item to cart
                                </h3>}
                            </ul>
                        </div>
                    </div>
                    <div className='flex mt-8 justify-between mb-8'>
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

export default Payment