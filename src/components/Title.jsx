import React from 'react';

const Title = ({ titleData }) => {
	return (
		<section className="bg-primary lg:py-12 py-8">
			<div className="w-[90%] lg:w-[80%] mx-auto flex flex-col justify-center items-center">
				<img src={titleData.img} alt={titleData.name} width="50px" />
				<h4 className="text-secondary uppercase text-base">{titleData.name}</h4>
				<h2 className="lg:text-xl text-secondary text-center lg:w-[70%] mx-auto leading-[100%] text-[42px] w-full">
					{titleData.title}
				</h2>
			</div>
		</section>
	);
};

export default Title;
