import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../actions/auth";
import { Link, useNavigate } from "react-router-dom";

import AuthLayout from "../components/auth/authLayout";

//icons
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { RiErrorWarningLine } from "react-icons/ri";

const Signup = ({ card }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let userObj;
    userObj = useSelector((state) => state.user);
    const [state, setState] = useState({
        email: "",
        name: "",
    });
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [nameMsg, setNameMsg] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [passwordConfirmError, setPasswordConfirmError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const [passwordShown, setPasswordShown] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [check, setCheck] = useState(false);

    const onEmailChange = (e) => {
        setState((state) => ({
            ...state,
            email: e.target.value
        }));
        const pattern =
            /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
        if (pattern.test(e.target.value)) {
            e.persist();
            // console.log("hit here!");
            setState((state) => ({
                ...state,
                email: e.target.value
            }));
            // setEmail(mail);
            setEmailError(false);
        } else {
            setEmailError(true);
        }
    };

    const onNameChange = (e) => {
        setNameError(false);
        setState((state) => ({
            ...state,
            name: e.target.value
        }));
        let namePattern = /^[a-zA-Z][a-zA-Z\s]*$/g;
        if (e.target.value !== "" && e.target.value !== null) {
            if (namePattern.test(e.target.value)) {
                e.persist();
                setState((state) => ({
                    ...state,
                    name: e.target.value
                }));
            } else {
                setNameError(true);
                setNameMsg("field should contain valid string");
            }
        }
        if (nameError === false &&
            passwordError === false &&
            emailError === false &&
            passwordConfirmError === false) {
            setIsDisabled(false);
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (check === false) {
            setIsDisabled(true);
        }
        setLoading(true);
        if (password !== passwordConfirm) {
            setPasswordError(true);
            setPasswordConfirmError(true);
        }

        if (
            nameError === false &&
            passwordError === false &&
            emailError === false &&
            passwordConfirmError === false
        ) {
            const data = {
                name: state.name,
                email: state.email,
                password: password,
                passwordConfirm: passwordConfirm,
            };
            // console.log(data);
            dispatch(signUp(data))
                .then(() => {
                    console.log(userObj);
                    navigate("/login");
                    // window.location.reload();
                    setNameMsg("success");
                })
                .catch((err) => {
                    // console.log(userObj.message);
                    setShowPopup(true);
                    setNameMsg(userObj.message);
                });
            setLoading(false);
        } else {
            setShowPopup(true);
            setNameMsg("something went wrong!");
        }
    }

    const togglePassword = () => setPasswordShown(!passwordShown);

    const onCheck = (e) => {
        // e.preventDefault();
        // console.log(e.target.checked);
        setCheck(!check);
        if (check === false) {
            setIsDisabled(true);
        }
    }

    return (
        <AuthLayout text="Create an account">
            <div className="signup">
                <h2>Already have an account?
                    <Link to="/login" className="signup-link" >Log in instead</Link>
                </h2>
                <form className="signup-form" onSubmit={(e) => onSubmit(e)}>
                    <div className="signup-div">
                        <div className="signup-form_group">
                            <input type="text"
                                onChange={(e) => onNameChange(e)}
                                className="signup-form_input"
                                placeholder="Full name"
                                id="name"
                                name={"name"}
                                required={true} />
                            <label htmlFor="name" className="signup-form_label">Full name</label>
                            {
                                nameError ? (<p className="signup-warningText">
                                    <span>
                                        <RiErrorWarningLine className="signup-warningLogo" />
                                    </span> {nameMsg}
                                </p>) : ""
                            }
                        </div>
                        <div className="signup-form_group">
                            <input type="email"
                                onChange={(e) => onEmailChange(e)}
                                className="signup-form_input"
                                placeholder="email address"
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
                                <input type={passwordShown ? "text" : "password"}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="signup-form_input"
                                    placeholder="Password"
                                    id="password"
                                    name={"password"}
                                    required={true} />
                                <button onClick={togglePassword}>
                                    {passwordShown ?
                                        <AiFillEye className="signup-icon" /> :
                                        <AiFillEyeInvisible className="signup-icon" />
                                    }
                                </button>
                            </div>
                            <label htmlFor="password" className="signup-form_label">password</label>
                        </div>
                        <div className="signup-form_group">
                            <div className="signup-flex">
                                <input type={passwordShown ? "text" : "password"}
                                    onChange={(e) => setPasswordConfirm(e.target.value)}
                                    className="signup-form_input"
                                    placeholder="confirm Password"
                                    id="passwordConfirm"
                                    name="passwordConfirm"
                                    required={true} />
                                <button onClick={togglePassword}>
                                    {passwordShown ?
                                        <AiFillEye className="signup-icon" /> :
                                        <AiFillEyeInvisible className="signup-icon" />
                                    }
                                </button>
                            </div>
                            <label htmlFor="passwordConfirm" className="signup-form_label">confirm password</label>
                            {
                                password !== passwordConfirm && (<p className="signup-warningText">
                                    <span>
                                        <RiErrorWarningLine className="signup-warningLogo" />
                                    </span>
                                    both password does not match!
                                </p>)
                            }
                        </div>
                        <div className="signup-block">
                            <input type="checkbox"
                                onChange={(e) => setCheck(e.target.defaultChecked)}
                                defaultChecked={check}
                                required
                            />
                            <label htmlFor="" className="signup-block_label">
                                i agree to the <Link to="#" className="signup-block_link">Terms of use</Link> and <Link to="#" className="signup-block_link">Privacy Policy</Link>
                            </label>
                        </div>
                        <div className="signup-form_buttons">
                            <button className={`${isDisabled && "signup-disabled"} signup-form_btn`} type={"submit"} disabled={isDisabled}>
                                {loading ? <div className="loading-button" /> : "create an account"}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </AuthLayout>

    );
}

export default Signup;
