import React from 'react';
import {
	Row,
	Col
} from 'react-bootstrap';
import ndtv from '../../Assets/NDTV.png';
import indianexpress from '../../Assets/indianexpress.jpg';
import opindia from '../../Assets/opindia.png';
import rickshaw from '../../Assets/rickshawpuller.jpg';
import './Media.css';

function MediaCard() {

	return (
		<section id="sc-media">
			<h2 style={{ textAlign: 'center', color: 'green', fontWeight: 'lighter' }}>IITD Benevolent Fund in News</h2>
			<hr style={{ backgroundColor: 'orange', width: '80%' }} />
			<Row>
				<Col sm={6} style={{ paddingTop: '10px', paddingLeft: '30px' }} >
					<img alt='img-iitd' src={rickshaw} style={{ width: '100%', height: '420px' }} />
				</Col>
				<Col sm={6} >
					{/* First Article */}
					<img alt='media_icon' className='newsIcon' src={ndtv} />
					<span className='date'>31st March 2020</span>
					<p>
						IIT Delhi institutes 'BENEVOLENT FUND' to help people of the lower economic strata within campus,
						receiving voluntary contributions in a formal and transparent manner for meeting minimal needs
						of the people of campus community.
					</p>
					<a href="https://www.ndtv.com/education/covid-19-iit-delhi-institutes-benevolent-fund-to-help-people-of-the-lower-economic-strata-within-cam-2203640" >Complete Article</a>
					<hr/>
					{/* Second Article */}
					<img alt='media_icon' className='newsIcon' src={indianexpress} />
					<span className='date'>31st March 2020</span>
					<p>
						IIT's Benevolent Fund Campaign collects over 9.20 lakh within a week,
						covering expenses of it's campus community(daily-wagers and economically
						weaker section of the society.
					</p>
					<a href="https://indianexpress.com/article/education/iit-launches-fund-to-support-daily-wagers-during-lockdown-collects-over-rs-9-20-lakh-6340600/" >Complete Article</a>
					<hr/>
					{/* Third Article */}
					<img alt='media_icon' className='newsIcon' src={opindia} />
					<span className='date'>30th March 2020</span>
					<p>
						IIT-D students initiative, to help on-campus rickshaw pullers, inspired the
						institution to set up the 'Benevolent Fund' for their campus community.
						This initiative got success in bridging the gap between service providers,
						student community and faculty members.
					</p>
					<a href="https://www.opindia.com/2020/03/coronavirus-iit-delhi-rickshaw-pullers-donation-fund-lockdown-students-initiative/">
						Complete Article
					</a>
				</Col>
			</Row>
		</section>
	)
}

export default MediaCard;