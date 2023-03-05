
import React from 'react'
import { Button } from './Button'
import data from '../Data_Api'

const Cart = ({img,title, desc, btntext}) => {
  return (
    <>
      <div className="cart">
        <div className="box">
          <div className="image">
            <img src={img} alt="" />
            </div>
            <h2 className="title">{title}</h2>
            <p>{desc}</p>
              <div className="btn">
                <Button text={data.btntext}/>
              </div>
        </div>
      </div>
    </>
  )
}

export default Cart
