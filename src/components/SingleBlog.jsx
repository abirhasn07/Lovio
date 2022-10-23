import React from 'react';
import PrimaryButton from './PrimaryButton';

const SingleBlog = ({ item }) => {
	console.log(item.smallThumb);
	return (
		<figure className="w-[95%] mx-auto flex justify-between items-center flex-wrap  py-4 lg:py-10 -z-50">
			<div className="w-[95%] mx-auto lg:w-[45%]">
				<img
					src={item.smallThumb}
					alt=""
					className="w-full object-cover scale-105 hover:scale-90 duration-300 cursor-pointer"
				/>
			</div>
			<figcaption className="w-[95%] mx-auto lg:w-[45%] mt-4 text-secondary">
				<p className="text-base mb-2">{item.date}</p>
				<h2 className="text-lg lg:text-[66px] leading-[90%]">{item.title1}</h2>
				<p className="text-sm lg:text-[28px] leading-[100%] mb-4 mt-2">
					{item.subtitle}
				</p>
				<PrimaryButton buttonText={'Read More'} />
			</figcaption>
		</figure>
	);
};

export default SingleBlog;
