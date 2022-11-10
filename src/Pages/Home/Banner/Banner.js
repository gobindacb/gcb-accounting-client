import React from 'react';
import img1 from '../../../assets/hero/hero1.jpg';
import img2 from '../../../assets/hero/hero2.jpg';
import img3 from '../../../assets/hero/hero3.jpg';
import img4 from '../../../assets/hero/hero5.jpg';
// import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">

                    <img src={img1} alt='' className="w-full brightness-50" />
                    <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-1/6">

                    </div>
                    <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-1/3">
                        <h2 className='text-5xl font-bold text-warning'>
                            <h5 className='text-xl font-bold' ><span className='text-red-600'>GCB</span> <span className='text-cyan-500'>ACCOUNTING</span></h5>
                            Supporting You & Your <br />
                            Growing Business
                        </h2>
                    </div>
                    <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-2/4 w-2/4">
                        <p className='font-bold text-stone-800'>Our approach is focused on establishing relationships with our clients, so we have a vested interest in helping them achieve their strategic goals. <a className="link link-error">Book Now</a> </p>
                    </div>
                    <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-3/4 ">
                        <button className="btn btn-warning rounded mr-5 font-bold">Appoinment</button>
                        <button className="btn btn-outline btn-warning rounded font-bold">Sample</button>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={img2} alt='' className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={img3} alt='' className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src={img4} alt='' className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;