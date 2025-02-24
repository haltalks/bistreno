import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';

// styles
import 'assets/css/bootstrap.min.css';
import 'assets/scss/now-ui-kit.scss?v=1.5.0';
import 'assets/demo/demo.css?v=1.5.0';
import 'assets/demo/react-demo.css?v=1.5.0';
import 'assets/demo/nucleo-icons-page-styles.css?v=1.5.0';
import 'index.css';
// pages
import AboutUs from 'views/AboutUs.js';
import ContactUs from 'views/ContactUs.js';
import Presentation from 'views/Presentation.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<BrowserRouter>
		<Routes>
			<Route path='/about' element={<AboutUs />} />
			<Route path='/contact' element={<ContactUs />} />
			<Route path='/' element={<Presentation />} />
			<Route path='*' element={<Navigate to='/' replace />} />
		</Routes>
	</BrowserRouter>
);
