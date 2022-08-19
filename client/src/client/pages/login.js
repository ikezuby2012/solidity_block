import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/auth";
import { Link, useNavigate } from "react-router-dom"


import AuthLayout from "../components/auth/authLayout";
//icons
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { RiErrorWarningLine } from "react-icons/ri";

const Login = ({ handleSignup }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userObj = useSelector((state) => state.user);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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

    const onPasswordChange = (e) => {
        setShowError(false);
        setPassword(e.target.value);
        if (e.target.value !== "" && e.target.value !== null) {
            setPassword(e.target.value);
            setPasswordError(false);
            setIsDisabled(false);
        } else {
            setPasswordError(true);
        }

        // if (emailError && passwordError) {
        //     setIsDisabled(false);
        // }
    }

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
                password
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

    const togglePassword = () => setPasswordShown(!passwordShown)

    return (
        <AuthLayout text="login account">
            <div className="signup">
                <h2>Dont have an account?
                    <Link to="/signup" className="signup-link" onClick={handleSignup}>create an account</Link>
                </h2>
                <form action="" className="signup-form" onSubmit={(e) => onSubmit(e)}>
                    <div className="signup-div">
                        <div className="signup-form_group">
                            <input type="email"
                                onChange={(e) => onEmailChange(e)}
                                className={`${showError && "outline-red"} signup-form_input`}
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
                                    onChange={(e) => onPasswordChange(e)}
                                    className={`${showError && "outline-red"} signup-form_input`}
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
                        {
                            showError ? (<p className="signup-warningText text-center" style={{ marginRight: "auto" }}>
                                <span>
                                    <RiErrorWarningLine className="signup-warningLogo" />
                                </span>
                                email address and password not correct!
                            </p>) : ""
                        }
                        <div className="signup-block">
                            <input type="checkbox" noValidate />
                            <label htmlFor="" className="signup-block_label">
                                Remember me
                            </label>
                        </div>
                        <div className="signup-form_buttons">
                            <button className={`${isDisabled && "signup-disabled"} signup-form_btn`} type={"submit"} disabled={isDisabled}>
                                {loading ? <div className="loading-button" /> : "Sign in"}
                            </button>
                        </div>
                    </div>
                </form>
            </div >
        </AuthLayout >
    );
}

export default Login;