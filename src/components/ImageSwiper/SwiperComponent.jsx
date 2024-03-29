import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function SwiperComponent({ data, effect }) {
  if (!data || data.length === 0) {
    return null; 
  }

  const [swiper, setSwiper] = React.useState(null);
  const [slidesPerView, setSlidesPerView] = React.useState(3); 
  const [spaceBetween, setSpaceBetween] = React.useState(30); 

  React.useEffect(() => {
    const resizeHandler = () => {
 
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1024) {
        setSlidesPerView(3);
        setSpaceBetween(30);
      } else if (screenWidth >= 768) {
        setSlidesPerView(2);
        setSpaceBetween(20);
      } else {
        setSlidesPerView(1);
        setSpaceBetween(10);
      }
    };

    resizeHandler();

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

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
      effect={effect}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
      onSwiper={setSwiper}
    >
      {data.map((component, index) => (
        <SwiperSlide key={index}>{component}</SwiperSlide>
      ))}
    </Swiper>
  );
}
