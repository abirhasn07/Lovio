import React from 'react';
import { portfolioData } from '../data/portfolio';

const Portfolio = () => {
	return (
		<section className="bg-primary py-4">
			<div className="w-[90%] mx-auto text-center">
				<div className="flex justify-center items-center flex-col gap-2">
					<img
						src="https://ik.imagekit.io/abirhasan/lovio_img/leaf_YoaiVXOvH.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666330546647"
						alt="green leaf"
						width={'50px'}
					/>
					<p className="text-secondary ">PORTFOLIO</p>
					<h2 className="text-[42px] text-secondary text-center leading-none font-primary w-[95%] mx-auto mb-4 lg:text-[62px] lg:w-[70%] ">
						Event design to make your heart skip a beat
					</h2>
				</div>
				<div className="flex flex-col lg:flex-row justify-center items-center mb-8">
					{portfolioData.map((item, index) => {
						return (
							<figure
								className="flex flex-col justify-center items-center py-4 lg:w-[23%]"
								key={index}
							>
								<img
									src={item.imgUrl}
									alt={item.name}
									loading="lazy"
									height={'240px'}
									className="object-cover w-[95%] mx-auto hover:scale-95 duration-300"
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
					})}
				</div>
				<a
					href="#"
					className="uppercase border-[1px] py-2 px-4 text-base rounded-sm text-secondary border-accent hover:bg-accent hover:text-white hover:duration-300 hover:shadow shadow-accent"
				>
					View all portfolio
				</a>
			</div>
		</section>
	);
};

export default Portfolio;
