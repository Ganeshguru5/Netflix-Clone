import React from 'react'
import "../styles/LoginScreen.css"
import {Link} from "react-router-dom"

export default function Login() {
  return (
    <div className='Login'>
        <div>
        <p className='signintitle'>Sign in </p>
        <input placeholder='Email or phone number' className='inputs'/>
        <br/>
        <input placeholder='Password' className='inputs'/>
        <br/>
        <Link to='/Home'>
        <button className='signinbtn'>Sign in</button>
        </Link>
        <div className='rememberbox'>
        <input type='checkbox'/>
        <p className='remembertxt'> Remember me</p>
        </div>
        <p className='remembertxt'>New to Netflix? Sign up now.</p>
        <p className='recapcha'>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p>
        </div>
    </div>
  )
}
