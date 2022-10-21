import React from 'react';
import { aboutData } from '../data/about';

const About = () => {
	return (
		<section className="bg-primary">
			{aboutData.map((item, index) => {
				return (
					<div
						className={`flex flex-col w-[85%] mx-auto py-8`}
						key={index}
						id={`${item.class}`}
					>
						<div className=" w-[90%] mx-auto lg:w-[58%]">
							<img
								src={item.leafImg}
								alt="leaf image"
								width={'50px'}
								className="py-2"
							/>
							<p className="text-base text-secondary font-secondary font-normal">
								{item.title}
							</p>
							<h2 className=" text-[38px] lg:text-xl w-full font-normal text-secondary lg:w-[80%]">
								{item.headline}
							</h2>
							<p className="py-6 text-base lg:w-[70%] text-secondary">
								{item.description}
							</p>
							<button className="uppercase border-[1px] py-2 px-4 text-base rounded-sm text-secondary border-accent hover:bg-accent hover:text-white hover:duration-300 hover:shadow shadow-accent">
								{item.buttonText}
							</button>
						</div>
						<div className=" w-[90%] mx-auto lg:w-[40%]">
							<img
								src={item.imgUrl}
								className="w-full rounded object-cover"
								loading="lazy"
							/>
						</div>
					</div>
				);
			})}
		</section>
	);
};

export default About;
