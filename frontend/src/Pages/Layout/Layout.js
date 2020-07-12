import React from 'react';
import Header from '../../Header/Header'
import Footer from '../Footer/Footer'
import './Layout.css';
import ImageCarousel from '../carousel/Carousel';

function CustomLayout () {
	return(
		<div className="layout">
			<Header/>
			<ImageCarousel />
			<Footer/>
		</div>
	)
}

export default CustomLayout;

