import React from 'react';
import image from '../../../../src/image/google-logo .png';

const SocialLogin = () => {
    return (
        <div>
            <div className="d-flex align-items-center">
                <div style={{ height: "1px" }} className="bg-primary w-50"></div>
                <p className="mt-2 mx-3">or</p>
                <div style={{ height: "1px" }} className="bg-primary w-50"></div>
            </div>
            <button style={{ color: "rgb(202, 204, 202)" }} className="border-0 text-dark rounded py-2 w-50">
                <img src={image} alt="" />
                <span className="me-3"> Sign with Google</span></button>
        </div>
    );
};

export default SocialLogin;