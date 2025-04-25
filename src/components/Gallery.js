import React, { useState, useRef, useEffect } from 'react';
import { FaPlay } from 'react-icons/fa';
import GalleryNail1 from '../assets/GalleryNail1.jpg';
import GalleryNail2 from '../assets/GalleryNail2.jpg';
import GalleryNail3 from '../assets/GalleryNail3.jpg';
import GalleryNail4 from '../assets/GalleryNail4.jpg';

const IMAGES = [GalleryNail1, GalleryNail2, GalleryNail3, GalleryNail4];
const IMAGE_WIDTH = 170; // Width of each image + margin
const CONTAINER_WIDTH = 30 * 16; // 30em to px (1em = 16px)

const Gallery = () => {
  // Store position instead of rearranging images
  const [position, setPosition] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef(null);
  
  // Preload images
  useEffect(() => {
    IMAGES.forEach(src => {
      const img = new Image();
      img.src = src;
    });
    
    if (sliderRef.current?.parentElement) {
      sliderRef.current.parentElement.style.width = `${CONTAINER_WIDTH}px`;
    }
  }, []);

  // Create a "circular" array with doubled images
  // This avoids any need to rearrange during animation
  const displayImages = [...IMAGES, ...IMAGES];

  const rotateImages = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const slider = sliderRef.current;
    if (!slider) return;

    // Get current position and calculate next position
    const nextPosition = (position + 1) % IMAGES.length;
    
    // Set up smooth transition
    slider.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    slider.style.transform = `translateX(-${(position + 1) * IMAGE_WIDTH}px)`;
    
    // When transition completes
    const handleTransitionEnd = () => {
      // Check if we need to loop back
      if (nextPosition === 0) {
        // Immediately jump back to the first set without transition
        slider.style.transition = 'none';
        slider.style.transform = 'translateX(0)';
        setPosition(0);
      } else {
        // Just update position
        setPosition(nextPosition);
      }
      
      // Allow more animations after a brief delay
      setTimeout(() => {
        setIsAnimating(false);
      }, 50);
    };

    slider.addEventListener('transitionend', handleTransitionEnd, { once: true });
  };

  // Common styles
  const styles = {
    container: {
      backgroundColor: '#FEE8ED',
      padding: '2rem',
      minHeight: '14em'
    },
    sliderContainer: {
      overflow: 'hidden',
      position: 'relative',
      isolation: 'isolate'
    },
    button: {
      position: 'absolute',
      top: '50%',
      right: '0.5em',
      transform: 'translateY(-50%)',
      backgroundColor: '#7d1260',
      border: 'none',
      color: '#FEE8ED',
      width: '2.5em',
      height: '2.5em',
      borderRadius: '50%',
      fontSize: '1rem',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0,
      zIndex: 10
    },
    slider: {
      display: 'flex',
      transform: `translateX(-${position * IMAGE_WIDTH}px)`,
      willChange: 'transform',
      width: `${displayImages.length * IMAGE_WIDTH}px`,
      backfaceVisibility: 'hidden',
      perspective: '1000px'
    },
    imageContainer: {
      width: `${IMAGE_WIDTH}px`,
      flexShrink: 0,
      contain: 'content',
      transform: 'translateZ(0)'
    },
    image: {
      height: '10em',
      width: '10em',
      borderRadius: '15px',
      objectFit: 'cover',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      backfaceVisibility: 'hidden',
      transform: 'translateZ(0)',
      loading: 'eager'
    }
  };

  return (
    <div style={styles.container}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={styles.sliderContainer}>
          <button 
            onClick={rotateImages} 
            style={styles.button} 
            aria-label="Rotate gallery"
            disabled={isAnimating}
          >
            <FaPlay style={{ fontSize: '0.8em' }} />
          </button>

          <div ref={sliderRef} style={styles.slider}>
            {displayImages.map((img, idx) => (
              <div 
                key={`${idx}-${img}`} 
                style={styles.imageContainer}
              >
                <img src={img} alt={`Nail design ${(idx % IMAGES.length) + 1}`} style={styles.image} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;