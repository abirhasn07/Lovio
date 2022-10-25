import React from 'react'
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { Journal } from './pages/Journal';
import Portfolio from './pages/Portfolio';
import Service from './pages/Service';
import Shop from './pages/Shop';

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/portfolio" element={<Portfolio />} />
			<Route path="/service" element={<Service />} />
			<Route path="/journal" element={<Journal />} />
			<Route path="/about" element={<About />} />
			<Route path="/shop" element={<Shop />} />
			<Route path="/contact" element={<Contact />} />
		</Routes>
	);
};

export default App