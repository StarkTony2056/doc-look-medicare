import React from 'react';
import logo from '../../../public/images/footer_logo.png';
import { FaAngleDoubleRight, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto py-10 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo and About */}
                    <div className="footer-widget">
                        <img src={logo} alt="logo" className="max-w-full h-auto max-h-12 mb-6 mx-auto md:mx-0" />
                        <p className="text-center md:text-left">
                            Prioritize your health with regular check-ups. Book your appointment now to stay on track with your wellness goals. Start your journey to better health today.
                        </p>
                    </div>

                    {/* For Patients */}
                    <div className="footer-widget">
                        <h2 className="footer-title font-bold text-2xl">For Patients</h2>
                        <ul className='mt-3 gap-5'>
                            <li className="hover:text-blue-500 transition duration-300 ease-in-out transform hover:translate-x-1 cursor-pointer"><FaAngleDoubleRight className="inline-block mr-2" />Find a Doctor</li>
                            <li className="hover:text-blue-500 transition duration-300 ease-in-out transform hover:translate-x-1 cursor-pointer"><FaAngleDoubleRight className="inline-block mr-2" />Log In</li>
                            <li className="hover:text-blue-500 transition duration-300 ease-in-out transform hover:translate-x-1 cursor-pointer"><FaAngleDoubleRight className="inline-block mr-2" />Sign Up</li>
                            <li className="hover:text-blue-500 transition duration-300 ease-in-out transform hover:translate-x-1 cursor-pointer"><FaAngleDoubleRight className="inline-block mr-2" />Book Appointment</li>
                            <li className="hover:text-blue-500 transition duration-300 ease-in-out transform hover:translate-x-1 cursor-pointer"><FaAngleDoubleRight className="inline-block mr-2" />Patient Dashboard</li>
                        </ul>
                    </div>

                    {/* For Doctors */}
                    <div className="footer-widget">
                        <h2 className="footer-title font-bold text-2xl">For Doctors</h2>
                        <ul className='mt-3 gap-5'>
                            <li className="hover:text-blue-500 transition duration-300 ease-in-out transform hover:translate-x-1 cursor-pointer"><FaAngleDoubleRight className="inline-block mr-2" />Appointments</li>
                            <li className="hover:text-blue-500 transition duration-300 ease-in-out transform hover:translate-x-1 cursor-pointer"><FaAngleDoubleRight className="inline-block mr-2" />Log In</li>
                            <li className="hover:text-blue-500 transition duration-300 ease-in-out transform hover:translate-x-1 cursor-pointer"><FaAngleDoubleRight className="inline-block mr-2" />Sign Up</li>
                            <li className="hover:text-blue-500 transition duration-300 ease-in-out transform hover:translate-x-1 cursor-pointer"><FaAngleDoubleRight className="inline-block mr-2" />Doctor Dashboard</li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div className="footer-widget">
                        <h2 className="footer-title font-bold text-2xl">Get in Touch</h2>
                        <div className="footer-contact-info mt-3">
                            <div className="flex items-center mb-3">
                                <FaMapMarkerAlt className="mr-2" />
                                <p>123, Park Street, Kolkata, West Bengal, India 700017</p>
                            </div>
                            <div className="flex items-center mb-3">
                                <FaPhoneAlt className="mr-2" />
                                <p>+88 01751 040425</p>
                            </div>
                            <div className="flex items-center">
                                <FaEnvelope className="mr-2" />
                                <p>appointments@healthcareclinic.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="bg-gray-800 py-2">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-center md:text-left mb-3 md:mb-0">
                            © {(new Date()).getFullYear()} All Rights Reserved
                        </p>
                        <ul className="flex flex-wrap gap-2 justify-center md:justify-end">
                            <li><a href="#" className="text-white">Terms of Use</a></li>
                            <li><a href="#" className="text-white">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
