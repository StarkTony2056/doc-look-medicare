import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import vikas from '../../public/images/vikas.jpg';

export default function ImageSwiper() {
  const imageUrls = [
    vikas, // Corrected the usage of vikas image variable
    "https://cdn.pixabay.com/photo/2016/11/08/05/29/surgery-1807541_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/11/14/03/05/surgery-1822458_640.jpg",
    "https://w0.peakpx.com/wallpaper/855/812/HD-wallpaper-health-doctor-hospital-healthtips-doctor-health.jpg",
    "https://w0.peakpx.com/wallpaper/315/432/HD-wallpaper-medical-hospital-thumbnail.jpg",
    "https://thumbs.dreamstime.com/b/doctors-hospital-corridor-nurse-pushing-gurney-stretcher-bed-male-senior-female-patient-32154012.jpg"
  ];

  const [swiper, setSwiper] = React.useState(null);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (swiper) {
        const currentIndex = swiper.activeIndex;
        const slidesCount = swiper.slides.length;
        const nextIndex = (currentIndex + 1) % slidesCount;
        swiper.slideTo(nextIndex);
      }
    }, 5000); 

    return () => clearInterval(interval);
  }, [swiper]);

  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
      onSwiper={setSwiper}
    >
      {imageUrls.map((url, index) => (
        <SwiperSlide key={index}>
          <img src={url} className="relative h-64 overflow-hidden rounded-lg sm:h-80 w-full object-cover" alt={`Slide ${index}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
