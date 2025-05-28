import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';

import img1 from '../assets/pinklilynail.jpg';
import img2 from '../assets/purpleflowernail.jpg';
import img3 from '../assets/purplesharpnail.jpg';
import img4 from '../assets/HeroBanner.png';
import img5 from '../assets/pinkheartnail.png'; 
import img6 from '../assets/greenpinknails.png'; 

import arrow from '../assets/arrowdown.svg'; 

const images = [img1, img2, img3, img4, img5, img6,img1, img2, img3, img4, img5, img6];

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
          transform: 'translateY(-50%) rotate(90deg)', // flipped for previous
          zIndex: 10,
          background: 'transparent',
          border: 'none',
          padding: '1em',
          cursor: 'pointer',
        }}
      >
        <img
          src={arrow}
          alt="Previous"
          style={{
            width: '30px',
            height: '30px',
          }}
        />
      </button>

      <button
        onClick={() => swiper.slideNext()}
        style={{
          position: 'absolute',
          top: '50%',
          right: 0,
          transform: 'translateY(-50%) rotate(-90deg)',
          zIndex: 10,
          background: 'transparent',
          border: 'none',
          padding: '1em',
          cursor: 'pointer',
        }}
      >
        <img
          src={arrow}
          alt="Next"
          style={{
            width: '30px',
            height: '30px',
          }}
        />
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
        backgroundColor: '#f9c4d2',
        padding: '0 5vw',
        boxSizing: 'border-box',
      }}
    >
      <Swiper
        slidesPerView={5}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={600}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                width: '100%',
                aspectRatio: '1/1',
                padding: '0.5em',
                boxSizing: 'border-box',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  boxSizing: 'border-box',
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
                    borderRadius: '8px',
                  }}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
        <CustomNavigationOverlay />
      </Swiper>
    </div>
  );
}

export default SlidingGallery;