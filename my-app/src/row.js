/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { MenuOutlined, CaretUpOutlined, CaretDownOutlined, DollarOutlined } from '@ant-design/icons';

function RowAlign() {
  return (
    <div className="stock-row">
      <div className='outlined'> <MenuOutlined  className="menuOutlined"/> </div>
      <div className="container" style={{ flex: "5%" }}> 
      {column_1} 
      </div>
      <div>
        <div>
          <img src='ishares-by-blackrock-logo.png' className="stock-logo" />
        </div>
      </div>
      <div className="container" > {column_2} </div>
      <div className="container"> {column_3} </div>
      <div className="container"> {column_4} </div>
      <div className="container" style={{ flex: '2%', alignContent: 'center' }}>
        <button className='direction button'>BUY</button><br />
        <button className='direction button'>SELL</button>
      </div>
    </div>

  )
}

function column_1({product})  {
  return 
  <div className='direction'>
  <span style={{ color: 'grey', textAlign: "center" }}>
  {product.scrip}</span>
  <span>{"$"}
  <span style={{ color: '#54d3da', fontWeight: "600", fontSize: "25px" }}>
  {product.price}</span>
</span>
</div>

}

function column_2 ({product}) {
  return (
    <div className='direction'>
    <div className='productAlign'>
      <span>
        <img src="coinspile.png" className='productAlignImage' />Quantity
        </span>
      <span>
        <strong>{product.quantity}</strong>
      </span>
    </div>
    <div className='productAlign'>
      <span>
        <img src='at.svg' className='productAlignImage' />Avg.Cost
        </span>
      <span>
        <strong>{product.cost}</strong>
      </span>
    </div>
    <div className='productAlign'>
      <span>
        <DollarOutlined className='dollarOutlined' />Investment Amt
        </span>
      <span>
        <strong>{product.investedAmount}</strong>
      </span>
    </div>
  </div>
  )
}

function column_3({product}) {
  return (
    <div className='direction'>
    <div className='dollarOutlinedProduct'>
      <span>
        <strong> Market Value</strong>
      </span>
      <span>
        <strong>{product.marketValue}</strong>
      </span>
    </div>
    <div className='dollarOutlinedProduct'>
      <span>
        <strong> % of Portfolio Value</strong>
      </span>
      <span>
        <strong>{product.portfolioValue}</strong>
      </span>
    </div>
    <div className="progress-bar" id="default" style={{ borderRadius: '5px', width: "auto" }}>
      <span id="default" style={{ width: `${Math.abs(product.portfolioValue)}%` }}></span>
    </div>
  </div>
  )
}

function column_4 ({product}) {
  return (
  <div className='direction'>
  <div className='dollarOutlinedProduct'>
    <span>
      <strong>Unrealised P/L</strong>
    </span>
    <span>
      <strong>{product.unrealisedPL}</strong>
    </span>
  </div>

  <div className='dollarOutlinedProduct'>
    <span>
      % Return
    </span>
    <span style={{ display: "flex" }}>

      {product.return > 0 ?
        <CaretUpOutlined className='caretUpOutlined' /> :
        <CaretDownOutlined className='caretDownOutlined' />}
      <strong>{product.return}%</strong>
    </span>
  </div>

  <div style={{ display: "flex" }}>
    <div className="progress-bar">
      <span style={parseFloat(product.return) < 0 ? { width: `${Math.abs(product.return)}%` } : {}}></span>
    </div>
    <div className="progress-bar" id="default">
      <span id="default" style={parseFloat(product.return) > 0 ? { width: `${product.return}%` } : {}}></span>
    </div>
  </div>
</div>
)
}

export default RowAlign;