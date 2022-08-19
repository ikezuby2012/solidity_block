import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";

//icons 
import {
    AiOutlineShoppingCart, AiOutlineMail, AiFillSetting, AiOutlineStar, AiOutlineCheckSquare
} from "react-icons/ai";
import { GoCalendar } from "react-icons/go";
import {
    BiChevronUp, BiChevronDown, BiTimeFive
} from "react-icons/bi";
import { MdOutlineCancelPresentation } from "react-icons/md";

import HeaderTop from "./headerTop";

const DashLayout = ({ children }) => {
    const isAuthenticated = localStorage.getItem("token");
    const { user } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const [showOrderDd, setShowOrderDd] = useState(false);
    const [showAppointDd, setShowAppointDd] = useState(false);

    const toggleOrderDD = () => setShowOrderDd(!showOrderDd);
    const toggleAppointDD = () => setShowAppointDd(!showAppointDd);

    if (!isAuthenticated || user.name === undefined) {
        navigate("/login");
    }
    // console.log(user);
    // if (user.role === "user") {
    //     navigate("/profile");
    // }


    return (
        <section className="dashboard dash-container">
            <HeaderTop name={user.name} />
            <div className="content">
                {user.name === undefined && navigate("login")}
                {user.role === "user" && <nav className="side-bar">
                    <ul className="dashboard-sideNav">
                        <li className="dashboard-sideNav-item dp-none">
                            <span
                                style={
                                    {
                                        fontSize: "18px",
                                        color: "black",
                                        textTransform: "capitalize",
                                        paddingLeft: ".9rem"
                                    }
                                }
                            >
                                profile
                            </span>
                        </li>

                        <li className="dashboard-sideNav-item">
                            <NavLink className="dashboard-sideNav-link" activeclassname="dashboard-sideNav-link--active" to="/dashboard/home">
                                <span className="dashboard-sideNav_span">
                                    <span><GoCalendar className="dashboard-sideNav-logo" /></span>
                                    <span style={{ fontSize: "14px" }}>recent orders</span>
                                </span>
                                {/* <button className="" onClick={toggleAppointDD}>
                                    {showAppointDd ? <BiChevronDown /> : <BiChevronUp />}
                                </button> */}
                            </NavLink>
                        </li>
                        <li className="dashboard-sideNav-item">
                            <NavLink className="dashboard-sideNav-link" activeclassname="dashboard-sideNav-link--active" to="/profile/information">
                                <span className="dashboard-sideNav_span">
                                    <span><AiOutlineMail className="dashboard-sideNav-logo" /></span>
                                    <span style={{ fontSize: "14px" }}>personal information</span>
                                </span>
                            </NavLink>
                        </li>
                        <li className="dashboard-sideNav-item">
                            <NavLink className="dashboard-sideNav-link" activeClassName="dashboard-sideNav-link--active" to="/dashboard/setting">
                                <span className="dashboard-sideNav_span">
                                    <span><AiFillSetting className="dashboard-sideNav-logo" /></span>
                                    <span style={{ fontSize: "14px" }}>settings</span>
                                </span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>}

                {user.role === "admin" && <nav className="side-bar">
                    <ul className="dashboard-sideNav">
                        <li className="dashboard-sideNav-item">
                            <NavLink className="dashboard-sideNav-link dashboard-sideNav-item--active" activeclassname="dashboard-sideNav-link--active" to="/dashboard/home">
                                <span className="dashboard-sideNav_span">
                                    <span><AiOutlineShoppingCart className="dashboard-sideNav-logo" /></span>
                                    <span>orders</span>
                                </span>
                                <button className="" onClick={toggleOrderDD}>
                                    {showOrderDd ? <BiChevronDown /> : <BiChevronUp />}
                                </button>
                            </NavLink>
                        </li>
                        <ul className={`dashboard-dropdown ${showOrderDd && "ds-block flipInY"}`}>
                            <li className="dropdown-item">
                                <NavLink className="dropdown-link" to="/dashboard/order/todo">
                                    <span>
                                        <AiOutlineStar />
                                    </span>
                                    <span>to-do</span>
                                </NavLink>
                            </li>

                            <li className="dropdown-item">
                                <NavLink className="dropdown-link" to="/dashboard/order/in-progress">
                                    <span>
                                        <BiTimeFive />
                                    </span>
                                    <span>in progress</span>
                                </NavLink>
                            </li>

                            <li className="dropdown-item">
                                <NavLink className="dropdown-link" to="/dashboard/order/completed">
                                    <span>
                                        <AiOutlineCheckSquare />
                                    </span>
                                    <span>completed</span>
                                </NavLink>
                            </li>

                            <li className="dropdown-item">
                                <NavLink className="dropdown-link" to="/dashboard/order/cancelled">
                                    <span>
                                        <MdOutlineCancelPresentation />
                                    </span>
                                    <span>cancelled</span>
                                </NavLink>
                            </li>
                        </ul>
                        <li className="dashboard-sideNav-item">
                            <NavLink className="dashboard-sideNav-link" activeclassname="dashboard-sideNav-link--active" to="/dashboard/appointment">
                                <span className="dashboard-sideNav_span">
                                    <span><GoCalendar className="dashboard-sideNav-logo" /></span>
                                    <span>appointment</span>
                                </span>
                                <button className="" onClick={toggleAppointDD}>
                                    {showAppointDd ? <BiChevronDown /> : <BiChevronUp />}
                                </button>
                            </NavLink>
                        </li>
                        <ul className={`dashboard-dropdown ${showAppointDd && "ds-block flipInY"}`}>
                            <li className="dropdown-item">
                                <NavLink className="dropdown-link" to="/dashboard/appointment/booking">
                                    <span>
                                        <AiOutlineStar />
                                    </span>
                                    <span>booking</span>
                                </NavLink>
                            </li>

                            <li className="dropdown-item">
                                <NavLink className="dropdown-link" to="/dashboard/appointment/completed">
                                    <span>
                                        <AiOutlineCheckSquare />
                                    </span>
                                    <span>completed</span>
                                </NavLink>
                            </li>

                            <li className="dropdown-item">
                                <NavLink className="dropdown-link" to="/dashboard/appointment/cancelled">
                                    <span>
                                        <MdOutlineCancelPresentation />
                                    </span>
                                    <span>cancelled</span>
                                </NavLink>
                            </li>
                        </ul>
                        <li className="dashboard-sideNav-item">
                            <NavLink className="dashboard-sideNav-link" activeclassname="dashboard-sideNav-link--active" to="/dashboard/msgs">
                                <span className="dashboard-sideNav_span">
                                    <span><AiOutlineMail className="dashboard-sideNav-logo" /></span>
                                    <span>messages</span>
                                </span>
                            </NavLink>
                        </li>
                        <li className="dashboard-sideNav-item">
                            <NavLink className="dashboard-sideNav-link" activeclassname="dashboard-sideNav-link--active" to="/dashboard/setting">
                                <span className="dashboard-sideNav_span">
                                    <span><AiFillSetting className="dashboard-sideNav-logo" /></span>
                                    <span>settings</span>
                                </span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                }

                <main className="dashboard-view">
                    {children}
                </main>
            </div>
        </section>
    );
}

export default DashLayout;
