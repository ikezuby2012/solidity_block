import React, { useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";


const ResPanel = ({ togglePanel }) => {
    const [openPanel, setOpenPanel] = useState(false);
    const { loggedIn, user } = useSelector((state) => state.user);
    return (
        <div className="navigation-box">
            {/* <div className="header-top">
                <div className="header-icon">
                    <img src={logo} alt="header logo" className="header_logo" />
                </div>
                <nav className="res-nav">
                    <ul>
                        <li>
                            <NavLink to="/search" activeClassName="res-icon_active">
                                <Search className="res-icon" />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/cart" activeClassName="res-icon_active">
                                <AiOutlineShoppingCart className="res-icon" />
                            </NavLink>
                        </li>
                        <li>
                            <button onClick={togglePanel} className="res-icon_button">
                                {
                                    openPanel ? <Close className="res-icon" onClick={togglePanel} />
                                        : <HiOutlineMenuAlt2 className="res-icon" onClick={togglePanel} />
                                }
                            </button>
                        </li>
                    </ul>
                </nav>
            </div> */}
            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__items">
                        <Link to="/" className="navigation__link" >Home</Link>
                    </li>
                    <li className="navigation__items">
                        <Link to="/shop" className="navigation__link" >Shop</Link>
                    </li>
                    <li className="navigation__items">
                        <Link to="/book" className="navigation__link" >Book a consultation</Link>
                    </li>
                    <li className="navigation__items">
                        <Link to="/upload" className="navigation__link" >Upload a prescription</Link>
                    </li>
                    <li className="navigation__items">
                        <Link to="/contact" className="navigation__link" >Contact us</Link>
                    </li>
                    {
                        loggedIn ? <>
                            <li className="navigation__items">
                                <Link to="/dashboard/home" className="navigation__link navigation__btn-2" >dashboard</Link>
                            </li>
                        </> : <>
                            <li className="navigation__items">
                                <Link to="/signup" className="navigation__link navigation__btn-1" >Create account</Link>
                            </li>
                            <li className="navigation__items">
                                <Link to="/login" className="navigation__link navigation__btn-2" >Sign in</Link>
                            </li>
                        </>
                    }

                </ul>
            </nav>
        </div>
    );
}

export default ResPanel;
