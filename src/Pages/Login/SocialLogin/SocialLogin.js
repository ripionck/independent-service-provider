import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router';
import image from '../../../../src/image/google-logo .png';
import auth from '../../../firebase.init';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();

    let errorElement;
    if (error) {

        errorElement = <div>
            <p className="text-danger">Error: {error.message}</p>
        </div>

    }

    if (user) {
        navigate('/')
    }
    return (
        <div>
            <div className="d-flex align-items-center">
                <div style={{ height: "1px" }} className="bg-primary w-50"></div>
                <p className="mt-2 mx-3">or</p>
                <div style={{ height: "1px" }} className="bg-primary w-50"></div>
            </div>
            {errorElement}
            <button onClick={() => signInWithGoogle()} style={{ color: "rgb(202, 204, 202)" }} className="border-0 text-dark rounded py-2 w-50">
                <img src={image} alt="" />
                <span className="me-3"> Sign with Google</span></button>
        </div>
    );
};

export default SocialLogin;