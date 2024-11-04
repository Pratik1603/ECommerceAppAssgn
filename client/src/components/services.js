import React from 'react';

const Services = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div className="service text-center">
          <h3 className="text-2xl font-semibold mb-2">Free Shipping</h3>
        </div>
        <div className="service text-center">
          <h3 className="text-2xl font-semibold mb-2">Money-Back Guarantee</h3>
        </div>
        <div className="service text-center">
          <h3 className="text-2xl font-semibold mb-2">24/7 Support</h3>
        </div>
      </div>
    </section>
  );
};

export default Services;
