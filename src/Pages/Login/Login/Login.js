import React from 'react';

const Login = () => {
    return (
        <div>
            <h2>Please Login</h2>
            <form>
                <input type="text" name="name" id="" placeholder="Your Name" />
                <input type="email" name="email" id="" placeholder="Your Email" />
                <input type="password" name="password" id="" placeholder="Password" />
            </form>
        </div>
    );
};

export default Login;