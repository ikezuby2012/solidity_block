import React from 'react';
import { Link } from "react-router-dom";

const AuthLayout = ({ text, children }) => {
    return (
        <main className="auth auth-grid">
            <div className="auth-box">
                <h4 className="auth_form-text">{text}</h4>
                {/* <Link to="/" className="auth-close">&times;</Link> */}
                {children}
            </div>
        </main>
    );
}

export default AuthLayout;
