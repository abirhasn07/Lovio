import React from 'react';
import { portfolioData } from '../data/portfolio';
import PortfolioGallery from './PortfolioGallery';
import PrimaryButton from './PrimaryButton';
import Title from './Title';

const Portfolio = () => {
	const titleData = {
		img: 'https://ik.imagekit.io/abirhasan/lovio_img/leaf_YoaiVXOvH.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666330546647',
		name: 'portfolio',
		title: 'Event design to make your heart skip a beat',
	};
	return (
		<section className="bg-primary py-4">
			<div className="w-[90%] mx-auto text-center">
				<Title titleData={titleData} />
				<div className="flex flex-col flex-nowrap lg:flex-row gap-4 w-[90%] mx-auto">
					{portfolioData.map((item, index) => {
						return <PortfolioGallery item={item} key={index} size={'20%'} />;
					})}
				</div>
				<PrimaryButton buttonText={'view our portfolio'} />
			</div>
		</section>
	);
};

export default Portfolio;
