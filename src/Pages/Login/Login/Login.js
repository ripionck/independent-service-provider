import React, { useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { sendPasswordResetEmail } from '@firebase/auth';




const Login = () => {


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password)
    }

    const navigateRegister = event => {
        navigate('/register')
    }

    const handleForgotPassword = () => {
        const email = emailRef.current.value;
        sendPasswordResetEmail(auth, email)
            .then(() => {
                console.log('email sent')
            })
    }

    let errorElement;
    if (error) {

        errorElement = <div>
            <p className="text-danger">Error: {error.message}</p>
        </div>
    }

    if (user) {
        navigate(from, { replace: true });
    }


    return (

        <div className="container mt-5">
            <h5>Log in with your data that you entered during your registration</h5>
            <form onSubmit={handleSubmit} className="form-feature">
                <input ref={emailRef} type="email"
                    name="email" id="" placeholder="Email Address" required />
                <input ref={passwordRef}
                    type="password" name="password" id="" placeholder="Password" required />
                <Link onClick={handleForgotPassword} to="/login" className='text-danger pe-auto text-decoration-none'>Forgot Password?</Link>
                <br />
                <button className="border-0 btn btn-primary w-50 mt-3 px-5 py-2 rounded">Login</button>
            </form>
            <p>Don't have an account? <Link to="/register" className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
            {errorElement}
            <div className="d-black mx-auto w-50">
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;