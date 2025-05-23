import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';

import img1 from '../assets/pinklilynail.jpg';
import img2 from '../assets/purpleflowernail.jpg';
import img3 from '../assets/purplesharpnail.jpg';
import img4 from '../assets/HeroBanner.png';

const images = [img1, img2, img3, img4];

function CustomNavigationOverlay() {
  const swiper = useSwiper();
  return (
    <>
      <button
        onClick={() => swiper.slidePrev()}
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          transform: 'translateY(-50%)',
          zIndex: 10,
          background: 'rgba(0,0,0,0.4)',
          color: '#fff',
          border: 'none',
          padding: '0.5rem 1rem',
          cursor: 'pointer',
        }}
      >
        ←
      </button>
      <button
        onClick={() => swiper.slideNext()}
        style={{
          position: 'absolute',
          top: '50%',
          right: 0,
          transform: 'translateY(-50%)',
          zIndex: 10,
          background: 'rgba(0,0,0,0.4)',
          color: '#fff',
          border: 'none',
          padding: '0.5rem 1rem',
          cursor: 'pointer',
        }}
      >
        →
      </button>
    </>
  );
}

function SlidingGallery() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        paddingBottom: '0px', // eliminate extra padding
      }}
    >
      <Swiper
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={600}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                width: '100%',
                aspectRatio: '4 / 3',
                overflow: 'hidden',
                background: '#eee',
                margin: 0,
                padding: 0,
              }}
            >
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
          </SwiperSlide>
        ))}
        <CustomNavigationOverlay />
      </Swiper>
    </div>
  );
}

export default SlidingGallery;
