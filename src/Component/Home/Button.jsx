import React from 'react'


import { Link } from 'react-router-dom'

const Button = ({text}) => {
  return (
    <div>
        <div className="btn-flex">
              <Link to='/blog' className='btn-y'><li>{text}</li>
              </Link>
        </div>
    </div>
  )
}

const Article = ({arrow, text3, intro}) => {
    return (
        <div className="contain1">
                      <div className="btn-info">
                        <h1 className='uppercase'>{intro}</h1>
                        
                        <div className="arrow">
                        <h3>{text3}</h3>
                        {arrow}
                        </div>
                        
                      </div>
                          <div className="text">
                            <p>
                      
                      exercitationem neque suscipit asperiores rerum totam earum voluptatem ex dolorum quia! Eius,
                      assumenda ipsam! Expedita, deserunt ducimus nihil commodi ex minus praesentium unde? Consectetur,
                      ipsa. Quia velit, cum in ipsam distinctio porro voluptates possimus totam iste quaerat dignissimos
                      amet id repellat odio sit quas eum dolorem qui aliquid consequatur. Provident, sit repellendus! Sequi
                      eveniet dolorem veniam suscipit ratione libero nulla, vel delectus adipisci ut nostrum error nihil
                      necessitatibus tempore consequuntur labore in ducimus commodi rerum officiis quibusdam, dolore tempora
                      eos! Molestias, expedita.</p>
                          </div>
                    </div>
    )
}

export {
    Button,
    Article
}



