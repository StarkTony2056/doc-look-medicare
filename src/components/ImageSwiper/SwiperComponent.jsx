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
  const [autoplayPaused, setAutoplayPaused] = React.useState(false);
  const [slidesPerView, setSlidesPerView] = React.useState(getSlidesPerView());

  React.useEffect(() => {
    function resizeHandler() {
      setSlidesPerView(getSlidesPerView());
    }

    resizeHandler();

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  function getSlidesPerView() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1024) {
      return 3;
    } else if (screenWidth >= 768) {
      return 2;
    } else {
      return 1;
    }
  }

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (swiper && !autoplayPaused) {
        swiper.slideNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [swiper, autoplayPaused]);

  const handleTouchStart = () => {
    setAutoplayPaused(true);
  };

  const handleTouchEnd = () => {
    setAutoplayPaused(false);
  };

  return (
    <Swiper
      effect={effect}
      grabCursor={true}
      centeredSlides={false}
      slidesPerView={slidesPerView}
      spaceBetween={30} 
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      pagination={{
        clickable: true, 
      }}
      loop={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
      onSwiper={setSwiper}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {data.map((component, index) => (
        <SwiperSlide key={index}>{component}</SwiperSlide>
      ))}
    </Swiper>
  );
}
