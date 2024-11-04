import React from 'react';
import HomeCarousel from './homeCarousel';
import Category from './categories';
import img1 from "../images/veggi.jpeg";
import img2 from "../images/fashion.jpeg";
import img3 from "../images/grocery.png";

const Hero = () => {
  const categories = [
    {
      id: 1,
      image: img1, 
      title: 'Vegetable',
    },
    {
      id: 2,
      image: img2, 
      title: 'Fashion',
    },
    {
      id: 3,
      image: img3, 
      title: 'Grocery',
    },
  ];

  return (
    <div>
      <section
        className="bg-cover bg-center h-[400px] flex justify-center items-center text-white"
        style={{ backgroundImage: "url('/path-to-image.jpg')" }} // Replace with the path to your background image
      >
        <HomeCarousel />
      </section>

      <section className="py-16 bg-gray-50">
        <div className="text-center mt-12 mb-12">
          <h1 className="text-5xl font-bold">
            Simply Unique, <br /> Simply Better.
          </h1>
          <p className="text-gray-500 mt-4">
            Explore more items in this shop.
          </p>
        </div>

        {/* Categories Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-16">
          {categories.map((category) => (
            <Category key={category.id} image={category.image} title={category.title} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;
