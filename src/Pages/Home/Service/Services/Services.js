import React from 'react';
import useDetails from '../../../../Hooks/useDetails';
import Service from '../Service';


const Services = () => {
    const [details] = useDetails();
    return (
        <div>
            <h2 className="mt-5 mb-5">Our services for setup your body</h2>
            <div>
                {
                    details.map(detail => <Service key={detail._id} detail={detail}></Service>)
                }
            </div>
        </div >
    );
};

export default Services;