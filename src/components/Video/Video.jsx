import { useRef, useEffect } from 'react';
import './Video.css';

const Video = () => {

  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    // Intersection Observer configuration
    const options = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.5 // Trigger when 50% of the video is visible
    };

    // Callback function to handle intersection
    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          video.play().catch(error => {
            console.error('Autoplay was prevented:', error);
          });
        } else {
          video.pause();
          video.currentTime = 0;
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    // Start observing the video element
    observer.observe(video);

    return () => {
      observer.unobserve(video);
    };
  }, []);



  return (
    <div className="video-container">
    <video
        autoPlay controls loop
        className="responsive-video"
        src="WellnessVideo.mp4"
        ref={videoRef}
    />
    </div>
  )
}

export default Video