import React from 'react';
import { Link, useNavigate } from "react-router-dom";


import { Search } from "@material-ui/icons";
import logo from "../../images/logo.svg"
import { FaUser } from "react-icons/fa";

const onSubmit = (e) => {
    e.preventDefault();
};

const HeaderTop = ({ name }) => {
    const navigate = useNavigate();
    if (name === undefined || name === null) {
        // console.log("ok");
        navigate("/login")
    }
    let username = name.split(" ")[0];


    return (
        <header className="">
            <div className="header-top header-bx">
                <div className="header-icon fx" onClick={() => navigate("/")}>
                    <img src={logo} alt="header logo" />
                </div>
                <form className={"header-form"} onSubmit={(e) => onSubmit(e)}>
                    <button className={"header-form_button"}>
                        <Search className={"header-form_icon"} />
                    </button>

                    <input
                        type="search"
                        className={"header-form_input dp-block"}
                        placeholder={`search for drugs`}
                    // ref={searchRef}
                    // onChange={(e) => setValue(e.target.value)}
                    />
                </form>

                <nav className="header-nav dp-block">
                    <div className="header-nav_user">
                        <span className="header-nav_user-span">
                            <FaUser className="header-nav-icon" />
                        </span>
                        <span className="header-nav_user-name">{username}</span>
                    </div>
                </nav>

            </div>
        </header>
    );
}

export default HeaderTop;
