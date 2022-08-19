import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import ResPanel from "./resPanel";
//icons
import logo from "../images/logo.svg";
import { Search, Call, Close } from "@material-ui/icons";
import {
    AiOutlineShoppingCart
} from "react-icons/ai";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FaUser } from "react-icons/fa";

const onSubmit = (e) => {
    e.preventDefault();
};

const HomeTop = ({ onContact }) => {
    const [openPanel, setOpenPanel] = useState(false);
    const { loggedIn, user } = useSelector((state) => state.user);

    const togglePanel = () =>
        setOpenPanel(!openPanel);
    let username;
    if (loggedIn) username = user.name.split(" ")[0];

    return (
        <div className="header-fl header-bx">
            <div className="header-top">
                <div className="header-icon">
                    <img src={logo} alt="header logo" className="header_logo" />
                </div>
                <form className={"header-form"} onSubmit={(e) => onSubmit(e)}>
                    <button className={"header-form_button"}>
                        <Search className={"header-form_icon"} />
                    </button>

                    <input
                        type="search"
                        className={"header-form_input"}
                        placeholder={`search for drugs`}
                    // ref={searchRef}
                    // onChange={(e) => setValue(e.target.value)}
                    />
                </form>

                <nav className="res-nav">
                    <ul>
                        <li>
                            <Link to="/searchpanel" activeclassname="res-icon_active">
                                <Search className="res-icon" />
                            </Link>
                        </li>
                        <li>
                            <NavLink to={loggedIn ? "/cart" : "/login"} activeclassname="res-icon_active">
                                <AiOutlineShoppingCart className="res-icon" />
                            </NavLink>
                        </li>
                        <li>
                            <Link to="#" onClick={togglePanel} className="res-icon_button">
                                {
                                    openPanel ? <Close className="res-icon" onClick={togglePanel} />
                                        : <HiOutlineMenuAlt2 className="res-icon" onClick={togglePanel} />
                                }
                            </Link>
                        </li>
                    </ul>
                </nav>

                {openPanel && <ResPanel />}

                <nav className="header-nav">
                    <ul className="header-nav-list">
                        {/* <li className="header-nav-item">
                            <button className="header-nav-tel fa">
                  <span style={{ marginRight: "6px" }}><Call /></span>
                  <span>+234 9034 567 890</span>
                </button>
                        </li> */}
                        {loggedIn ? <>
                            {/* <li className="header-nav-item"><Link className="header-nav-link header-btn" to="/dashboard/home">dashboard</Link></li> */}
                            <li className="header-nav-item">
                                <Link to={"/dashboard/home"} className="header-nav_user">
                                    <span className="header-nav_user-span">
                                        <FaUser className="header-nav-icon" />
                                    </span>
                                    <span className="header-nav_user-name">{username}</span>
                                </Link>
                            </li>
                        </> : <>
                            <li className="header-nav-item"><Link className="header-nav-link header-btn" to="/login">sign in</Link></li>
                            <li className="header-nav-item"><Link className="header-nav-link header-btn" to="/signup">sign up</Link></li>
                        </>}
                    </ul>
                </nav>
            </div>

            <div className="header-links">
                <ul>
                    <li>
                        <NavLink to="/" activeclassname="active">home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop" activeclassname="active">shop</NavLink>
                    </li>
                    <li>
                        <NavLink to="/book" activeclassname="active">book a consultation</NavLink>
                    </li>
                    <li>
                        <NavLink to="/upload" activeclassname="active">upload a prescription</NavLink>
                    </li>
                    <li>
                        {/* <NavLink to="#" onClick={onContact} activeclassname="active">contact us</NavLink> */}
                        <button onClick={onContact}>Contact us</button>
                    </li>
                    {loggedIn && <li>
                        <NavLink to="/cart" activeclassname="active" className="header-nav_user">
                            <span>
                                <AiOutlineShoppingCart className="header-cart-icon" />
                            </span>
                            cart
                        </NavLink>
                    </li>}
                </ul>
            </div>
        </div>
    );
}

export default HomeTop;
