import React from 'react';
import Input from './Input';

const InputFrom = () => {
	return (
		<div>
			<form className="flex flex-wrap w-[95%] lg:w-[75%] mx-auto justify-center items-center gap-4 bg-white py-8 px-4 rounded my-8">
				<Input
					data="FIRST NAME
                    "
					placeholder="First name"
					type="text"
				/>
				<Input
					data="LAST NAME
                    "
					placeholder="Last name"
					type="text"
				/>
				<Input
					data="EMAIL
                    "
					placeholder="Email Address "
					type="email"
				/>
				<Input
					data="PHONE
                    "
					placeholder="Phone Number"
					type="tel"
				/>
				<Input
					data="EVENT TYPE
                    "
					placeholder="event type"
					type="text"
				/>
				<Input
					data="LOCATION
                    "
					placeholder="location"
					type="text"
				/>

				<input
					type="submit"
					value="submit"
					className=" w-[90%] lg:w-[35%] bg-secondary py-[8px] text-white rounded text-[28px] uppercase cursor-pointer hover:border-[1px] border-secondary hover:bg-transparent hover:text-secondary duration-300"
				/>
			</form>
		</div>
	);
};

export default InputFrom;
