import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 pt-2 pb-4'>
            <div className="bg-gray-800 text-gray-100">
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                    <div className="flex items-center justify-between">
                        <span className="text-sm dark:text-gray-400">Nov 10, 2022</span>

                    </div>
                    <div className="mt-3">
                        <Link rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">Difference between SQL and NoSQL</Link>
                        <p className="mt-2">SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <Link to='/' className="hover:underline dark:text-violet-400">Home</Link>
                        <div>
                            <Link rel="noopener noreferrer" href="#" className="flex items-center">
                                <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                                <span className="hover:underline dark:text-gray-400">Leroy Jenkins</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-800 text-gray-100">
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                    <div className="flex items-center justify-between">
                        <span className="text-sm dark:text-gray-400">Nov 10, 2022</span>

                    </div>
                    <div className="mt-3">
                        <Link rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">What is JWT, and how does it work?</Link>
                        <p className="mt-2">What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <Link to='/' className="hover:underline dark:text-violet-400">Home</Link>
                        <div>
                            <Link rel="noopener noreferrer" href="#" className="flex items-center">
                                <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                                <span className="hover:underline dark:text-gray-400">Leroy Jenkins</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-800 text-gray-100">
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                    <div className="flex items-center justify-between">
                        <span className="text-sm dark:text-gray-400">Nov 10, 2022</span>

                    </div>
                    <div className="mt-3">
                        <Link rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">What is the difference between javascript and NodeJS?</Link>
                        <p className="mt-2">JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <Link to='/' className="hover:underline dark:text-violet-400">Home</Link>
                        <div>
                            <Link rel="noopener noreferrer" href="#" className="flex items-center">
                                <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                                <span className="hover:underline dark:text-gray-400">Leroy Jenkins</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-800 text-gray-100">
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                    <div className="flex items-center justify-between">
                        <span className="text-sm dark:text-gray-400">Nov 10, 2022</span>

                    </div>
                    <div className="mt-3">
                        <Link rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">How does NodeJS handle multiple requests at the same time?</Link>
                        <p className="mt-2">How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <Link to='/' className="hover:underline dark:text-violet-400">Home</Link>
                        <div>
                            <Link rel="noopener noreferrer" href="#" className="flex items-center">
                                <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                                <span className="hover:underline dark:text-gray-400">Leroy Jenkins</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;