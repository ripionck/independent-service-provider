
import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import "./Register.css";
import auth from '../../../firebase.init';
import { sendEmailVerification } from '@firebase/auth';




const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const navigate = useNavigate();

    const navigateLogin = event => {
        navigate('/login')
    }

    const handleRegister = event => {
        event.preventDefault();

        const firstName = firstNameRef.current.value;
        const lastName = lastNameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;

        createUserWithEmailAndPassword(firstName, lastName, email, password, confirmPassword);

    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                alert('Email verification sent');
            })
    }

    let errorElement;
    if (error) {

        errorElement = <div>
            <p className="text-danger">Error: {error.message}</p>
        </div>

    }
    if (user) {
        navigate('/')
        verifyEmail();
    }
    return (
        <div className="form-feature mt-5">
            <h5>Create a new account</h5>
            <form onSubmit={handleRegister}>
                <input ref={firstNameRef} type="text" name="name" id="" placeholder="First Name" />
                <input ref={lastNameRef} type="text" name="name" id="" placeholder="Last Name" />
                <input ref={emailRef} type="email" name="email" id="" placeholder="Email Address" required />
                <input ref={passwordRef} type="password" name="password" id="" placeholder="Password" required />
                <input ref={confirmPasswordRef} type="password" name="password" id="" placeholder="Confirm Password" required />
                <button className="btn btn-primary border-0 w-50 px-5 py-2 rounded">Register Now</button>
            </form>
            <p>Already have an account?<Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            {errorElement}
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;