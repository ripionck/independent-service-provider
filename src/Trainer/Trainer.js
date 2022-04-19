import React from 'react';
import img from '../image/gym-trainer.jpg';

const Trainer = () => {
    return (
        <div className=" container d-flex justify-content-space-between mt-5">
            <img width="440px" height="550px" src={img} alt="" />
            <div className="p-3">
                <h2>A Fitness Trainer</h2>
                <p>Fitness trainers work with people of all ages and skill levels. They need to be friendly and encouraging to get and keep their clients. They also need to listen to what a client tells them in order to determine their fitness level and desired fitness goals.

                    A fitness trainer going over a fitness program with a client.

                    In larger facilities, fitness trainers will offer training sessions to the members of the gym. Once a client purchases a session or a package, the fitness trainer will start by evaluating the client's fitness level and personal goals. They will then develop a personalized training program for their client to follow, and will monitor their progress.

                    Fitness trainers in smaller facilities often do a variety of tasks in addition to their fitness duties, such as tending the front desk, signing up new members, giving tours of the fitness centre, writing newsletter articles, creating posters and flyers, and supervising the weight-training and cardiovascular equipment areas.</p>
                <h3>Fitness trainers typically do the following:</h3>
                <ul className="align-items-left">
                    <li>Demonstrate how to carry out various exercises and routines</li>
                    <li> Watch clients do exercises and show or tell them correct techniques to minimize injury and improve fitness</li>
                    <li> Give alternative exercises during workouts or classes for different levels of fitness and skill</li>
                    <li>Monitor client's progress and adapt programs as needed</li>
                    <li>Explain and enforce safety rules and regulations on sports, recreational activities, and the use of exercise equipment</li>
                    <li>Give clients information or resources about nutrition, weight control, and lifestyle issues</li>
                    <li> Give emergency first aid if needed</li>
                    <li></li>
                </ul>
            </div>
        </div>
    );
};

export default Trainer;