import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

import DashLayout from "../components/dashboard/dashLayout";
import OrderBox from "../components/dashboard/order/order-box";

const orders = [
    {
        date: "Monday, April 4, 2022 10:09 PM",
        items: [
            {
                name: "inhaler"
            }
        ],
        delivery_type: "home",
        amount: 1000,
        status: "to-do"
    },
    {
        date: "Saturday, April 17, 2022 9:09 PM",
        items: [
            {
                name: "aceptomin"
            }, {
                name: "lympthomin"
            }
        ],
        delivery_type: "home",
        amount: 14000,
        status: "cancelled"
    },

    {
        date: "Sunday, April 4, 2022 10:11 AM",
        items: [
            {
                name: "metformin"
            }, {
                name: "inhaler"
            },
            {
                name: "amthaphine"
            }
        ],
        delivery_type: "pickup",
        amount: 27000,
        status: "in progress"
    },

    {
        date: "Sunday, April 4, 2022 10:11 AM",
        items: [
            {
                name: "glucometer"
            },
            {
                name: "inhaler"
            },
            {
                name: "amthaphine"
            },
            ,
            {
                name: "inhaler"
            }
        ],
        delivery_type: "home",
        amount: 27000,
        status: "completed"
    }
]
const Profile = () => {
    const { user } = useSelector((state) => state.user);
    let username = user.name.split(" ")[0];
    return (
        <DashLayout>
            <>
                <OrderBox username={username} />
                <div className="dashHome-order">
                    <div className="dashHome-table">
                        <div className="dashHome-order_block">
                            <ul>
                                <li className="dashHome-list hd">
                                    <span>date-time</span>
                                    <span>order items</span>
                                    <span>amount</span>
                                    <span>delivery type</span>
                                    <span style={{ marginLeft: "auto" }}>status</span>
                                </li>
                            </ul>
                            {
                                orders.map((el, i) => (
                                    <ul>
                                        <li className="dashHome-list" key={i}>
                                            <span>
                                                <span className="dashHome-des" style={{ marginRight: "auto" }}>time</span>
                                                {el.date.split(" ")[0]}-{el.date.split(" ")[4]}&nbsp;{el.date.split(" ")[5]}
                                            </span>
                                            <span>
                                                <span className="dashHome-des" style={{ marginRight: "auto" }}>order -items</span>
                                                {el.items[0].name}  {el.items.length === 1 ? "" : ` +${el.items.length} more`}
                                            </span>
                                            <span>
                                                <span className="dashHome-des" style={{ marginRight: "auto" }}>amount</span>
                                                NGN {el.amount}
                                            </span>
                                            <span style={{ fontSize: "" }}>
                                                <span className="dashHome-des" style={{ marginRight: "auto" }}>delivery type</span>
                                                {el.delivery_type}
                                            </span>
                                            <span>
                                                <span className="dashHome-des">status</span>
                                                <span className={el.status} style={{ marginLeft: "auto" }}>
                                                    {el.status}
                                                </span>
                                            </span>
                                        </li>
                                    </ul>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </>
        </DashLayout>
    )
}

export default Profile;

    //  <section className='mt-16 md:flex block md:relative w-full'>
    //         <div className='md:fixed top-0 left-0 md:py-16 ml-8 pr-8  bg-white md:h-screen'>
    //             <p className='text-sm'>
    //                 <Link to="/">
    //                     Home
        //             </Link> {">"}
        //             <Link to="profile">
        //                 Profile
        //             </Link> {">"}
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
        //                 Recent Orders
        //             </p>

        //             <div className='mt-6 mb-12 '>
        //                 <div className='px-6 pb-6'>

        //                     <div className='mt-6 border-b-2 pb-2 md:border-none md:grid md:grid-cols-5 md:gap-4 block'>
        //                         <p className='font-bold text-sm'>
        //                             Order Number
        //                         </p>
        //                         <p className='font-bold text-sm'>
        //                             Date {"&"} Time
        //                         </p>
        //                         <p className='font-bold text-sm'>
        //                             Order items
        //                         </p>
        //                         <p className='font-bold text-sm'>
        //                             Total amount
        //                         </p>
        //                         <p className='font-bold text-sm'>
        //                             Status
        //                         </p>
        //                     </div>

        //                     <div className='mt-6 border-b-2 pb-2 md:border-none md:grid md:grid-cols-5 md:gap-4 block'>
        //                         <p className=' text-sm'>
        //                             #345
        //                         </p>
        //                         <p className=' text-sm'>
        //                             April 6-17-20
        //                         </p>
        //                         <p className=' text-sm'>
        //                             3x Inhaler, 1x Metformin, 1x Glucometer
        //                         </p>
        //                         <p className=' text-sm'>
        //                             NGN 7 890
        //                         </p>
        //                         <p className='text-blue-700  text-sm'>
        //                             Shipped
        //                         </p>
        //                     </div>

        //                     <div className='mt-6 border-b-2 pb-2 md:border-none md:grid md:grid-cols-5 md:gap-4 block'>
        //                         <p className=' text-sm'>
        //                             #344
        //                         </p>
        //                         <p className=' text-sm'>
        //                             April 2-17-20
        //                         </p>
        //                         <p className=' text-sm'>
        //                             2x Inhaler, 1x Metformin, 1x Glucometer
        //                         </p>
        //                         <p className=' text-sm'>
        //                             NGN 25 890
        //                         </p>
        //                         <p className=' text-green-700 text-sm'>
        //                             Fulfilled
        //                         </p>
        //                     </div>

        //                     <div className='mt-6 border-b-2 pb-2 md:border-none md:grid md:grid-cols-5 md:gap-4 block'>
        //                         <p className=' text-sm'>
        //                             #343
        //                         </p>
        //                         <p className=' text-sm'>
        //                             March 26-16-03
        //                         </p>
        //                         <p className=' text-sm'>
        //                             1x Metformin
        //                         </p>
        //                         <p className=' text-sm'>
        //                             NGN 3 500
        //                         </p>
        //                         <p className='text-green-700 text-sm'>
        //                             Fulfilled
        //                         </p>
        //                     </div>

        //                     <div className='mt-6 border-b-2 pb-2 md:border-none md:grid md:grid-cols-5 md:gap-4 block'>
        //                         <p className=' text-sm'>
        //                             #342
        //                         </p>
        //                         <p className=' text-sm'>
        //                             March 2-17-20
        //                         </p>
        //                         <p className=' text-sm'>
        //                             Inhaler + 4x Glucometer
        //                         </p>
        //                         <p className=' text-sm'>
        //                             NGN 13 400
        //                         </p>
        //                         <p className='text-green-700 text-sm'>
        //                             Fulfilled
        //                         </p>
        //                     </div>

        //                     <div className='mt-6 border-b-2 pb-2 md:border-none md:grid md:grid-cols-5 md:gap-4 block'>
        //                         <p className=' text-sm'>
        //                             #341
        //                         </p>
        //                         <p className=' text-sm'>
        //                             Feb 16 - 12:45
        //                         </p>
        //                         <p className=' text-sm'>
        //                             2x Acetopin
        //                         </p>
        //                         <p className=' text-sm'>
        //                             NGN 5 000
        //                         </p>
        //                         <p className='text-green-700 text-sm'>
        //                             Fulfilled
        //                         </p>
        //                     </div>

        //                     <div className='mt-6 border-b-2 pb-2 md:border-none md:grid md:grid-cols-5 md:gap-4 block'>
        //                         <p className=' text-sm'>
        //                             #340
        //                         </p>
        //                         <p className=' text-sm'>
        //                             Jan 2 17:20
        //                         </p>
        //                         <p className=' text-sm'>
        //                             Glucometer
        //                         </p>
        //                         <p className=' text-sm'>
        //                             NGN 13 400
        //                         </p>
        //                         <p className='text-red-500 text-sm'>
        //                             Cancelled
        //                         </p>
        //                     </div>



        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // // </section>