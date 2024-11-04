import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // import the carousel styles
import img11 from "../images/img11.webp";
import img1 from "../images/img2.webp";
import img2 from "../images/img3.jpg";
import img3 from "../images/img6.png";

// Landing Page carousel
const HomeCarousel = () => {
    return (
        <div className='mx-auto w-full h-full overflow-hidden'>
            <Carousel 
                autoPlay 
                infiniteLoop 
                showThumbs={false} 
                showStatus={false} 
                dynamicHeight={false}
                interval={3000}
            >
                <div className='w-full h-96'> 
                    <img src={img11} alt="Image 1" className='w-full h-full object-cover' />
                </div>
                <div className='w-full h-96'> 
                    <img src={img1} alt="Image 2" className='w-full h-full object-cover' />
                </div>
                <div className='w-full h-96'> 
                    <img src={img2} alt="Image 3" className='w-full h-full object-cover' />
                </div>
            </Carousel>
        </div>
    );
};

export default HomeCarousel;
