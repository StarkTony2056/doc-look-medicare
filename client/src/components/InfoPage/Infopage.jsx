import React from 'react';
import { FaCalendarAlt, FaAmbulance, FaClock } from "react-icons/fa";
import { BrowserRouter as Router, Link } from 'react-router-dom';

function InfoPage() {
    return (
        <Router>
            <div className="mt-2 mt-md-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 d-flex align-items-stretch mb-4 mb-lg-0">
                            <div className="content bg-blue-700 text-white rounded-lg p-8 w-100">
                                <h3 className="font-bold text-3xl mb-8">Why Choose Us?</h3>
                                <p className="mb-8">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                                    Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
                                </p>
                                <div className="text-center">
                                    <button className="btn btn-primary text-sm md:text-base bg-blue-800">Learn More</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 d-flex align-items-stretch">
                            <div className="icon-boxes flex flex-col justify-center w-100">
                                <div className="row">
                                    <div className="col-xl-4 d-flex align-items-stretch">
                                        <div className="icon-box mt-4 mt-xl-0 bg-white rounded-lg shadow-md p-8 flex flex-col items-center transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-lg w-100">
                                            <FaCalendarAlt className="icon text-blue-500 text-6xl mb-8" />
                                            <h4 className="font-bold text-2xl mb-4">Appointment</h4>
                                            <small className='block mb-4 text-blue-500 font-bold'>Available 24/7</small>
                                            <p className="text-gray-600">Don't wait, secure your appointment now and take control of your health journey. Our services are available round the clock to ensure you receive the care you deserve.</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 d-flex align-items-stretch">
                                        <div className="icon-box mt-4 mt-xl-0 bg-white rounded-lg shadow-md p-8 flex flex-col items-center transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-lg w-100">
                                            <FaAmbulance className="icon text-red-500 text-6xl mb-8" />
                                            <h4 className="font-bold text-2xl mb-4">Emergency Cases</h4>
                                            <h6 className='block mb-4 text-blue-500 font-bold'><a href="tel:+9112345678" className="text-blue-500 hover:underline">+88 01751 040425</a></h6>
                                            <p className="text-gray-600">Need immediate medical attention? We're here to help 24/7. Our dedicated team ensures prompt response to emergency cases, providing you with the care you need, when you need it the most.</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 d-flex align-items-stretch">
                                        <div className="icon-box mt-4 mt-xl-0 bg-white rounded-lg shadow-md p-8 flex flex-col items-center transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-lg w-100">
                                            <FaClock className="icon text-green-500 text-6xl mb-8" />
                                            <h4 className="font-bold text-2xl mb-4">Doctor Timing</h4>
                                            <small className='block mb-4 text-blue-500 font-bold'>Timing schedule</small>
                                            <ul className='list-group list-group-flush'>
                                                <li className="list-group-item d-flex justify-content-between text-nowrap" ><strong>Sun - Wed :</strong> <span>8:00 AM - 5:00 PM</span></li>
                                                <li className="list-group-item d-flex justify-content-between text-nowrap" ><strong>Thu - Fri :</strong> <span>9:00 AM - 5:00 PM</span></li>
                                                <li className="list-group-item d-flex justify-content-between text-nowrap" ><strong>Sat - Sun :</strong> <span>10:00 AM - 5:00 PM</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default InfoPage;
