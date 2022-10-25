import React from 'react';
import Header from '../components/Header';
import Instagram from '../components/Instagram';
import Product from '../components/Product';
import Title from '../components/Title';
import { products } from '../data/shop.js';
const Shop = () => {
	const titleData = {
		img: 'https://ik.imagekit.io/abirhasan/lovio_img/leaf_YoaiVXOvH.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666330546647',
		name: 'Shop',
		title: 'Wedding Shop',
	};
	return (
		<section className="bg-primary">
			<Header />
			<Title titleData={titleData} />
			<div className="flex flex-wrap justify-center items-center gap-4">
				{products.map((item, index) => {
					return <Product item={item} key={index} />;
				})}
			</div>
			<Instagram />
		</section>
	);
};

export default Shop;
