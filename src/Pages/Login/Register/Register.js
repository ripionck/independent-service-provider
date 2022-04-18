
import React from 'react';
import { Link } from 'react-router-dom';
import "./Register.css";


const Register = () => {
    return (
        <div className="form-feature">
            <form>
                <input type="text" name="name" id="" placeholder="First Name" />
                <input type="text" name="name" id="" placeholder="Last Name" />
                <input type="email" name="email" id="" placeholder="Your Email" />
                <input type="password" name="password" id="" placeholder="Password" />
                <input type="password" name="password" id="" placeholder="Confirm Password" />
                <button>Register Now</button>
            </form>
            <p>Already have an account?<Link to="/login" className='text-primary pe-auto text-decoration-none'>Please Login</Link></p>
        </div>
    );
};

export default Register;