import React from 'react';

const PrimaryButton = ({ buttonText }) => {
	return (
		<a
			href="#"
			className="uppercase border-[1px] py-2 px-4 text-base rounded-sm text-secondary border-accent hover:bg-accent hover:text-white hover:duration-300 hover:shadow shadow-accent"
		>
			{buttonText}
		</a>
	);
};

export default PrimaryButton;
