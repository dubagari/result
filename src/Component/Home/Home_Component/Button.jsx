import React from 'react'


import { Link } from 'react-router-dom'



export const Button = ({text,site}) => {
  return (
    <button className='btn-home'>
        <div className="home-btn">
              <Link to={site} ><li>{text}</li>
              </Link>
        </div>
    </button>
  )
}

