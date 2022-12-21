import React from 'react';
import pic1 from '../../../assets/summary/11-removebg-preview.png';
import pic2 from '../../../assets/summary/12-removebg-preview.png';
import pic3 from '../../../assets/summary/14-removebg-preview.png';
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css';

const Summary = () => {
    return (
        <section className="my-8">
            <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
                <h1 className="text-xl font-semibold leading-none text-center">Kinney & Associates PLLC, provides financial guidance for businesses through planning and ongoing advisement. We also support individuals with personal accounting and tax needs. Our approach is focused on establishing relationships with our clients, so we have a vested interest in helping them achieve their strategic goals. </h1>
            </div>
            <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-3">
                <div className="flex flex-col items-center mx-12 lg:mx-0">
                    <div>
                        <PhotoProvider>
                            <PhotoView src={pic1}>
                                <img className='h-36 w-32' src={pic1} alt='' />
                            </PhotoView>
                        </PhotoProvider>

                    </div>
                    <div className="relative text-center">
                        <h1 className='text-3xl'>Business Services.</h1>
                        <p className="px-6 py-1 text-lg italic">We provide accounting, bookkeeping, payroll and tax preparation services to established businesses. We also enjoy helping start-up businesses launch through consulting, financial analysis, projections and forecasts.</p>

                    </div>

                </div>
                <div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
                    <div>
                        <PhotoProvider>
                            <PhotoView src={pic2}>
                                <img className='h-36 w-32' src={pic2} alt='' />
                            </PhotoView>
                        </PhotoProvider>

                    </div>
                    <div className="relative text-center">
                        <h1 className='text-3xl'>Individual Services.</h1>
                        <p className="px-6 py-1 text-lg italic">We work with individuals to provide tax planning and preparation, estate and gift tax planning. We can also assist with personal financial statement preparation and compilation, as well as financial consulting and planning.</p>

                    </div>

                </div>
                <div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
                    <div>
                        <PhotoProvider>
                            <PhotoView src={pic3}>
                                <img className='h-36 w-32' src={pic3} alt='' />
                            </PhotoView>
                        </PhotoProvider>

                    </div>
                    <div className="relative text-center">
                        <h1 className='text-3xl'>Valuation Services.</h1>
                        <p className="px-6 py-1 text-lg italic">We help businesses navigate complex financial situations, such as mergers and acquisitions. Our team provides support to companies and individuals with shareholder disputes, marital dissolution, and litigation support and testimony.</p>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Summary;