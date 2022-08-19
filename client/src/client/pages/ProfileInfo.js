import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

import DashLayout from "../components/dashboard/dashLayout";

const ProfileInfo = () => {
    const { user } = useSelector((state) => state.user);
    let username = user.name.split(" ")[0];
    return (
        <DashLayout>
            <div className='w-full bg-gray-100  pt-6 pb-6'>
             <h2 className='text-3xl font-bold m-6'>Hello {username}</h2>

            <div className='mt-6 bg-white m-6'>
                <p className='font-semibold px-6 pt-6 pb-2 border-b-2'>
                     Personal information
                 </p>
            <div className="mt-5 md:mt-0 md:col-span-2">
                <form action="#">
                    <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 bg-white sm:p-6">
                            <div className="my-6">
                                <div className="my-6">
                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                        Full name
                                    </label>
                                    <input
                                        type="text"
                                        name="first-name"
                                                id="first-name"
                                                placeholder='enter full name'
                                        autoComplete="given-name"
                                        className="mt-1 block w-full py-2 px-3 border border-gray-500 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>

                                <div className="col-span-6 my-6 sm:col-span-4">
                                    <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                        Email address
                                    </label>
                                    <input
                                        type="text"
                                        name="email-address"
                                        id="email-address"
                                                autoComplete="email"
                                                placeholder='enter email address'
                                        required
                                        className="mt-1 block w-full py-2 px-3 border border-gray-500 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>

                                <div className="col-span-6 my-6 sm:col-span-3">
                                    <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">
                                        Phone number
                                    </label>
                                    <input
                                        type="text"
                                        name="phone-number"
                                        id="phone-number"
                                        placeholder='Enter your phone number'
                                        autoComplete="phone number"
                                        className="mt-1 block w-full py-2 px-3 border border-gray-500 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>

                                <div className="col-span-6 my-6 sm:col-span-3">
                                    <label htmlFor="delivery-address" className="block text-sm font-medium text-gray-700">
                                        Delivery address
                                    </label>
                                    <input
                                        type="text"
                                        name="delivery-address"
                                        id="delivery-address"
                                        placeholder='Enter your prefered location'
                                        autoComplete="phone number"
                                        className="mt-1 block w-full py-2 px-3 border border-gray-500 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>

                                <div className="col-span-6 my-6 sm:col-span-3">
                                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                        City {"*"}
                                    </label>
                                    <input
                                        type="text"
                                        name="city"
                                        id="city"
                                        placeholder='Federal Capital Territory'
                                        autoComplete="phone number"
                                        className="mt-1 block w-full py-2 px-3 border border-gray-500 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>

                                <div className="col-span-6 my-6 sm:col-span-3">
                                    <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                                        State {"*"}
                                    </label>
                                    <input
                                        type="text"
                                        name="state"
                                        id="state"
                                        placeholder='Federal Capital Territory'
                                        autoComplete="phone number"
                                        className="mt-1 block w-full py-2 px-3 border border-gray-500 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="pb-6 px-6">
                            <button
                                type="submit"
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-500 bg-gray-100 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </form>
                    </div>
                    </div>
                    </div>
        </DashLayout >
    )
}

export default ProfileInfo;

// {/* <section className='mt-16 md:flex block md:relative w-full'>
        // <div className='md:fixed top-0 left-0 md:py-16 ml-8 pr-8  bg-white md:h-screen'>
        //     <p className='text-sm'>
        //         <Link to="/">
        //             Home
        //         </Link> {">"} 
        //         <Link to="profile">
        //             Profile    
        //         </Link> {">"} 
    //         </p>
            
    //         <ul className='list-none mt-4 text-sm hidden md:block'>
    //             <li className='text-gray-700 font-semibold py-4'>Profile</li>
    //             <li className=' py-4 text-gray-500'>
    //                 Recent orders 
    //             </li>
    //             <li className=' py-4 text-gray-500'>
    //                 Personal information
    //             </li>
    //             <li className=' py-4 text-gray-500'>
    //                 Settings
    //             </li>                                           
    //         </ul>
    //     </div>

    //     <div className='w-full md:ml-60 bg-gray-100  pt-6 pb-6'>
    //         <h2 className='text-3xl	font-bold m-6'>Hello Kingsley</h2>

    //         <div className='mt-6 bg-white m-6'>
    //             <p className='font-semibold px-6 pt-6 pb-2 border-b-2'>
    //                 Personal information
    //             </p>

    //             <div className='mt-6 mb-12 '>
    //                 <div className='px-6 pt-4 pb-6'>
    //                 <div className="mt-10 sm:mt-0">
    //                     <div className="">
                            
    //                     <div className="mt-5 md:mt-0 md:col-span-2">
    //                         <form action="#" method="POST">
    //                             <div className="shadow overflow-hidden sm:rounded-md">
    //                                 <div className="px-4 py-5 bg-white sm:p-6">
    //                                     <div className="my-6">
    //                                         <div className="my-6">
    //                                             <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
    //                                                 Full name
    //                                             </label>
    //                                             <input
    //                                                 type="text"
    //                                                 name="first-name"
    //                                                 id="first-name"
    //                                                 autoComplete="given-name"
    //                                                 className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    //                                             />
    //                                         </div>                                            

    //                                         <div className="col-span-6 my-6 sm:col-span-4">
    //                                             <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
    //                                                 Email address
    //                                             </label>
    //                                             <input
    //                                                 type="text"
    //                                                 name="email-address"
    //                                                 id="email-address"
    //                                                 autoComplete="email"
    //                                                 required
    //                                                 className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    //                                             />
    //                                         </div>

    //                                         <div className="col-span-6 my-6 sm:col-span-3">
    //                                             <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">
    //                                                 Phone number
    //                                             </label>
    //                                             <input
    //                                                 type="text"
    //                                                 name="phone-number"
    //                                                 id="phone-number"
    //                                                 placeholder='Enter your phone number'
    //                                                 autoComplete="phone number"
    //                                                 className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    //                                             />
    //                                         </div>

    //                                         <div className="col-span-6 my-6 sm:col-span-3">
    //                                             <label htmlFor="delivery-address" className="block text-sm font-medium text-gray-700">
    //                                                 Delivery address
    //                                             </label>
    //                                             <input
    //                                                 type="text"
    //                                                 name="delivery-address"
    //                                                 id="delivery-address"
    //                                                 placeholder='Enter your prefered location'
    //                                                 autoComplete="phone number"
    //                                                 className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    //                                             />
    //                                         </div>

    //                                         <div className="col-span-6 my-6 sm:col-span-3">
    //                                             <label htmlFor="city" className="block text-sm font-medium text-gray-700">
    //                                                 City {"*"}
    //                                             </label>
    //                                             <input
    //                                                 type="text"
    //                                                 name="city"
    //                                                 id="city"
    //                                                 placeholder='Federal Capital Territory'
    //                                                 autoComplete="phone number"
    //                                                 className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    //                                             />
    //                                         </div>

    //                                         <div className="col-span-6 my-6 sm:col-span-3">
    //                                             <label htmlFor="state" className="block text-sm font-medium text-gray-700">
    //                                                 State {"*"}
    //                                             </label>
    //                                             <input
    //                                                 type="text"
    //                                                 name="state"
    //                                                 id="state"
    //                                                 placeholder='Federal Capital Territory'
    //                                                 autoComplete="phone number"
    //                                                 className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    //                                             />
    //                                         </div>
                                                                                                                                                                                                                            
    //                                     </div>
    //                                 </div>
    //                                 <div className="pb-6 px-6">
    //                                     <button
    //                                         type="submit"
    //                                         className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-500 bg-gray-100 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    //                                     >
    //                                         Save Changes
    //                                     </button>
    //                                 </div>
    //                             </div>
    //                         </form>
    //                     </div>
    //                     </div>
    //                 </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </section> */}