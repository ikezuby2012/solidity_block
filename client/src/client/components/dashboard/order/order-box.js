import React, { useState, useEffect } from 'react';
import moment from "moment";

//icons
import {
    AiOutlineStar, AiOutlineCheckSquare
} from "react-icons/ai";
import { MdOutlineCancelPresentation } from "react-icons/md";
import {
    BiTimeFive
} from "react-icons/bi";

const OrderBox = ({ username }) => {

    const [greeting, setGreeting] = useState("Good Day");

    useEffect(() => {
        const generateGreeting = () => {
            let curr = moment().format("HH");
            let time = parseInt(curr);
            console.log(time);
            // if (time === 23) {
            //     console.log("its here");
            //     setGreeting("it's time");
            // }
            if (time >= 3 || time < 12) {
                setGreeting("Good Morning");
            }
            if (time >= 12 || time < 16) {
                setGreeting("Good Afternoon");
            }
            if (time >= 16 || time < 3) {
                // console.log("e supose")
                setGreeting("Good Evening");
            }
        }
        const timer = setTimeout(() => {
            generateGreeting();
        }, 500)

        return () => {
            clearTimeout(timer);
        }
    }, [greeting]);


    // if (curr >= 3 && curr < 12) {
    //     setGreeting("Good Morning");
    // }
    // if (curr >= 12 && curr < 16) {
    //     setGreeting("Good Afternoon");
    // }
    // if (curr >= 16 && curr < 3) {
    //     setGreeting("Good Evening");
    // }


    return (
        <>
            <div className="dashHome">
                <div className="dashHome_hdText">
                    <h4>
                        <span>{moment().format("dddd")},</span>
                        <span>{moment().format("MMM")}&nbsp;</span>
                        <span>{new Date().getDate()}</span>
                    </h4>
                    <h2>{greeting}, {username}</h2>
                </div>
                <div className="dashHome-block">
                    <div className="dashHome-box">
                        <div className="dashHome-align">
                            <span className="blue">
                                <AiOutlineStar className="dashHome-align-icon blue" />
                            </span>
                            <div className="dashHome-text">
                                <h2>To-do</h2>
                                <h4>3 orders</h4>
                            </div>
                        </div>
                    </div>

                    <div className="dashHome-box">
                        <div className="dashHome-align">
                            <span className="yellow">
                                <BiTimeFive className="dashHome-align-icon" />
                            </span>
                            <div className="dashHome-text">
                                <h2>in progress</h2>
                                <h4>4 orders</h4>
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
                                <h4>6 orders</h4>
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
                                <h4>3 orders</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OrderBox;
