import React from 'react';
import leaf from '../assets/leaf.png';
const Hero = () => {
	return (
		<section className="bg-primary ">
			<div className="w-[90%] flex flex-col justify-center items-center py-12 mx-auto">
				<img src={leaf} alt="leaf" width={'75px'} className="lg:w-[100px]" />
				<h5 className="text-sm text-secondary text-center w-full my-4 font-medium tracking-wider font-secondary lg:text-base">
					LEGENDARY PARTIES
				</h5>
				<h1 className="text-[42px] text-secondary text-center leading-none font-primary w-[95%] mx-auto mb-4 lg:text-[62px] lg:w-[70%] ">
					Destination Wedding Planners & Event Designers
				</h1>
				<button
					type="submit"
					className="text-secondary text-sm uppercase border-b-2 border-accent font-secondary p-0 hover:border-2 duration-200 lg:w-[180px] rounded-sm lg:text-base"
				>
					book a consult
				</button>
			</div>
		</section>
	);
};

export default Hero;
