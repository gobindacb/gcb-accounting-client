import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {
    const { _id, img, price, title, description } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <PhotoProvider>
                <PhotoView src={img}>
                    <figure><img className='h-48 w-full' src={img} alt="Shoes" /></figure>
                </PhotoView>
            </PhotoProvider>

            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <h3 className='text-xl font-bold text-purple-600 card-actions justify-start'>Price: ${price}</h3>
                <p>{description?.slice(0, 100)}...<Link to={`/servicedetails/${_id}`}>See More</Link></p>
                <div className="card-actions justify-end">
                    <Link to={`/servicedetails/${_id}`}>
                        <button className="btn btn-primary">Service Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;