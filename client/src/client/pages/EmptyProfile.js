import React from 'react';
import { Link } from 'react-router-dom';

const EmptyProfile = () => {
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
                        Recent Orders
                    </p>

                    <div className='mt-6 mb-12 flex justify-center text-center align-center'>
                        <div className='my-10'>
                            <p className='font-bold'>
                                No orders to track
                            </p>
                            <p className='pt-4 text-sm'>
                                You have not placed any orders yet
                            </p>
                            <p className='text-sm'>
                                Place an order tokeep track
                            </p>
                            <div className='mt-6'>
                                <Link
                                    to="/shop"
                                    className='text-white text-sm px-12 py-2 mt-6 bg-blue-600'
                                >
                                    Shop now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EmptyProfile