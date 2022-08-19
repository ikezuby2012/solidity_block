import React, { useState } from 'react';
import DatePicker from "react-date-picker";

import { GoCalendar } from "react-icons/go";

import DashLayout from "../../../components/dashboard/dashLayout";
import HomeTop from "../../../components/dashboard/appointment/home-top";
import NoItems from "../../../components/dashboard/appointment/no-items";

const AppointHome = () => {
    const [date, setDate] = useState(new Date());
    const [isCalendarOpen, setCalendarOpen] = useState(true);

    return (
        <DashLayout>
            <HomeTop />
            <div className="appoint-table">
                <div className="appoint-table-hd">
                    <h5>appointment</h5>
                    <span>
                        <DatePicker
                            value={date}
                            isOpen={false}
                            onChange={(date) => setDate(date)}
                        />
                    </span>
                </div>
                <NoItems />
            </div>
        </DashLayout>
    );
}

export default AppointHome;
