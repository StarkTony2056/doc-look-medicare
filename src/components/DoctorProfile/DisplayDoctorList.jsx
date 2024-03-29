import React from 'react';
import DoctorProfile from './DoctorProfile';
import doctorData from './doctorData.json'; 
import SwiperComponent from '../ImageSwiper/SwiperComponent';

function DisplayDoctorList() {
  const doctorProfiles = doctorData.map((doctor, index) => (
    <DoctorProfile key={index} doctor={doctor} className="w-full h-full object-cover mt-0" />
  ));

  return (
    <div className="px-1 flex justify-center items-center h-screen mb-15 mt-0">
      <SwiperComponent data={doctorProfiles} effect="" />
    </div>  
  );
}

export default DisplayDoctorList;
