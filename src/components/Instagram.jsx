import React from 'react';
import { instagramData } from '../data/instagram';

const Instagram = () => {
	return (
		<section className="bg-primary pb-8">
			<h2 className="text-[42px] text-secondary text-center leading-none font-primary w-[95%] mx-auto mb-4 lg:text-[62px] lg:w-[70%] ">
				Instagram
			</h2>
			<div className="w-[90%] flex justify-center items-center gap-4 mx-auto flex-wrap">
				{instagramData.map((item, index) => {
					return (
						<div
							className={`${item.class} hover:scale-90 duration-300 cursor-pointer`}
							key={index}
						>
							<img src={item.imgUrl} alt="wedding image" />
						</div>
					);
				})}
			</div>
		</section>
	);
};
export default Instagram;
