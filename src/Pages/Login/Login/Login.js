import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';


const Login = () => {
    return (
        <div className="container mt-5">
            <h5>Log in with your data that you entered during your registration</h5>
            <form className="form-feature">
                <input type="email" name="email" id="" placeholder="Your Email" />
                <input type="password" name="password" id="" placeholder="Password" />
                <Link to="/login" className='text-danger pe-auto text-decoration-none'>Forgot Password?</Link>
                <br />
                <button className="border-0 btn btn-primary w-50 mt-3 px-5 py-2 rounded">Login</button>
            </form>
            <p>Don't have an account? <Link to="/signup" className='text-primary pe-auto text-decoration-none'>Sign Up</Link></p>
            <div className="d-black mx-auto w-50">
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;