import React from 'react';
import Header from '../components/Header';
import Instagram from '../components/Instagram';
import ServiceCol from '../components/ServiceCol';
import Title from '../components/Title';
import { ourService } from '../data/service';

const Service = () => {
	const titleData = {
		img: 'https://ik.imagekit.io/abirhasan/lovio_img/leaf_YoaiVXOvH.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666330546647',
		name: 'SERVICES',
		title: 'Our Services',
	};
	return (
		<section className="bg-primary">
			<Header />
			<Title titleData={titleData} />
			{ourService.map((item, index) => {
				return <ServiceCol item={item} key={index} />;
			})}
			<Instagram />
		</section>
	);
};

export default Service;
