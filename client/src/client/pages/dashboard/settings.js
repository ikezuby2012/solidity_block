import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

import DashLayout from "../../components/dashboard/dashLayout";

const Setting = () => {
    const [selected, setSelected] = useState(true);

    const toggleButton = () => setSelected(!selected);
    return (
        <DashLayout>
            <div className="dash-setting">
                <h2>Setting</h2>
                <nav className="dash-setting-block">
                    <ul className="dash-setting-list">
                        <li className="dash-setting-item">
                            <NavLink to="dashboard/staff/profile" className="dash-setting-link">
                                <span>profile</span>
                                <span>&nbsp;</span>
                            </NavLink>
                        </li>

                        <li className="dash-setting-item">
                            <NavLink to="#" className="dash-setting-link">
                                <span>Notifications</span>
                                <span>
                                    <div className="toggle-switch" onClick={toggleButton}>
                                        {/* <input type="checkbox" className='toggle-checkbox' name="switch" id="label" />
                                        <label htmlFor="label" className="label">
                                            <span className="inner" />
                                            <span className="switch" />
                                        </label> */}
                                        <div className={`toggle-button ${selected ? "" : "disabled"}`}>
                                            {selected ? "" : ""}
                                        </div>
                                    </div>
                                </span>
                            </NavLink>
                        </li>

                        <li className="dash-setting-item">
                            <NavLink to="dashboard/staff/profile" className="dash-setting-link">
                                <span>language</span>
                                <span>English</span>
                            </NavLink>
                        </li>

                        <li className="dash-setting-item">
                            <NavLink to="dashboard/staff/profile" className="dash-setting-link">
                                <span className="red-text">Log out</span>
                                <span>&nbsp;</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </DashLayout>
    );
}

export default Setting;