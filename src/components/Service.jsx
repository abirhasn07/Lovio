import React from 'react';
import { serviceData } from '../data/service';

const Service = () => {
	return (
		<section className="bg-primary py-8">
			<div className="flex w-[90%] mx-auto justify-center items-center flex-col lg:flex-row lg:gap-4">
				{serviceData.map((item, index) => {
					return (
						<div
							className="flex flex-col w-full text-center items-center py-4 lg:w-[30%] cursor-pointer"
							key={index}
						>
							<img
								src={item.imgUrl}
								alt={item.title}
								width="75px"
								loading="lazy"
							/>
							<h3 className="text-xl py-2 text-secondary lg:text-2xl">
								{item.title}
							</h3>
							<p className="text-sm pb-2 text-secondary w-[70%] lg:text-base lg:w-[95%]">
								{item.description}
							</p>
							<button
								type="submit"
								className="text-secondary text-sm uppercase border-b-2 border-accent font-secondary p-0 hover:border-2 duration-200 lg:w-[110px] rounded-sm lg:text-sm"
							>
								{item.buttonText}
							</button>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Service;
