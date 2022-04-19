import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../../../src/image/google-logo .png';

const Login = () => {
    return (
        <div>
            <h5>Log in with your data that you entered during your registration</h5>
            <form className="form-feature">
                <input type="email" name="email" id="" placeholder="Your Email" />
                <input type="password" name="password" id="" placeholder="Password" />
                <button className="border-0 bg-primary px-5 py-2 rounded">Login</button>
            </form>
            <div></div>
            <h4>or</h4>
            <div></div>
            <p> <span><img src={image} alt="" /></span> Sign with Google</p>
            <p>Don't have an account? <Link to="/signup" className='text-primary pe-auto text-decoration-none'>Sign Up</Link></p>
        </div>
    );
};

export default Login;