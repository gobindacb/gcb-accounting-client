import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const EditReview = () => {
    const router = useParams();
    const { user } = useContext(AuthContext);
    const [review, setReviews] = useState({});
    const { id } = router

    useEffect(() => {
        fetch(`https://gcb-accounting-server.vercel.app/reviews/${id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [id])

    const handlePlaceReview = event => {
        event.preventDefault();
        const form = event.target;
        const message = form.message.value;

        const review = {
            message,
        }

        fetch(`https://gcb-accounting-server.vercel.app/reviews/${id}`, {
            method: 'PATCH',
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


    console.log(review)

    return (
        <div>
            <h1>Edit Your Review!!!</h1>
            <p>{user?.email} please add your review.</p>
            <form onSubmit={handlePlaceReview}>
                <div className='grid grid-cols-1 lg:grid-cols-1 gap-2 allign-center'>
                    <textarea name='message' defaultValue={review.message} className="textarea textarea-warning w-full" placeholder="Put your review with ratings" required></textarea>
                    <input className='btn btn-warning w-full font-bold' type="submit" value="Give Your Review" />
                </div>
            </form>
        </div>
    );
};

export default EditReview;