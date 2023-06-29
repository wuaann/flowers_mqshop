import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faLock, faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import './login.css'
import {Link} from "react-router-dom";
import loginApi from "../../api/loginApi";
import {useDispatch} from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {login} from "./authSlice";
import authUtils from "../../utils/AuthUtils";

function LoginPage() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    const handleLoginClick = () => {
            loginApi.login({
                username: email,
                password: password
            }).then((res) => {
                dispatch(login(res.data.access_token))
                authUtils.setToken(res.data.access_token)
            }).catch ((e) => {
            toast.error('Mk hoac tk khong chinh dung', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            console.log('loi',e.message)
        })
    }
    return (
        <div id="wrapper">
            <form id="form-login">
                <h2>QMua Florist</h2>
                <h6>Welcome back, you've been missed!</h6>
                <h1 className="form-heading">Sign In</h1>
                <div className="form-group">
                    <div className="input-icon">
                        <FontAwesomeIcon icon={faUser} className="fa-icon"/>
                        <input
                            type="text"
                            className="form-input"
                            placeholder="Email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-icon">
                        <FontAwesomeIcon icon={faLock} className="fa-icon"/>
                        <input
                            type={passwordVisible ? 'text' : 'password'}
                            className="form-input password-input"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div id="eye" onClick={togglePasswordVisibility}>
                            <FontAwesomeIcon
                                icon={passwordVisible ? faEye : faEyeSlash}
                                className="far fa-eye"
                            />
                        </div>
                    </div>
                </div>
                <div className="form-group"> {/* Add a new class for the enclosing div */}
                    <span><input type="checkbox" value="Remember me"/>Remember me</span>
                    <Link id={'forgot'} to={'/forgot-password'}>Forgot password? </Link>
                </div>
                <p onClick={handleLoginClick} className="form-submit">Sign In</p>
            </form>
        </div>
    );
}

export default LoginPage;