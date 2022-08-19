import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

import DashLayout from "../../components/dashboard/dashLayout";

const Profile = () => {
    return (
        <DashLayout>
            <div className='mt-6 bg-white m-6'>
                <p className='font-semibold px-6 pt-6 pb-2 border-b-2'>
                    Profile
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
        </DashLayout>
    );
}

export default Profile;
