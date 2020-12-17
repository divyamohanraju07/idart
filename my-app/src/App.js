import React, { useEffect } from 'react';
import './App.css';
import RowAlign from './row';
import data from './data';
import Chart from './chart';
import { connect } from 'react-redux';
import { setChartData } from './redux/actions/action'


function Task({ setChartData }) {
  useEffect(() => {
    setChartData(data)
  }, [setChartData])
  return (
    <>
      <div style={{ backgroundColor: "#e4e4e4", color: "#696363", padding: "5px 0px" }}>
        {
          data.map((x, index) => {
            return (
              <RowAlign key={index} product={x} />
            )
          })
        }
      </div>
      <div>
        <Chart />
      </div>
    </>
  )
}
const mapStateToProps = (state, props) => {
  console.log("State Values", state)
  return {}
}

export default connect(mapStateToProps, { setChartData })(Task)