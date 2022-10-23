import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { Journal } from './pages/Journal';
import Portfolio from './pages/Portfolio';
import Service from './pages/Service';

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/portfolio" element={<Portfolio />} />
			<Route path="/service" element={<Service />} />
			<Route path="/journal" element={<Journal />} />
		</Routes>
	);
};

export default App