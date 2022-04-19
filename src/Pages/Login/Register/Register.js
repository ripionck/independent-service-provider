
import React from 'react';
import { Link } from 'react-router-dom';
import "./Register.css";
import image from '../../../../src/image/google-logo .png';


const Register = () => {
    return (
        <div className="form-feature">
            <h5>Create a new account</h5>
            <form>
                <input type="text" name="name" id="" placeholder="First Name" />
                <input type="text" name="name" id="" placeholder="Last Name" />
                <input type="email" name="email" id="" placeholder="Your Email" />
                <input type="password" name="password" id="" placeholder="Password" />
                <input type="password" name="password" id="" placeholder="Confirm Password" />
                <button className="border-0 bg-primary px-5 py-2 rounded">Register Now</button>
            </form>
            <div></div>
            <h4>or</h4>
            <div></div>
            <p> <span><img src={image} alt="" /></span> Sign with Google</p>
            <p>Already have an account?<Link to="/login" className='text-primary pe-auto text-decoration-none'>Please Login</Link></p>
        </div>
    );
};

export default Register;