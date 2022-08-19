import React from 'react';
import { useSelector } from "react-redux";

import DashLayout from "../../../components/dashboard/dashLayout";
import OrderBox from "../../../components/dashboard/order/order-box";

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
const InProgress = () => {
    const { user } = useSelector((state) => state.user);
    let username = user.name.split(" ")[0];
    return (
        <DashLayout>
            <OrderBox username={username}/>
            
        </DashLayout>
    );
}

export default InProgress;
