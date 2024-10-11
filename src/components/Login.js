import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../images/logoo.png';
import peopleImg from '../images/icon.png';
import bgImg from '../images/bg1.png';
import lockIcon from '../images/lock.png';

const baseurl = process.env.BASE_URL;

const Login = () => {
    const [userId, setUserId] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [loginMessage, setLoginMessage] = useState('');

    const navigate = useNavigate(); 

    const validateForm = () => {
        const newErrors = {};
        if (!userId.includes('@')) {
            newErrors.userId = 'User ID must be a valid email address.';
        }
        if (mobileNo.length !== 10 || isNaN(mobileNo)) {
            newErrors.mobileNo = 'Mobile No must be a 10-digit number.';
        }
        if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters long.';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            setLoading(true);
            const loginData = {
                email: userId, 
                mobileNo: mobileNo, 
                password: password
            };

            try {
                const response = await axios.post('http://localhost:8080/api/auth/login', loginData);
                
                if (response.data && response.data.token) { // Check if token exists
                    localStorage.setItem("token", response.data.token);
                    console.log("Token saved:", localStorage.getItem("token")); // Debug log
                    navigate('/dashboard'); // Navigate after successful login
                } else {
                    setLoginMessage('Login failed. Please try again.'); // Handle unexpected response
                }
            } catch (error) {
                console.error('Error logging in:', error);
                setLoginMessage('Login failed due to server error.');
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div className="login-container">
            <img src={bgImg} alt="background" className="background-img" />
            <div className="login-content">
                <div className="people-img-section">
                    <img src={logo} alt="Plunes Logo" className="logo" />
                    <img
                        src={peopleImg}
                        alt="People"
                        className="people_img"
                        height={"550px"}
                        width={"750px"}
                    />
                </div>
                <div className="login-form-section">
                    <h2 className='welcome'><span>Welcome To</span> Plunes AWC</h2>
                    <h4 className='logn_text'>Log-in To your Account</h4>
                    <div className="form-group">
                        <label>User ID</label>
                        <input
                            type="text"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                            placeholder="User ID"
                            className='inputfield'
                        />
                        {errors.userId && <span className="error">{errors.userId}</span>}
                    </div>
                    <div className="form-group">
                        <label>Mobile No</label>
                        <input
                            type="text"
                            value={mobileNo}
                            onChange={(e) => setMobileNo(e.target.value)}
                            className='inputfield'
                            placeholder="Mobile No"
                        />
                        {errors.mobileNo && <span className="error">{errors.mobileNo}</span>}
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <div className="password-container">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='inputfield password-field'
                                placeholder="Password"
                            />
                            <img src={lockIcon} alt="lock" className="lock-icon-top" height="20px" />
                        </div>
                        {errors.password && <span className="error">{errors.password}</span>}
                    </div>
                    <button onClick={handleSubmit} className="login-btn" disabled={loading}>
                        {loading ? 'Logging in...' : 'Log In'}
                    </button>
                    {loginMessage && <p className="login-message">{loginMessage}</p>}
                </div>
            </div>
        </div>
    );
};

export default Login;
