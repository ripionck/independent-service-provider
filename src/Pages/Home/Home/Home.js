
import React from 'react';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="container">
                <p>"Fitness" is a broad term that means something different to each person, but it refers to your own optimal health and overall well-being. Being fit not only means physical health, but emotional and mental health, too. It defines every aspect of your health. Smart eating and active living are fundamental to fitness.</p>
                <h3> According to the Academy of Nutrition and Dietetics' Complete Food and Nutrition Guide (3rd ed.), when you are fit, you have:</h3>
                <ul>
                    <li>Energy to do what's important to you and to be more productive</li>
                    <li>Stamina and a positive outlook to handle the mental challenges and emotional ups and downs of everyday life and to deal with stress</li>
                    <li>Reduced risk for many health problems, such as heart disease, cancer, diabetes and osteoporosis</li>
                    <li>The chance to look and feel your best</li>
                    <li>Physical strength and endurance to accomplish physical challenges</li>
                    <li>A better chance for a higher quality of life and perhaps a longer life, too</li>
                </ul>
            </div>
        </div>
    );
};

export default Home;