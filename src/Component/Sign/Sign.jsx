import './style.css'
import image from '../pic/register.jpg'
import {FcGoogle} from 'react-icons/fc'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Sign = () => {

  const initailValue = {
    email: '',
    password: '',
  }

  const [formData, setFormDate] = useState(initailValue)

  const onChnage = (e) => {
    const { name, value } = e.target
    setFormDate({ ...formData, [name]: value})
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  const {email, password} = formData
  return (
      <>
          <section className='sign-in'>
              <div className="login-image">
                <img src={image} alt="login" />
              </div>
              <div className="login-form">
                <div className="form">
                  <h1>Hey, We are glad you <br/>chose RESCOM</h1>
                  
                  <div className="form-welcom">
                    <div className="line"></div>
                    <h3>Welcome Back!</h3>
                    <div className="line"></div>
                  </div>
                    <form onSubmit={onSubmit} >
                      <div className='label'><label htmlFor="email">Email</label></div>
                      <div>
                        <input 
                        type='email'
                        placeholder='Please enter your email address' required
                        name='email'
                        onChange={onChnage}
                        value = {email}
                        />
                        </div>
                      
                      <div className='label top'><label htmlFor="password">Password</label></div>
                      <div>
                        <input
                        type='password'
                        name='password'
                        placeholder='Please enter your password' required
                        onChange={onChnage}
                        value = {password}
                        /></div>
                        <button className='form-btn'>sign in</button>
                        
                        <div className="alternative-sign-in">
                              <div className="alternative">
                                
                              <div className="line"></div>
                              <h3>or</h3>
                              <div className="line"></div>
                              
                              </div>
                              <li className='form-btn'><FcGoogle/> sign in with google</li>
                              <p>dont have accout <Link to='/register'>Register</Link></p>
                        </div>
                    </form>
                </div>
                
              </div>
        </section>
      </>
  )
}

export default Sign
