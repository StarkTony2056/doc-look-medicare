import React from 'react';
import DoctorProfile from './DoctorProfile';
import doctorData from './doctorData.json'; 
import SwiperComponent from '../ImageSwiper/SwiperComponent';

function DisplayDoctorList() {
  const doctorProfiles = doctorData.map((doctor, index) => (
    <DoctorProfile key={index} doctor={doctor} className="w-full h-full object-cover mt-0" />
  ));

  return (
    <div className='mb-4 mt-4 items-center gap-1'>
      <h2 className='font-bold text-4xl tracking-wide text-center mb-5'>
        Popular <span className='text-primary'>Doctor</span>
      </h2>
      <div className="-mt-1">
        <SwiperComponent data={doctorProfiles} effect="" />
      </div>  
    </div>
  );
}

export default DisplayDoctorList;
