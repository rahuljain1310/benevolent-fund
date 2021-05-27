import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import Chart from "react-google-charts";
import { BigContributeButton } from '../ContributeButton/ContributeButton'
import {
	Row,
	Col,
	ListGroup,
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
			{/* <br /> */}
			<div style={{ overflowY: 'scroll', height: '100%' }}>
				<ListGroup style={{ height: '500px' }}>
					<ListGroup>
						<ListGroup.Item as='h5' className='table-head'>
							Recent Contributions
						</ListGroup.Item>
					</ListGroup>
					{list.map((person, idx) => (
						<ListGroup horizontal key={idx} style={{ height: '3.5rem', }}>
							<ListGroup.Item style={{ width: '75%', fontWeight: '600', padding: '4px 8px'}}>
								{person['name'] || 'Anonymous'},&nbsp; <br/> 	
								<span className='designation'>
									{person['profession'].split(' ').slice(0,1).join(' ')}
								</span>
							</ListGroup.Item>
							<ListGroup.Item style={{ width: '25%',padding: '4px 8px' }}>
								<span style={{ fontSize: "1em", fontWeight: '600' }}>
									{formatter.format(person['amount']).slice(0, -3)}
								</span>
							</ListGroup.Item>
						</ListGroup>
					))}
				</ListGroup>
			</div>
		</div>
	)
}

function CountStats({ number, text }) {
	const formatFnc = text === 'Total Collections' ? n => formatter.format(n).slice(0, -3) : n => n
	return (
		<div className='count-stats'>
			<span className='number'>
				<CountUp delay={2} end={number} formattingFn={formatFnc} />
			</span>
			<br/>
			<span className='text'>{" " + text + " "}</span>
		</div>
	)
}

function ContributionStats({totalAmount, contributorsCount, beneficiaries}) {

	return (
		<div className='stats'>
			<Row>
				<Col sm={12} style={{minWidth: '260px'}}><CountStats number={totalAmount} text={'Total Collections'} /></Col>
				<Col sm={12} style={{ minWidth: '260px' }}><CountStats number={contributorsCount} text={'Contributors'} /></Col>
				<Col sm={12} style={{minWidth: '260px'}}><CountStats number={beneficiaries} text={'Beneficiaries'} /></Col>
			</Row>
			<br/>
			<hr/>
			<BigContributeButton />
		</div>
	)
}

function BulletinBoard() {

	const [totalAmount, setTotalAmount] = useState(0)
	const [contributorsCount, setContributorsCount] = useState(0)
	const [beneficiariesCount, setBeneficiariesCount] = useState(0)
	const [contributors, setContributors] = useState([]) 

	useEffect(() => {
		fetch('https://desolate-wave-47944.herokuapp.com/')
		.then(response => response.json())
		.then(data => {
			console.log(data)
			setContributorsCount(data['contributor_count'])
			setTotalAmount(data['amount'])
			setContributors(data['contributors'])
			setBeneficiariesCount(147)
		});
	}, []);

	return (
		<section id='sc-bulletin'>
			<h2>Collections</h2> <br/>
			<Row >
				<Col lg={7} md={6}>
					<ContributionStats
						totalAmount={totalAmount}
						contributorsCount={contributorsCount}
						beneficiaries={beneficiariesCount} />
				</Col>
				<Col lg={5} md={6}> <ContributorList list={contributors} /> </Col>
			</Row>
		</section>
	)
}

export default BulletinBoard;
