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
			<br />
			<div style={{ overflowY: 'scroll', height: '100%' }}>
				<ListGroup style={{ height: '400px' }}>
					<ListGroup>
						<ListGroup.Item as='h5' className='table-head'>
							Top Contributions
						</ListGroup.Item>
					</ListGroup>
					{list.sort((a,b) => b['amount'] - a['amount']).slice(0,10).map((person, idx) => (
						<ListGroup horizontal key={idx} style={{ height: '4rem' }}>
							<ListGroup.Item style={{ width: '70%', fontWeight: '600' }}>
								{person['name'].split('@')[0]} <br /> <span className='designation'>
									{person['profession']}
								</span>
							</ListGroup.Item>
							<ListGroup.Item style={{ width: '35%' }}>
								<span style={{ fontSize: "1.2em", fontWeight: '600' }}>
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
			</span> <br />
			<span className='text'>{" " + text + " "}</span>
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
				<Col sm={12} style={{minWidth: '100px'}}><CountStats number={totalAmount} text={'Total Collections'} /></Col>
				<Col sm={12} style={{minWidth: '100px'}}><CountStats number={contributorsCount} text={'Contributors'} /></Col>
				{/* <Col sm={6} style={{minWidth: '100px'}}><CountStats number={beneficiaryCount} text={'Beneficiaries'} /></Col> */}
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
		fetch('http://source.localhost/benevolent-fund/php/contributors.php')
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
				<Col lg={6} md={6}> <ContributionStats totalAmount={totalAmount} contributorsCount={contributorsCount} /> </Col>
				<Col lg={1} md={0}></Col>
				<Col lg={5} md={6}> <ContributorList list={contributors} /> </Col>
			</Row>
		</section>
	)
}

export default BulletinBoard;