import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/auth"
import { Link, useNavigate } from "react-router-dom"

//icons
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { RiErrorWarningLine } from "react-icons/ri";

const Contact = ({ onContact, children }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);
    const [nameMsg, setNameMsg] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [passwordShown, setPasswordShown] = useState(false);
    const [showError, setShowError] = useState(false);

    const onEmailChange = (e) => {
        setShowError(false);
        setEmail(e.target.value);
        const pattern =
            /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
        if (pattern.test(e.target.value)) {
            e.persist();
            setEmail(e.target.value);
            setEmailError(false);
        } else {
            setEmailError(true);
        }
    };


    const onSubmit = async (e) => {
        // console.log(userObj);
        e.preventDefault();
        // console.log("ok here")
        setLoading(true);
        console.log(passwordError, emailError);
        if (
            passwordError === false &&
            emailError === false
        ) {
            // console.log("here!");

            const data = {
                email,
                message
            };
            // console.log(data);
            dispatch(login(data))
                .then(() => {
                    // console.log("logged in");
                    navigate("/dashboard/home");
                    // window.location.reload();
                    setNameMsg("success");
                })
                .catch(() => {
                    setShowError(true);
                    setNameMsg("email and password not correct");
                });
            setLoading(false);
        } else {
            setShowError(true);
            setNameMsg("something went wrong!");
        }
    };

    return (
        <main className="auth auth-grid"
            style={{ zIndex: "2" }}
        >
            <div className="auth-box fx" style={{ zIndex: "0", height: "70vh" }}>
                <h4 className="auth_form-text">Contact Us</h4>
                {/* <a href="/" className="auth-close">&times;</a> */}
                <Link to="#" onClick={onContact} className="auth-close">&times;</Link>
            </div>
            {/* <p>send us your message and we will get back to you</p> */}
            <form action="" className="signup-form" onSubmit={(e) => onSubmit(e)}
                style={{ zIndex: "20" }}
            >
                <p>send us your message and we will get back to you</p>
                <div className="signup-div">
                    <div className="signup-form_group">
                        <input type="email"
                            style={{ padding: "0.6rem 13rem 0.6rem 0.7rem" }}
                            onChange={(e) => onEmailChange(e)}
                            className={`${showError && "outline-red"} signup-form_input `}
                            placeholder="enter your email address"
                            id="email"
                            name={"email"}
                            required={true} />
                        <label htmlFor="email" className="signup-form_label">email address</label>
                        {
                            emailError ? (<p className="signup-warningText">
                                <span>
                                    <RiErrorWarningLine className="signup-warningLogo" />
                                </span>
                                please input a valid email address
                            </p>) : ""
                        }
                    </div>
                    <div className="signup-form_group">
                        <div className="signup-flex">
                            <textarea
                                onChange={(e) => setMessage(e.target.value)}
                                className={`${showError && "outline-red"} signup-form_input`}
                                placeholder="Message"
                                id="message"
                                name={"message"}
                                style={{ marginBottom: "0.6rem" }}
                                required={true} />
                        </div>
                        {/* <label htmlFor="message" className="signup-form_label">message</label> */}
                    </div>

                    <div className="signup-form_buttons">
                        <button className={`${isDisabled && "signup-disabled"} signup-form_btn`} type={"submit"} disabled={isDisabled}>
                            {loading ? <div className="loading-button" /> : "Send"}
                        </button>
                    </div>
                </div>
            </form>
        </main>
    );
}

export default Contact;