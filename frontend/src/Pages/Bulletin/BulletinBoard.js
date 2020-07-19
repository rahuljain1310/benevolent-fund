import React, { useState } from 'react';
import CountUp from 'react-countup';
import Chart from "react-google-charts";
import {
	Row,
	Col,
	Card,
	ListGroup,
	CardGroup,
} from 'react-bootstrap';
import './BulletinBoard.css';

function ChartFigure () {
	const dataChart = [
		['Total amount', '% contribution'],
		['Undergraduate', 25],
		['Mtech', 10],
		['Phd', 20],
	]
	return (
		<Chart
			data={dataChart}
			chartType="PieChart"
			loader={'Loading Chart ...'}
			options={{title: 'Contribution distribution'}}
			rootProps={{ 'data-testid': '1' }}
		/>
	)
}

function ContributorList ({ list }) {
	return (
		<div >
			<h4 style={{textAlign: 'center'}}>Contributors</h4>
			<br />
			<div style={{ overflowY: 'scroll', height: '100%'}}>
				<ListGroup style={{ height: '400px' }}>
					{list.map((person, idx) => (
						<ListGroup horizontal key={idx} style={{ height: '4rem' }}>
							<ListGroup.Item style={{ width: '75%' }}>
								{person[0]}, <span style={{fontSize: "0.8em"}}>Undergraduate</span>
							</ListGroup.Item>
							<ListGroup.Item style={{width: '25%'}}>
								<span style={{fontSize: "1.1em"}}>{person[1]}</span>
							</ListGroup.Item>
						</ListGroup>
					))}
				</ListGroup>
			</div>
		</div>
	)
}

function ContributionStats() {

	const [contributorsCount, setContributorCount] = useState(554);
	const [totalAmount, setTotalAmount] = useState(587554);

	return (
		<div className='stats'>
			<CardGroup>
				<Card border="danger" className='card'>
					<Card.Header className="header"> Total Contributors </Card.Header>
					<Card.Body>
						<div className="text"> <CountUp end={contributorsCount} /> </div>
					</Card.Body>
				</Card>
				<Card border="danger" className='card'>
					<Card.Header className="header"> Total Contribution </Card.Header>
					<Card.Body>
						<div className="text"> <CountUp end={totalAmount} /> </div>
					</Card.Body>
				</Card>
			</CardGroup>
			<hr />
			<ChartFigure className="chartclass" style={{ minHeight: '300px', position: 'static' }} />
		</div>
	)
}

function BulletinBoard() {

	const contributors = [
		["Mukesh", 500],
		["Aashish", 100],
		["Om", 1000],
		["Vinay", 5000],
		["Vasant", 50],
		["Rahul", 55],
		["Pankaj", 250],
		["Om", 1000],
		["Vinay", 5000],
		["Vasant", 50],
		["Rahul", 55]
	]

	return (
		<section id='sc-bulletin'>
			<Row >
				<Col md={8}> <ContributionStats /> </Col>
				<Col md={4}> <ContributorList list={contributors} /> </Col>
			</Row>
		</section>
	)
}

export default BulletinBoard;