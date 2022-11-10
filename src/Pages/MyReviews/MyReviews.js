import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyReviewBox from '../Home/Home/MyReviewBox/MyReviewBox';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://gcb-accounting-server.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete this review?');
        if (proceed) {
            fetch(`https://gcb-accounting-server.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Review Deleted Sucessfully');
                        const remaining = reviews.filter(rivu => rivu._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }

    return (
        <div>
            <div>
                <h1 className='text-4xl'>My {reviews.length} Reviews</h1>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Service Name</th>
                            <th>Job</th>
                            <th>Message</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(rev => <MyReviewBox
                                key={rev._id}
                                rev={rev}
                                handleDelete={handleDelete}
                            ></MyReviewBox>)
                        }


                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default MyReviews;