
import Image from 'next/image';
import React from 'react';

const Projects = () => {
  
  const dataImage = [
    {id: 1, image: '/images/adminDashboard.jpeg', title: 'Modern Finance Dashboard UI', subtitle: 'Apps, UI/UX'},
    {id: 2, image: '/images/quraan.jpeg', title: 'Website Quraan using Next.js', subtitle: 'App, Quran'},
    {id: 3, image: '/images/ecommerce-using Next.jpeg', title: 'E-Commerce Platform', subtitle: 'React, Next.js, TailwindCSS'},
    {id: 4, image: '/images/ecommerce-light.jpeg', title: 'E-commerce Store', subtitle: 'Product Details, Add to Cart, Full Responsive'},
  ];

  return (
    <div className='pt-16 pb-16'>
      <h1 className='text-center text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-white'>
        A small selection of recent <br />
        <span className='text-cyan-200'>Projects</span>
      </h1>

      <div className='w-[90%] sm:w-[80%] md:w-[70%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 mt-16'>
        {dataImage.map((item) => (
          <div key={item.id} className='group'>
            <div data-aos='fade-up' data-aos-anchor-placement='top-center' data-aos-delay='0' className='relative w-full h-64 sm:h-72 md:h-80 rounded-lg overflow-hidden'>
              <Image
                src={item.image}
                alt={item.title}
                fill
                className='object-cover transition-transform duration-300 group-hover:scale-105'
              />
            </div>
            <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>{item.title}</h1>
            <p className='pt-2 font-medium text-white/80'>{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects;
