import React from 'react';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Home from './pages/Home.js';
import Posts from './pages/Posts.js';

function App() {
return (
	<div>
		<Router>
			<div>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />}>
					</Route>

					<Route path='/about' element={<About/>}>
					</Route>

					<Route path='/contact' element={<Contact/>}>
					</Route>
					
					<Route path='/posts' element={<Posts/>}>
					</Route>
				</Routes>
			</div>
		</Router>
	</div>
);
}

export default App;
