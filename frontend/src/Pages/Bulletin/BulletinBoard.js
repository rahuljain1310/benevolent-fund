import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import Chart from "react-google-charts";
import { BigContributeButton } from '../ContributeButton/ContributeButton'
import {
	Row,
	Col,
	ListGroup,
	Container,
} from 'react-bootstrap';
import './BulletinBoard.css';

const formatter = Intl.NumberFormat('en-IN', {
	style: 'currency',
	currency: 'INR',
	decimal: 0,
})

function ChartFigure() {
	const dataChart = [
		['Total amount', '% contribution'],
		['Undergraduate', 25],
		['Mtech', 10],
		['Phd', 20],
	]
	return (
		<div style={{textAlign: 'center'}}>
			<Chart
				data={dataChart}
				width={'400px'}
				height={'250px'}
				chartType="PieChart"
				loader={'Loading Chart ...'}
				rootProps={{ 'data-testid': '1' }}
			/>
			<span className='text'>Distribution</span>
		</div>
	)
}

function GraphChart() {
	return (
		<div style={{textAlign: 'center'}}>
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
			<span className='text'>Daily Record</span>
		</div>
	)
}

function ContributorList({ list }) {
	return (
		<div className='contributor-list'>
			<div className='contributor-list-scroll'>
				<div style={{ height: '400px' }}>
					<div className='table-head'>
						Top Contributions
					</div>
					<hr />
					{list.sort((a,b) => b['amount'] - a['amount']).map((person, idx) => (
						<Container>
							<Row className='contributor-row'>
								<Col xs={8}>
									{person['name'] || 'Anonymous'} <br />
									<span className='designation'>
										{person['profession'].split(' ').slice(0,2).join(' ')}
									</span>
								</Col>
								<Col xs={4}>
									<span style={{ fontSize: "1.2em", fontWeight: '600' }}>
										{formatter.format(person['amount']).slice(0, -3)}
									</span>
								</Col>
							</Row>
						</Container>
					))}
				</div>
			</div>
		</div>
	)
}

function CountStats({ number, text }) {
	const formatFnc = text === 'Total Collections' ? n => formatter.format(n).slice(0, -3) : n => n
	return (
		<div className='count-stats'>
			<span className='text'>{" " + text + " "}</span>
			<br/>
			<span className='number'>
				<CountUp delay={2} end={number} formattingFn={formatFnc} />
			</span>
		</div>
	)
}

function ContributionStats({totalAmount, contributorsCount}) {

	const beneficiaryCount = 102;
	
	return (
		<div className='stats'>
			{/* <h2> Bulletin Board</h2> */}
      {/* <hr /> */}
			<Row>
				<Col sm={12} style={{minWidth: '260px'}}><CountStats number={totalAmount} text={'Total Collections'} /></Col>
				<Col sm={12} style={{minWidth: '260px'}}><CountStats number={contributorsCount} text={'Contributors'} /></Col>
				{/* <Col sm={6} style={{minWidth: '260px'}}><CountStats number={beneficiaryCount} text={'Beneficiaries'} /></Col> */}
			</Row>
			{/* <Row>
				<Col> <GraphChart/> </Col>
				<Col> <ChartFigure/> </Col>
			</Row> */}
			<br/>
			<hr/>
			<BigContributeButton />
		</div>
	)
}

function BulletinBoard() {

	const [totalAmount, setTotalAmount] = useState(0)
	const [contributorsCount, setContributorsCount] = useState(0)
	const [contributors, setContributors] = useState([]) 

	useEffect(() => {
		fetch('https://desolate-wave-47944.herokuapp.com/')
		.then(response => response.json())
		.then(data => {
			console.log(data)
			setContributorsCount(data['contributor_count'])
			setTotalAmount(data['amount'])
			setContributors(data['contributors'])
		});
	}, []);

	return (
		<section id='sc-bulletin'>
			<Row >
				<Col lg={7} md={6}> <ContributionStats totalAmount={totalAmount} contributorsCount={contributorsCount} /> </Col>
				<Col lg={5} md={6}> <ContributorList list={contributors} /> </Col>
			</Row>
		</section>
	)
}

export default BulletinBoard;
