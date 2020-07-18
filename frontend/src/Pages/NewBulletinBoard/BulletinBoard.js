import React, { useState } from 'react';
import CountUp from 'react-countup';
import Chart from "react-google-charts";
import {
	Row,
	Col,
	Card,
	Container,
	ListGroup,
	CardGroup,
} from 'react-bootstrap';
import './BulletinBoard.css';

function ChartFigure() {

	const dataChart = [
		['Total amount', '% contribution'],
		['Undergraduate', 25],
		['Mtech', 10],
		['Phd', 20],
	]

	return (
		<Chart
			chartType="PieChart"
			loader={
				<div>Loading Chart ...</div>
			}
			data={dataChart}
			options={{
				title: 'Contribution distribution',
			}}
			rootProps={{ 'data-testid': '1' }}
		/>
	)
}

function ContributorList({ list }) {
	return (
		<div>
			<h3 style={{ color: 'rgb(65, 6, 80)', textAlign: 'center' }}>Contributors</h3>
			{list.map((person, idx) => (
				<ListGroup horizontal key={idx} style={{ height: '4rem' }}>
					<ListGroup.Item style={{ width: '300px' }}>
						{person[0]}
						<br />
						<p style={{ color: "rgb(49, 6, 6)", fontSize: "12px" }}>1st year undergrad</p>
					</ListGroup.Item>
					<ListGroup.Item style={{ width: '100px' }}>
						<p style={{ color: "rgb(49, 6, 6)", fontSize: "20px" }}>
							{person[1]}
						</p>
					</ListGroup.Item>
				</ListGroup>
			))}
		</div>
	)
}

function ContributionStats() {

	const [contributorsCount, setContributorCount] = useState(554);
	const [totalAmount, setTotalAmount] = useState(587554);

	return (
		<div>
			<CardGroup>
				<Card border="info" style={{ width: '50%', boxSizing: "border-box", margin: 'auto', marginTop: '15px' }}>
					<Card.Header className="text-center" style={{ color: 'rgb(65, 6, 80)' }}>
						Total Contributors
					</Card.Header>
					<Card.Body>
						<p className="text">
							<CountUp end={contributorsCount} />
						</p>
					</Card.Body>
				</Card>
				<Card border="info" style={{ width: '50%', boxSizing: "border-box", margin: 'auto', marginTop: '15px' }}>
					<Card.Header className="text-center" style={{ color: 'rgb(65, 6, 80)' }}>
						Total Contribution
						</Card.Header>
					<Card.Body>
						<p className="text">
							<CountUp end={totalAmount} />
						</p>
					</Card.Body>
				</Card>
			</CardGroup>
			<hr />
			<ChartFigure className="chartclass" style={{ minHeight: '300px', position: 'static' }} />
		</div>
	)
}

function NewBulletinBoard() {

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
				<Col md={6}>
					<ContributionStats />
				</Col>
				<Col md={6} bsPrefix="cold" style={{ overflowY: 'scroll', height: '575px', alignItems: 'centre', margin: 'auto' }}>
					<ContributorList list={contributors} />
				</Col>
			</Row>
		</section>
	)
}

export default NewBulletinBoard;