import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaTimes } from 'react-icons/fa'; // Import React Icons

import img from '../../../public/images/doc1.jpg';
import img2 from '../../../public/images/doc4.jpg';
import img3 from '../../../public/images/doctor 5.jpg';

function Service() {
    const [accordion1Open, setAccordion1Open] = useState(false);
    const [accordion2Open, setAccordion2Open] = useState(false);
    const [accordion3Open, setAccordion3Open] = useState(false);

    const toggleAccordion1 = () => {
        setAccordion1Open(!accordion1Open);
    };

    const toggleAccordion2 = () => {
        setAccordion2Open(!accordion2Open);
    };

    const toggleAccordion3 = () => {
        setAccordion3Open(!accordion3Open);
    };

    return (
        <section className="container mt-16 mb-16 px-4">
            <div className="mb-5 text-center">
                <h2 className='font-bold text-4xl tracking-wide text-center mb-5'>
                    Doctor <span className='text-primary'>Services</span>
                </h2>
            </div>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                        <div className="service-img relative">
                            <img src={img} alt="" className="rounded-lg shadow-lg transition duration-500 transform rotate-0 hover:rotate-6" />
                            <img src={img2} alt="" className="mt-4 rounded-lg shadow-lg transition duration-500 transform rotate-3 hover:rotate-0" />
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-1 lg:col-span-1">
                        <div className="service-img xl:mt-10 md:mt-0 relative">
                            <img src={img3} alt="" className="rounded-lg shadow-lg transition duration-500 transform rotate-0 hover:rotate-3" />
                        </div>
                    </div>
                    <div className="col-span-1 lg:col-span-1">
                        <div className="relative mb-3">
                            <h6 className="mb-0">
                                <button
                                    className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
                                    onClick={toggleAccordion1}
                                >
                                    <span>What services do our doctors offer?</span>
                                    <span className="ml-auto">{accordion1Open ? <FaTimes size={20} className="accordion-icon" /> : <FaAngleDown size={20} className="accordion-icon" />}</span>
                                </button>
                            </h6>
                            <div className={`transition-all duration-300 ease-in-out ${accordion1Open ? 'h-auto' : 'h-0 overflow-hidden'}`}>
                                <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
                                    Our doctors provide a wide range of services including consultations, diagnosis, treatment planning, surgeries, and follow-up care.
                                </div>
                            </div>
                        </div>
                        <div className="relative mb-3">
                            <h6 className="mb-0">
                                <button
                                    className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
                                    onClick={toggleAccordion2}
                                >
                                    <span>How can I book an appointment?</span>
                                    <span className="ml-auto">{accordion2Open ? <FaTimes size={20} className="accordion-icon" /> : <FaAngleDown size={20} className="accordion-icon" />}</span>
                                </button>
                            </h6>
                            <div className={`transition-all duration-300 ease-in-out ${accordion2Open ? 'h-auto' : 'h-0 overflow-hidden'}`}>
                                <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
                                    Booking an appointment is easy. You can either call our clinic or use our online booking system available on our website.
                                </div>
                            </div>
                        </div>
                        <div className="relative mb-3">
                            <h6 className="mb-0">
                                <button
                                    className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
                                    onClick={toggleAccordion3}
                                >
                                    <span>What insurance plans do you accept?</span>
                                    <span className="ml-auto">{accordion3Open ? <FaTimes size={20} className="accordion-icon" /> : <FaAngleDown size={20} className="accordion-icon" />}</span>
                                </button>
                            </h6>
                            <div className={`transition-all duration-300 ease-in-out ${accordion3Open ? 'h-auto' : 'h-0 overflow-hidden'}`}>
                                <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
                                    We accept a wide range of insurance plans. Please contact our office for details regarding specific insurance coverage.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </section>
    )
}

export default Service;
