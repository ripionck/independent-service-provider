import React from 'react';
import './Service.css';

const Service = ({ detail }) => {
    const { name, picture, tips, description } = detail;
    return (
        <div className="service-container container">
            <img src={picture} alt=""></img>
            <div className="mt-5 px-5">
                <h2>{name}</h2>
                <p className="mt-3"><span className="fs-5 fw-bold">Using Tips:</span> {tips}</p>
                <p><span className="fs-5 fw-bold">Advantage:</span> {description}</p>
                <button className="border-0 px-5 py-2 rounder fw-bold">Details</button>
            </div>

        </div >
    );
};

export default Service;