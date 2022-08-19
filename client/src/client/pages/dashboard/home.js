import React from 'react';
// import moment from "moment";
import { useSelector } from "react-redux";

import DashLayout from "../../components/dashboard/dashLayout";
import OrderBox from "../../components/dashboard/order/order-box";

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
const DashHome = () => {
    const { user } = useSelector((state) => state.user);
    let username = user.name.split(" ")[0];
    // console.log(username);

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
    );
}

export default DashHome;
