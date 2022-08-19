import React from 'react';

import HomeTop from "../components/HomeTop";

import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";
import linked_in from "../images/linked_in.svg";
import footerlogo from "../images/footer-logo.svg";

const Upload = () => {
    return (
        <>
            <HomeTop />
            <section className='mt-20 mx-auto w-9/12 pb-20'>
                <div>
                    <div className="mt-1 flex justify-center px-6 pt-20 pb-20 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                            <svg
                                className="mx-auto h-12 w-12 text-gray-400"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                            >
                                <path
                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <div className="flex text-sm text-gray-600">
                                <label
                                    htmlFor="file-upload"
                                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                >
                                    <span>Upload a file</span>
                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                        </div>
                    </div>
                    <p className="mt-2 text-sm text-center text-red-500">
                        Make sure the image is clear. not blurry!
                    </p>
                </div>

                <p className='text-center mt-8'>or</p>

                <div className='mt-8 mb-6'>
                    <div className="mt-1">
                        <textarea
                            id="about"
                            name="about"
                            rows={3}
                            className="shadow-sm focus:ring-indigo-500 pl-6 pt-4 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                            placeholder="Type your prescription here instead"
                            defaultValue={''}
                        />
                    </div>
                </div>

                <div className="mt-6">
                    <button
                        type="submit"
                        className="group relative w-full flex justify-center 
                    py-4 px-6 border border-transparent font-medium 
                    rounded-md text-white bg-blue-600 hover:bg-blue-700 
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Submit
                    </button>
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

export default Upload