import './style.css'
import image from '../pic/login.jpg'
import { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'

const Register = () => {

  const initailValue = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    cPassword: ''
  }

  const [formData, setFormDate] = useState(initailValue)

  const onChnage = (e) => {
    const { name, value } = e.target
    setFormDate({ ...formData, [name]: value})
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  const {email, password, firstName,lastName, phoneNumber, cPassword} = formData
  return (
    <>
        <section className='sign-up'>
              
              <div className="login-form">
                <div className="form">
                  <h1>register</h1>
                  
                    <form onSubmit={onSubmit} >
                      <label htmlFor="firstName">First Name</label>
                     
                      <input 
                        type='text'
                        placeholder='Please enter your firstName ' required
                        name='firstName'
                        onChange={onChnage}
                        value = {firstName}
                      />
                      <label htmlFor="lastName">Last Name</label>
                     
                      <input 
                        type='text'
                        placeholder='Please enter your lastName' required
                        name='lastName'
                        onChange={onChnage}
                        value = {lastName}
                      />
                      <label htmlFor="email">Email</label>
                     
                      <input 
                        type='email'
                        placeholder='Please enter your email address' required
                        name='email'
                        onChange={onChnage}
                        value = {email}
                      />
                      <label htmlFor="phoneNumber">Phone Number</label>
                     
                      <input 
                        type='tel'
                        placeholder='Please enter your phone Number' required
                        name='phoneNumber'
                        onChange={onChnage}
                        value = {phoneNumber}
                      />
                      <label htmlFor="password">Password</label>
                     
                      <input 
                        type='password'
                        placeholder='Please enter your password' required
                        name='password'
                        onChange={onChnage}
                        value = {password}
                      />
                      <label htmlFor="cPassword">confirm Password</label>
                     
                      <input 
                        type='password'
                        placeholder='Please enter your password' required
                        name='cPassword'
                        onChange={onChnage}
                        value = {cPassword}
                      />
                        
                     
                        <button className='form-btn'>sign in</button>
                        
                        <div className="alternative-sign-in">
                              <div className="alternative">
                                
                              <div className="line"></div>
                              <h3>or</h3>
                              <div className="line"></div>
                              
                              </div>
                              <li className='form-btn'><FcGoogle size={20}/> Register with google</li>
                              <p>I already have account <Link to='/sign'>log in</Link></p>
                        </div>
                    </form>
                </div>
                
              </div>
              
              <div className="login-image">
                <img src={image} alt="login" />
              </div>
        </section>
    </>
  )
}

export default Register
