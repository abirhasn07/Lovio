import React from 'react';

const ServiceCol = ({ item }) => {
	return (
		<div className="flex flex-col justify-center items-center  py-0 lg:py-8 lg:flex-row lg:w-[90%] mx-auto border-b-[1px] border-gray-300 mb-8">
			<div className="flex flex-col justify-center items-start lg:w-[30%] lg:flex-row lg:items-start lg:justify-start w-[90%] ">
				<img src={item.img} alt={'green leaf'} className="w-[75px]" />
				<h3 className="text-[28px] my-2">{item.titleName}</h3>
			</div>
			<div className="text-left w-[90%] mx-auto">
				<p className="text-base my-4">{item.description1}</p>
				<p className="text-base my-4">{item.description2}</p>
			</div>
		</div>
	);
};

export default ServiceCol;
