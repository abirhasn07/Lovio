import React from 'react';
import banner1 from '../assets/banner01.jpeg';
import banner2 from '../assets/banner02.jpeg';
import banner3 from '../assets/banner03.jpeg';
const HeroBanner = () => {
	return (
		<div className="max-w-[1440px] bg-primary pb-8 lg:py-12 ">
			<div className="flex w-full mx-auto relative justify-center lg:w-[90%]">
				<img src={banner2} alt="wedding photoshoots" className='w-[50%] scale-[.9] -rotate-6 z-0 absolute object-cover left-[5%] bottom-0' id='img'  loading='lazy'/>
				<img src={banner1} alt="wedding photoshoots" className='w-[50%] z-10 scale-105' loading='lazy' />
				<img src={banner3} alt="wedding photoshoots" className='w-[50%] scale-[.9] absolute object-cover rotate-6 right-[5%] bottom-0' loading='lazy' />
			</div>
		</div>
	);
};

export default HeroBanner;
