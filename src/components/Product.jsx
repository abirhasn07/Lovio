import React from 'react';
import { formatCurrency } from '../utilities/formatCurrency';

const Product = ({ item }) => {
	return (
		<div className="w-[95%] lg:w-[30%] text-center md:w-[45%]">
			<img
				src={item.img}
				alt={item.name}
				className="hover:scale-95 duration-300 cursor-pointer"
			/>
			<h4 className="text-2xl text-secondary mt-2">{item.name}</h4>
			<p className="text-[18px] text-secondary mt-2">{item.description}</p>
			<p className="text-[24px] text-accent mt-2">
				USD {formatCurrency(item.price)}
			</p>
		</div>
	);
};

export default Product;
