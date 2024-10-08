import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">About Clay Crafts</h1>

      <div className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-center mb-4">Clay Product Making Process</h2>
        <div className="flex justify-center">
          <div className="relative pb-[56.25%] w-full max-w-4xl">
            <iframe 
              className="absolute top-0 left-0 w-full h-full" 
              src="https://www.youtube.com/embed/CVkYLOU1Q-g" 
              title="Clay Product Making Process" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <p className="text-base md:text-lg leading-relaxed mb-4">
        Welcome to Clay Crafts, your one-stop e-commerce platform dedicated to offering the finest clay products. Based out of Bangalore, we are passionate about celebrating the rich cultural heritage of India through beautifully crafted clay items. Our products range from traditional cookware to modern home decor, each piece reflecting the craftsmanship of skilled artisans.
      </p>
      <p className="text-base md:text-lg leading-relaxed mb-4">
        Though Clay Crafts is currently in its initial phase, our mission is to create a seamless online shopping experience where customers can discover and purchase unique clay products. We believe in promoting sustainable living, and our products are designed to be both functional and eco-friendly.
      </p>
      <p className="text-base md:text-lg leading-relaxed mb-4">
        Clay Crafts was founded by <b>Mamta Gola</b>, who has a deep passion for preserving and promoting traditional art forms. Mamta's vision is to make these beautiful clay products accessible to people across the globe. If you wish to get in touch with Mamta, you can reach her via email at <b><a href="mailto:mamta1998gola@gmail.com" className="text-primary hover:underline">mamta1998gola@gmail.com</a></b> or contact her via WhatsApp or call at <b><a href="tel:+917300646940" className="text-primary hover:underline">+91 7300646940</a></b>.
      </p>
      
      <div className="text-center">
        <Link
          to="/"
          className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition duration-300"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
