import React from 'react';
import { Link } from 'react-router-dom';

const ProfileSettings = () => {
    return (
        <section className='mt-16 md:flex block md:relative w-full'>
            <div className='md:fixed top-0 left-0 md:py-16 ml-8 pr-8  bg-white md:h-screen'>
                <p className='text-sm'>
                    <Link to="/">
                        Home
                    </Link> {">"}
                    <Link to="profile">
                        Profile
                    </Link> {">"}
                </p>

                <ul className='list-none mt-4 text-sm hidden md:block'>
                    <li className='text-gray-700 font-semibold py-4'>Profile</li>
                    <li className=' py-4 text-gray-500'>
                        Recent orders
                    </li>
                    <li className=' py-4 text-gray-500'>
                        Personal information
                    </li>
                    <li className=' py-4 text-gray-500'>
                        Settings
                    </li>
                </ul>
            </div>

            <div className='w-full md:ml-60 bg-gray-100  pt-6 pb-6'>
                <h2 className='text-3xl	font-bold m-6'>Hello Kingsley</h2>

                <div className='mt-6 bg-white m-6'>
                    <p className='font-semibold px-6 pt-6 pb-2 border-b-2'>
                        Settings
                    </p>

                    <div className='mt-6 mb-12 '>
                        <div className='px-6 pt-2 pb-6'>
                            <div className="mt-10 sm:mt-0">
                                <div className="">

                                    <div className="mt-5 md:mt-0 md:col-span-2">
                                        <form action="#" method="POST">
                                            <div className="">
                                                <div className='flex justify-between mt-6 items-center border-b-2 pb-2'>
                                                    <p>Notifications</p>
                                                    <p></p>
                                                </div>

                                                <div className='flex justify-between mt-6 items-center border-b-2 pb-2'>
                                                    <p>Change password</p>

                                                </div>

                                                <div className='flex justify-between mt-6 items-center border-b-2 pb-2'>
                                                    <p>Language</p>
                                                    <p>ENGLISH</p>
                                                </div>

                                                <div className=" mt-4 pb-6 ">
                                                    <button
                                                        type="submit"
                                                        className="inline-flex justify-center  border border-transparent shadow-sm text-sm font-medium rounded-md text-red-500 "
                                                    >
                                                        Logout
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProfileSettings