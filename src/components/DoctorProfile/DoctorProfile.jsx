import React from 'react';
import Rating from '../Rating/Rating'; 
import './DoctorProfile.css'; 
import { AiOutlineMail, AiOutlineShareAlt } from 'react-icons/ai';
import { Button } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaUserMd, FaMapMarkerAlt } from 'react-icons/fa';
import { MdChatBubbleOutline } from 'react-icons/md';

function DoctorProfile({ doctor }) {
  const { name, specialty, location, aboutMe, rating, profilePic, socialLinks } = doctor;

  return (
    <div className="left-5 md:left-11 card shadow-md mb-10 mt-2 relative w-80 h-96 rounded-2xl p-1">
      <div className="absolute top-4 right-8 flex gap-2">
        <button className="mail">
          <AiOutlineMail className="text-red-700 text-xl" /> 
        </button>
        <button className="share ml-2">
          <AiOutlineShareAlt className="text-blue-500 text-xl" /> 
        </button>
      </div>
      <div className="profile-pic">
        <img src={profilePic} alt="Profile" className="object-cover w-full h-full transform hover:scale-250 hover:object-left transition-all duration-500 ease-in-out" />
      </div>
      <div className="bottom bg-blue-50">
        <Rating rating={rating} />
        <div className="content absolute bottom-20 left-6 right-6 h-40">
          <h2 className="name text-lg font-semibold text-blue-600">
            {name}
          </h2>
          <div className="specialty flex items-center gap-2">
            <FaUserMd className="text-black" />
            <span className="text-sm font-bold text-blue-600">{specialty}</span>
          </div>
          <div className="location flex items-center gap-2">
            <FaMapMarkerAlt className="text-red-500" />
            <span className="text-sm font-bold text-blue-600">{location}</span>
          </div>
          <p className="about-me text-black mt-2">
            <span className="text-sm font-bold text-blue-600">{aboutMe}</span>
          </p>
        </div>
        <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
          <div className="flex gap-3">
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-blue-900 text-xl transform hover:scale-250 transition-all duration-500 ease-in-out" /> 
            </a>
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-red-700 text-xl transform hover:scale-250 transition-all duration-500 ease-in-out" /> 
            </a>
            <MdChatBubbleOutline className="text-gray-900 text-xl transform hover:scale-250 transition-all duration-500 ease-in-out" />
          </div>
          <Button className="btn btn-primary bg-gradient-to-b from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white shadow-md">Appointment</Button>
        </div>
      </div>
    </div>
  );
}

export default DoctorProfile;
