import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MyReviewBox = ({ rev, handleDelete }) => {
    const { _id, title, email, serviceName, message, service } = rev;
    const [reviewBox, setReviewBox] = useState({})

    useEffect(() => {
        if (!service) return
        fetch(`https://gcb-accounting-server.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setReviewBox(data));
    }, [service])

    const navigate = useNavigate();
    const handleEdit = (id) => {
        navigate(`/myreviews/editreview/${id}`)
    }

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-24 h-24">
                            {
                                reviewBox?.img &&
                                <img src={reviewBox.img} alt="Service Pic" />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{title}</div>
                        <div className="text-sm opacity-50">United States</div>
                    </div>
                </div>
            </td>
            <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
            </td>
            <td>{message}</td>
            <th>
                <button onClick={() => handleEdit(_id)} className="btn btn-ghost btn-xs">Edit</button>
            </th>
        </tr>
    );
};

export default MyReviewBox;