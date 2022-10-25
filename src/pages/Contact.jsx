import React from 'react';
import Header from '../components/Header.jsx';
import InputFrom from '../components/InputFrom.jsx';
import Instagram from '../components/Instagram.jsx';
import Title from '../components/Title.jsx';
const Contact = () => {
	const titleData = {
		img: 'https://ik.imagekit.io/abirhasan/lovio_img/leaf_YoaiVXOvH.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666330546647',
		name: 'CONTACT',
		title: 'We look forward to connecting with you!',
	};
	return (
		<section className="bg-primary">
			<Header />
			<Title titleData={titleData} />
			<InputFrom />
			<Instagram />
		</section>
	);
};

export default Contact;
