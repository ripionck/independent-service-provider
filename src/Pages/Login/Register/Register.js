
import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import "./Register.css";



const Register = () => {
    return (
        <div className="form-feature mt-5">
            <h5>Create a new account</h5>
            <form>
                <input type="text" name="name" id="" placeholder="First Name" />
                <input type="text" name="name" id="" placeholder="Last Name" />
                <input type="email" name="email" id="" placeholder="Your Email" />
                <input type="password" name="password" id="" placeholder="Password" />
                <input type="password" name="password" id="" placeholder="Confirm Password" />
                <button className="btn btn-primary border-0 w-50 px-5 py-2 rounded">Register Now</button>
            </form>
            <p>Already have an account?<Link to="/login" className='text-primary pe-auto text-decoration-none'>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;