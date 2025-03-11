import { useRef, useEffect } from "react";
import pyramidsVideo from "../assets/pyramids.mp4";

import img1 from "../assets/pillars.jpg";
import img2 from "../assets/oldEgypt.jpg";
import img3 from "../assets/Egyptology.jpg"
import img4 from "../assets/Kemet.jpg"
import img5 from "../assets/lotusFlower.jpg"
import img6 from "../assets/pharaoh.jpg"
import img7 from "../assets/peace.jpg"

const images = [img1, img2, img3, img4, img5, img6, img7];
const Hero = () => {
  const galleryRef = useRef<HTMLDivElement>(null);

  // Auto-scrolling effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (galleryRef.current) {
        galleryRef.current.scrollBy({ left: 200, behavior: "smooth" });

        // Loop back to start when reaching the end
        if (
          galleryRef.current.scrollLeft + galleryRef.current.clientWidth >=
          galleryRef.current.scrollWidth
        ) {
          galleryRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Manual scrolling functions
  const scrollLeft = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="main">
      <div className="overlay"></div>
      <video src={pyramidsVideo} autoPlay muted loop playsInline />
      <div className="content">
        <h1>Experience a</h1>
        <h1>Breathtaking Adventure</h1>
        <button>Explore more</button>
      </div>
      <button className="scroll-button left" onClick={scrollLeft}>
          ‹
        </button>

        <div className="image-gallery" ref={galleryRef}>
          {/* <div className="image-container"> */}
            {images.map((img, index) => (
              <img key={index} src={img} alt={`Gallery ${index + 1}`} />
            ))}
          {/* </div> */}
        </div>

        <button className="scroll-button right" onClick={scrollRight}>
          ›
        </button>
    </div>
  );
};
export default Hero;
