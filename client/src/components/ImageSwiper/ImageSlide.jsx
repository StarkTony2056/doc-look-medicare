// ImageSlide.jsx
import React from 'react';
import SwiperComponent from './SwiperComponent';
import Doctorimage from './Doctorimage.json'; 

function ImageSlide({ spaceBetween, slidesPerView }) {
  const images = Doctorimage.map((url, index) => (
    <div key={index}>
      <img src={url.image} alt={url.name} className="relative h-64 overflow-hidden rounded-lg sm:h-80 w-full object-cover"/>
    </div>
  ));

  return (  
    <SwiperComponent data={images} effect="coverflow" />
  );
}

export default ImageSlide;
