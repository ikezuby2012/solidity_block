import React from 'react';
import moment from "moment";
import { useSelector } from "react-redux";

//icons
import {
    AiOutlineStar, AiOutlineCheckSquare
} from "react-icons/ai";
import { MdOutlineCancelPresentation } from "react-icons/md";
import {
    BiTimeFive
} from "react-icons/bi";

const HomeTop = () => {
    const { user } = useSelector((state) => state.user);
    let username = user.name.split(" ")[0];

    return (
        <>
            <div className="dashHome">
                <div className="dashHome_hdText">
                    <h4>
                        <span>{moment().format("dddd")},</span>
                        <span>{moment().format("MMM")}&nbsp;</span>
                        <span>{new Date().getDate()}</span>
                    </h4>
                    <h2>Good Morning, {username}</h2>
                    <h5 className="blue-text">it's still early</h5>
                </div>

                <div className="dashHome-block appoint-grid">
                    <div className="dashHome-box">
                        <div className="dashHome-align">
                            <span className="blue">
                                <AiOutlineStar className="dashHome-align-icon blue" />
                            </span>
                            <div className="dashHome-text">
                                <h2>booking</h2>
                                <h4>no appointments</h4>
                            </div>
                        </div>
                    </div>

                    <div className="dashHome-box">
                        <div className="dashHome-align">
                            <span className="green">
                                <AiOutlineCheckSquare className="dashHome-align-icon" />
                            </span>
                            <div className="dashHome-text">
                                <h2>completed</h2>
                                <h4>no appointments</h4>
                            </div>
                        </div>
                    </div>

                    <div className="dashHome-box">
                        <div className="dashHome-align">
                            <span className="red">
                                <MdOutlineCancelPresentation className="dashHome-align-icon" />
                            </span>
                            <div className="dashHome-text">
                                <h2>cancelled</h2>
                                <h4>no appointment</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeTop;