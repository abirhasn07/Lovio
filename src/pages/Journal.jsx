import React from 'react';
import Header from '../components/Header';
import SingleBlog from '../components/SingleBlog';
import Title from '../components/Title';
import { journalData } from '../data/journal';

export const Journal = () => {
	const titleData = {
		img: 'https://ik.imagekit.io/abirhasan/lovio_img/leaf_YoaiVXOvH.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666330546647',
		name: 'BLOGS',
		title: 'Our Journals',
	};
	return (
		<section className="bg-primary">
			<Header />
			<Title titleData={titleData} />
			<div>
				{journalData.map((item, index) => {
					return <SingleBlog item={item} key={index} />;
				})}
			</div>
		</section>
	);
};
