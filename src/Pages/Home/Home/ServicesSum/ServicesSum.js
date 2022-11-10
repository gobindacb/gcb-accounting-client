import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../../../Shared/ServiceCard/ServiceCard';

const ServicesSum = () => {
    const [serv, setServ] = useState([]);
    useEffect(() => {
        fetch('https://gcb-accounting-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServ(data))
    }, [])


    return (
        <div className='text-center'>
            <h5 className='text-xl font-bold py-2' ><span className='text-red-600'>GCB</span> <span className='text-cyan-500'>ACCOUNTING</span></h5>
            <h2 className='text-2xl py-2 font-bold'>Providing following Accounting & Bookkeeping services right now.</h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    serv.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <Link to='/services'><button className="btn btn-rounded btn-warning mt-6 font-bold">See All services</button></Link>
        </div>
    );
};

export default ServicesSum;