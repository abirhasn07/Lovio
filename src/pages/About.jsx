import React from 'react';
import AboutContainer from '../components/About.jsx';
import AboutBanner from '../components/AboutBanner.jsx';
import Header from '../components/Header.jsx';
import Instagram from '../components/Instagram.jsx';
import Testimonial from '../components/Testimonial.jsx';
import Title from '../components/Title.jsx';
import { aboutPageData } from '../data/about.js';
const About = () => {
	const titleData = {
		img: 'https://ik.imagekit.io/abirhasan/lovio_img/leaf_YoaiVXOvH.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666330546647',
		name: 'WHO WE ARE',
		title: 'About Lovio',
	};
	return (
		<section>
			<Header />
			<Title titleData={titleData} />
			<div className="flex items-center justify-center bg-primary gap-2">
				{aboutPageData.map((item, index) => {
					return <AboutContainer item={item} key={index} />;
				})}
			</div>
			<AboutBanner />
			<Testimonial />
			<Instagram />
		</section>
	);
};

export default About;
