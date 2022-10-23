import React from 'react';

const PortfolioGallery = ({ item, size }) => {
	return (
		<figure
			className={`flex flex-col w-[95%] justify-center items-center py-4 lg:w-[${size}]`}
		>
			<img
				src={item.imgUrl}
				alt={item.name}
				loading="lazy"
				height={'240px'}
				className="object-cover lg:w-full mx-auto hover:scale-95 duration-300"
			/>
			<h4 className="text-[32px] text-secondary">{item.name}</h4>
			<button
				type="submit"
				className="text-secondary text-base uppercase border-b-2 border-accent font-secondary p-0 mt-4 hover:border-2 duration-200 lg:w-[110px] rounded-sm lg:text-sm lg:mt-2"
			>
				Learn More
			</button>
		</figure>
	);
};

export default PortfolioGallery;
