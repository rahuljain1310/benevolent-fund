import React, { useState } from 'react';
import CountUp from 'react-countup';
import Chart from "react-google-charts";
import { BigContributeButton } from '../ContributeButton/ContributeButton'
import {
	Row,
	Col,
	Card,
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
			data={dataChart}
			chartType="PieChart"
			loader={'Loading Chart ...'}
			options={{ title: 'Contribution distribution' }}
			rootProps={{ 'data-testid': '1' }}
		/>
	)
}

function ContributorList({ list }) {
	return (
		<div className='contributor-list'>
			<br />
			<div style={{ overflowY: 'scroll', height: '100%' }}>
				<ListGroup style={{ height: '500px' }}>
					<ListGroup>
						<ListGroup.Item as='h5' className='table-head'>
							Recent Contributions
						</ListGroup.Item>
					</ListGroup>
					{list.map((person, idx) => (
						<ListGroup horizontal key={idx} style={{ height: '4rem' }}>
							<ListGroup.Item style={{ width: '75%' }}>
								{person[0]} <br /> <span className='designation'>Undergraduate</span>
							</ListGroup.Item>
							<ListGroup.Item style={{ width: '25%' }}>
								<span style={{ fontSize: "1em" }}>{person[1]}</span>
							</ListGroup.Item>
						</ListGroup>
					))}
				</ListGroup>
			</div>
		</div>
	)
}

function CountStats({ number, text }) {

	const formatter = Intl.NumberFormat('en-IN', {
		style: 'currency',
		currency: 'INR',
	})

	const formatFnc = text === 'Contribution' ? n => formatter.format(n) : n => n

	return (
		<div className='count-stats'>
			<span className='number'>
				<CountUp delay={2} end={number} formattingFn={formatFnc}/>
			</span> <br/>
			<span className='text'>{" "+text+" "}</span>
		</div>
	)
}

function ContributionStats() {
	const contributorsCount = 554;
	const totalAmount = 587554;
	return (
		<div className='stats'>
			<CountStats number={contributorsCount} text={'Contributors'} />
			<CountStats number={totalAmount} text={'Contribution'} />
			<hr/>
			{/* <ChartFigure className="chartclass" style={{ minHeight: '300px', position: 'static' }} /> */}
			<BigContributeButton />
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