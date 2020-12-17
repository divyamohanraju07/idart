import React, { useEffect, useState } from 'react';
import DonutChart from 'react-donut-chart';
import { connect } from 'react-redux';
// import data from './data';



function Chart({ data }) {
    let [chartValue, setChartValue] = useState({
        MF: 0, ETF: 0
    })
    useEffect(() => {
        let marketvalue = data.map(item => item.marketValue);
        let modified = marketvalue.splice(0, 4)
        let MF = modified.reduce((a, b) => {
            return parseInt(a) + parseInt(b);
        }, 0);
        let ETF = marketvalue.reduceRight((a, b) => {
            return parseInt(a) + parseInt(b);
        }, 0);
        setChartValue({ MF, ETF })
    }, [data])
    return (
        <div>
            <h2>Portfolio</h2>
            <DonutChart className='chart'
                data={[
                    {
                        label: "MF",
                        value: chartValue.MF
                    },
                    {
                        label: "ETF",
                        value: chartValue.ETF
                    }
                ]}
                colors={['#85e6d4', '#de973e']}

            />
        </div>)
}

const mapStateToProps = (state) => {
    return {
        data: state.data
    }
}

export default connect(mapStateToProps, null)(Chart)