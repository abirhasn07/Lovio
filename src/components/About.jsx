import React from 'react';

const AboutContainer = ({ item }) => {
	return (
		<div className=" w-[31%] ">
			<img
				src={item.imgUrl}
				alt="wedding photoshoots"
				className="object-cover h-[500px] w-full"
				loading="lazy"
			/>
		</div>
	);
};

export default AboutContainer;
