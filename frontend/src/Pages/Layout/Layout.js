import React from 'react';
import Header from '../../Header/Header'
import Footer from '../Footer/Footer'
import './Layout.css';

function CustomLayout () {
	return(
		<div className="layout">
			<Header/>
			<Footer/>
		</div>
	)
}

export default CustomLayout;

