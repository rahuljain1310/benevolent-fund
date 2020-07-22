import React from 'react';
import Chart from "react-google-charts";

function ChartFigure(){
    return(
        <Chart
        width={'100%'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
            ['Total amount', '% contribution'],
            ['1st year ug', 25],
            ['2st year ug', 20],
            ['3rd year ug', 20],
            ['4th year ug', 25],
            ['Mtech', 10],
            ['Phd', 10],
        ]}
        options={{
            title: 'Contribution distribution',
        }}
        rootProps={{ 'data-testid': '1' }}
        />
    )
}
export default ChartFigure;
