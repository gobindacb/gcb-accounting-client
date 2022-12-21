import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css';
import AllRev from '../AllRev/AllRev';


const ServiceDetails = () => {
    const { _id, price, ratings, img, title, description } = useLoaderData();
    const { user } = useContext(AuthContext);
    const [service, setService] = useState([]);

    const handlePlaceReview = event => {
        event.preventDefault();
        const form = event.target;
        const message = form.message.value;
        const email = user?.email;
        const name = user?.displayName;
        const img = user?.photoURL;

        const review = {
            service: _id,
            title,
            price,
            message,
            email,
            ratings,
            name,
            img
        }

        fetch('https://gcb-accounting-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Congratulations!!! your review posted successfully. Thank You!!!')
                    form.reset();
                }
            })
            .catch(er => console.error(er));

    }
    useEffect(() => {
        fetch(`http://localhost:5000/reviews/:id${_id}`)
            .then(res => res.json())
            .then(data => setService(data))

    })

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-2xl m-6">
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img className='w-1/2' src={img} alt="Album" />
                    </PhotoView>
                </PhotoProvider>

                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
            <p>{user?.email} please add your review.</p>
            <form onSubmit={handlePlaceReview}>
                <div className='grid grid-cols-1 lg:grid-cols-1 gap-2 allign-center'>
                    <textarea name='message' className="textarea textarea-warning w-full" placeholder="Put your review with ratings" required></textarea>
                    <input className='btn btn-warning w-full font-bold' type="submit" value="Give Your Review" />
                </div>
            </form>
            {
                service.map(rvw => <AllRev
                    key={rvw._id}
                    rvw={rvw}
                ></AllRev>)
            }
        </div>
    );
};

export default ServiceDetails;