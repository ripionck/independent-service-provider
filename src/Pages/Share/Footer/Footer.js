import React from 'react';

const Footer = () => {
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };

    return (
        <footer className="mt-5">
            <p>All Rights Reserved&copy;{getCurrentYear()}</p>
        </footer>
    );
};

export default Footer;