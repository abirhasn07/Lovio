import React from 'react';

const Input = ({ data, type, placeholder }) => {
	return (
		<div className="block  w-[90%] lg:w-[45%] mx-auto ">
			<label className="block font-primary text-[24px] text-secondary">
				{data}
			</label>
			<input
				type={type}
				placeholder={placeholder}
				required
				className="font-primary capitalize bg-transparent border-b-[.1px] border-secondary text-base w-full mt-0 py-2 focus:outline-none "
			/>
		</div>
	);
};

export default Input;
