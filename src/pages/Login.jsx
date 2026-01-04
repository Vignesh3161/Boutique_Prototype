import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleLogin = () => {
        // Simulating login
        navigate('/profile');
    };

    return (
        <div className="login-page fade-in">
            <div className="login-container">
                <h1 className="login-title">Members Lounge</h1>
                <p className="login-subtitle">Welcome back to the House.</p>

                <form className="login-form">
                    <div className="form-group">
                        <input type="email" placeholder="Email Address" className="gold-input" />
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Passkey" className="gold-input" />
                    </div>

                    <button type="button" className="login-btn" onClick={handleLogin}>
                        Enter
                    </button>

                    <div className="login-footer">
                        <a href="#">Apply for Membership</a>
                        <span>|</span>
                        <a href="#">Forgot Passkey</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
