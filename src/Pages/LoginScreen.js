import React from 'react'
import "../styles/LoginScreen.css"
import Background from "../assets/Protfolio/background.jpg"
import Login from '../components/Login'
import { motion } from 'framer-motion'

export default function LoginScreen() {
    
  return (
    <motion.div 
    initial={{ opacity: 0 }}
	animate={{ opacity: 1 }}
	exit={{ opacity: 0 }}
	transition={{ duration: 0.7 }}
    className='LoginScreenCon'>
        <div className='LoginCon' style={style}>
        <Login />
        </div>
        
        <div className='footer'>
            
            <div>
                <p className='footerelement'>FQA</p>
                <p className='footerelement'>Account</p>
                <p className='footerelement'>Invester Reaktions</p>
                <p className='footerelement'>Ways to watch</p>
                <div className='languagecon'>
                    <select className='selectin'>
                        <option>English</option>
                        <option>Tamil</option>
                    </select>
                </div>
                <p className='footerelement'>Netflix india</p>
                
            </div>
            <div>
                <p className='footerelement'>Privacy</p>
                <p className='footerelement'>Corporate Information</p>
                <p className='footerelement'>Speed Test</p>
                <p className='footerelement'>Only on Netflix</p>
            </div>
            <div>
                <p className='footerelement'>Privacy</p>
                <p className='footerelement'>Cookies preferences</p>
                <p className='footerelement'>Legal notices</p>
            </div>
            <div>
                <p className='footerelement'>Media center</p>
                <p className='footerelement'>Terms of use</p>
                <p className='footerelement'>Contact us</p>
                
            </div>
        </div>
    </motion.div>
  )
}
const style={
    backgroundImage: `linear-gradient(to left,#5D141D, rgba(0, 0, 255, 0.3), rgba(255, 0, 0, 0.3)), url(${Background})`,
    background: `rgba(0,0,0,0.3) url(${Background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundBlendMode: 'darken',
}
