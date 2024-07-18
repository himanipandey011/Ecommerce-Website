import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

const Item = (props) => {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`} style={{ textDecoration: 'none' }}><img onClick={window.scrollTo(0, 0)} src={props.image} alt="products" /></Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">M.R.P {props.new_price}</div>
        <div className="item-price-old">M.R.P {props.old_price}</div>
      </div>
    </div>
  )
}

export default Item
