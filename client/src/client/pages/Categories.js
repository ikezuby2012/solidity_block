import React, { Fragment, useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

import Product1 from "../components/Assets/product1.png";
import Product2 from "../components/Assets/product2.png";
import Product3 from "../components/Assets/product3.png";
import Product4 from "../components/Assets/product4.png";
import Product5 from "../components/Assets/product5.png";
import Product6 from "../components/Assets/product6.png";
import Product7 from "../components/Assets/product7.png";
import Product8 from "../components/Assets/product8.png";

import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";
import linked_in from "../images/linked_in.svg";
import footerlogo from "../images/footer-logo.svg";

import HomeTop from "../components/HomeTop";
import "../../index.css";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Categories = () => {
    const [selected, setSelected] = useState("");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_GET_ALL_DRUGS}`);
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

    const products = [
        {
            id: 1,
            name: 'Acebrofylline',
            href: '#',
            imageSrc: Product1,
            imageAlt: "Front of men's Basic Tee in black.",
            price: 'NGN 7 850',
            color: '4.3',
        },
        {
            id: 2,
            name: 'Blood Test Strip',
            href: '#',
            imageSrc: Product2,
            imageAlt: "Front of men's Basic Tee in black.",
            price: 'NGN 7 950',
            color: '4.1',
        },
        {
            id: 3,
            name: 'Glucometer',
            href: '#',
            imageSrc: Product3,
            imageAlt: "Front of men's Basic Tee in black.",
            price: 'NGN 12 590',
            color: '4.3',
        },
        {
            id: 4,
            name: 'Insulin Syring',
            href: '#',
            imageSrc: Product4,
            imageAlt: "Front of men's Basic Tee in black.",
            price: 'NGN 6 000',
            color: '4.0',
        },
        {
            id: 5,
            name: 'Inhaler',
            href: '#',
            imageSrc: Product5,
            imageAlt: "Front of men's Basic Tee in black.",
            price: 'NGN 2 850',
            color: '4.0',
        },
        {
            id: 6,
            name: 'Plasminogen...',
            href: '#',
            imageSrc: Product6,
            imageAlt: "Front of men's Basic Tee in black.",
            price: 'NGN 27 850',
            color: '4.0',
        },
        {
            id: 7,
            name: 'Daibamit',
            href: '#',
            imageSrc: Product7,
            imageAlt: "Front of men's Basic Tee in black.",
            price: 'NGN 6 435',
            color: '3.9',
        },
        {
            id: 8,
            name: 'Metformin',
            href: '#',
            imageSrc: Product8,
            imageAlt: "Front of men's Basic Tee in black.",
            price: 'NGN 5 788',
            color: '3.9',
        },
    ]

    return (
        <>
            <HomeTop />
            <section className='mt-16 flex justify-center'>
                <div className='sidebar py-16 ml-8 pr-8 border-r-2'>
                    <p className='text-sm'>Home {">"} Shop {">"} </p>
                    <ul className='list-none mt-4 text-sm'>
                        <li className='text-gray-700 font-semibold py-1'>Categories</li>
                        <li className=' py-1.5 text-gray-500'>
                            Diabetes
                        </li>
                        <li className=' py-1.5 text-gray-500'>
                            Ulcer
                        </li>
                        <li className=' py-1.5 text-gray-500'>
                            Hypertension
                        </li>

                        <li className=' py-1.5 text-gray-500'>
                            Cardiovascular conditions
                        </li>
                        <li className=' py-1.5 text-gray-500'>
                            More
                        </li>
                    </ul>
                </div>

                <div>

                    <div className="bg-white">
                        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

                            <div className='mb-20 md:hidden'>
                                <Listbox value={selected} onChange={setSelected}>
                                    {({ open }) => (
                                        <>
                                            <Listbox.Label className="block text-sm font-bold text-blue-700">Categories</Listbox.Label>
                                            <div className="mt-1 relative">
                                                <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                    <span className="flex items-center">
                                                        {/* <img src={selected.avatar} alt="" className="flex-shrink-0 h-6 w-6 rounded-full" /> */}
                                                        <span className="ml-3 block truncate">Diabetes</span>
                                                    </span>
                                                    <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                                        <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                    </span>
                                                </Listbox.Button>

                                                <Transition
                                                    show={open}
                                                    as={Fragment}
                                                    leave="transition ease-in duration-100"
                                                    leaveFrom="opacity-100"
                                                    leaveTo="opacity-0"
                                                >
                                                    <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                                        <Listbox.Option
                                                            // key={person.id}
                                                            className={({ active }) =>
                                                                classNames(
                                                                    active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                                                    'cursor-default select-none relative py-2 pl-3 pr-9'
                                                                )
                                                            }
                                                        >
                                                            {({ selected, active }) => (
                                                                <>
                                                                    <div className="flex items-center">
                                                                        {/* <img src={person.avatar} alt="" className="flex-shrink-0 h-6 w-6 rounded-full" /> */}
                                                                        <span
                                                                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                                                        >
                                                                            Jah people
                                                                        </span>
                                                                    </div>

                                                                    {selected ? (
                                                                        <span
                                                                            className={classNames(
                                                                                active ? 'text-white' : 'text-indigo-600',
                                                                                'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                            )}
                                                                        >
                                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                        </span>
                                                                    ) : null}
                                                                </>
                                                            )}
                                                        </Listbox.Option>

                                                    </Listbox.Options>
                                                </Transition>
                                            </div>
                                        </>
                                    )}
                                </Listbox>
                            </div>


                            <div className="mt-6 mx-10 grid grid-cols-1 gap-y-14 gap-x-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                                {data.map((product) => (
                                    <div key={product.id} className="group relative">
                                        <div className="shadow-lg p-12 shadow-gray-500/50 w-full min-h-80 
                                bg-white aspect-w-1 aspect-h-1 rounded-md overflow-hidden 
                                group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                            <img
                                                src={`${process.env.REACT_APP_HOST}/${product.imageCover}`}
                                                alt={product.name}
                                                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                            />
                                        </div>
                                        <div className="mt-4 flex justify-between">
                                            <div>
                                                <h3 className="text-sm text-gray-700">
                                                    <Link to={`/product/${product.id}`}>
                                                        <span aria-hidden="true" className="absolute inset-0" />
                                                        {product.name}
                                                    </Link>
                                                </h3>
                                                <p className="mt-1 text-sm text-gray-500">{product.ratingAverage}</p>
                                            </div>
                                            <p className="text-sm font-medium text-gray-900">{product.price}</p>
                                        </div>
                                        <div className="mt-6">
                                            <button
                                                type="submit"
                                                className="group relative w-full flex justify-center 
                                        py-2 px-4 border border-transparent text-sm font-medium 
                                        rounded-md text-white bg-blue-600 hover:bg-blue-700 
                                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                            >
                                                Add to cart
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
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

export default Categories