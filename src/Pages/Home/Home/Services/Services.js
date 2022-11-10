import React, { useEffect, useState } from 'react';
import ServiceCard from '../../../Shared/ServiceCard/ServiceCard';


const Services = ({ service }) => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://gcb-accounting-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
            {
                services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                ></ServiceCard>)
            }
        </div>
    );
};

export default Services;