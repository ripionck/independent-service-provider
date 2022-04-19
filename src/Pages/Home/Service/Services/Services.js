import React from 'react';
import useDetails from '../../../../Hooks/useDetails';
import Service from '../Service';


const Services = () => {
    const [details] = useDetails();
    return (
        <div>
            <h1 className="mt-3 mb-4 fw-bold">Our services for setup your body</h1>
            <div>
                {
                    details.map(detail => <Service key={detail._id} detail={detail}></Service>)
                }
            </div>
        </div >
    );
};

export default Services;