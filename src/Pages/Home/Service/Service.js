import React from 'react';
import './Service.css';

const Service = ({ detail }) => {
    const { name, picture, tips, description } = detail;
    return (
        <div className="service-container container">
            <img src={picture} alt=""></img>
            <div className="mt-5 px-5">
                <h2>{name}</h2>
                <p className="mt-3">{tips}</p>
                <p>{description}</p>
            </div>
        </div >
    );
};

export default Service;