import React from 'react';
import logo from '../../assets/Accounting.png'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css';
import { toast } from 'react-toastify';


const AddService = () => {

    const handleAddService = (event) => {
        event.preventDefault();

        const form = event.target;
        const title = form.title.value;
        const price = form.price.value;
        const img = form.img.value;
        const description = form.description.value;

        const service = {
            title,
            price,
            img,
            description
        }
        fetch('https://gcb-accounting-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Congratulations!!! your service added successfully. Thank You!!!')
                    form.reset();
                }
            })
            .catch(er => console.error(er));
        // const service = {
        //     title: event.target.title.value,
        //     price: event.target.price.value,
        //     img: event.target.img.value,
        //     description: event.target.description.value,
        // };
        // console.log(service)
        // fetch('http://localhost:5000/services', {
        //     method: "POST",
        //     headers: {
        //         "connection-type": "application/json"
        //     },
        //     body: JSON.stringify(service)
        // }).then(res => res.json())
        //     .then(data => {
        //         if (data.success) {
        //             alert(data.message);
        //         } else {
        //             alert(data.error);
        //         }
        //     })
        //     .catch(err => {
        //         alert(err.message);
        //     })
    };

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 py-4 mt-4'>
            <div>
                <PhotoProvider>
                    <PhotoView src={logo}>
                        <img src={logo} alt="" />
                    </PhotoView>
                </PhotoProvider>

            </div>
            <div className=''>
                <h1 className='text-5xl font-bold text-orange-600 text-center py-6'>Please Add A Service</h1>
                <section className="p-6 bg-gray-100 text-orange-800">
                    <form onSubmit={handleAddService} novalidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900">

                            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                <div className="col-span-full sm:col-span-3">
                                    <label for="title" className="text-xl">Service Name</label>
                                    <input name='title' type="text" placeholder="Service Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label for="price" className="text-xl">Expected Price</label>
                                    <input name='price' type="number" placeholder=" $" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label for="img" className="text-xl">URL of Service Image</label>
                                    <input name='img' type="text" placeholder="Img URL" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                                </div>
                                <div className="col-span-full">
                                    <label for="escription" className="text-xl">Address</label>
                                    <input name='description' type="text" placeholder="Service Description" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                                </div>
                                <button className="btn btn-error px-12 rounded">Add Service</button>
                            </div>
                        </fieldset>

                    </form>
                </section>
            </div>

        </div>
    );
};

export default AddService;


