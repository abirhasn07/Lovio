import React from 'react'
import About from '../components/About';
import Header from '../components/Header';
import Hero from '../components/Hero';
import HeroBanner from '../components/HeroBanner';
import Instagram from '../components/Instagram';
import Portfolio from '../components/Portfolio';
import Service from '../components/Service';
import Testimonial from '../components/Testimonial';

const Home = () => {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<HeroBanner />
				<Service />
				<About />
				<Portfolio />
				<Testimonial />
				<Instagram />
			</main>
		</>
	);
};

export default Home