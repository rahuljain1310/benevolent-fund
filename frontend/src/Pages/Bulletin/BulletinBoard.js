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
			width={'400px'}
			height={'250px'}
			chartType="PieChart"
			loader={'Loading Chart ...'}
			// options={{ title: 'Contribution distribution' }}
			rootProps={{ 'data-testid': '1' }}
		/>
	)
}

function GraphChart(){

	
	return(
		<Chart
			width={'400px'}
			height={'250px'}
			chartType="LineChart"
			loader={<div>Loading Chart</div>}
			data={[
				['x', 'Amount in Rupees'],
				[0, 0],
				[1, 10],
				[2, 23],
				[3, 17],
				[4, 18],
				[5, 9],
				[6, 11],
				[7, 27],
				[8, 33],
				[9, 40],
				[10, 32],
				[11, 35],
			  ]}
			options={{
				hAxis: {
				title: 'Time',
				},
				vAxis: {
				title: 'Contribution',
				},
			}}
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
			<span className='text'>{" "+text+" "}</span>
			<br />
			<span className='number'>
				<CountUp delay={2} end={number} formattingFn={formatFnc}/>
			</span> <br/>
		</div>
	)
}

function ContributionStats() {
	const contributorsCount = 554;
	const totalAmount = 587554;
	return (
		<div className='stats'>
			<Row>
				<Col sm={4}><CountStats number={contributorsCount} text={'Contributors'} /></Col>
				<Col ><CountStats number={totalAmount} text={'Contribution'}  /></Col>
			</Row>
			<hr />
			<br />
			<Row>
				<Col sm={6} style={{alignItems:'left'}}>
					<h5 style={{textAlign:'center'}}>Daily Progress Curve</h5>
					<GraphChart />
				</Col>
				<Col>
					<h5 style={{textAlign:'center'}}>Contribution Distribution</h5>
					<ChartFigure style={{marginTop:'50px'}} />
				</Col>
			</Row>
			<hr/>
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