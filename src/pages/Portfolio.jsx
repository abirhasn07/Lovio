import React from 'react';
import Header from '../components/Header';
import Instagram from '../components/Instagram';
import PortfolioGallery from '../components/PortfolioGallery';
import Title from '../components/Title';
import { portfolioData } from '../data/portfolio';

const Portfolio = () => {
	const titleData = {
		img: 'https://ik.imagekit.io/abirhasan/lovio_img/leaf_YoaiVXOvH.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666330546647',
		name: 'portfolio',
		title: 'Event design to make your heart skip a beat',
	};
	return (
		<section className="bg-primary">
			<Header />
			<Title titleData={titleData} />
			<div className="flex flex-col flex-wrap gap-4 lg:flex-row justify-center items-center pb-8">
				{portfolioData.map((item, index) => {
					return <PortfolioGallery item={item} key={index} size={'45%'} />;
				})}
			</div>
			<Instagram />
		</section>
	);
};

export default Portfolio;
