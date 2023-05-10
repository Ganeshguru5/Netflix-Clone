import React from 'react'
import logo from "../assets/logo/biglogo.png"
import profile2 from "../assets/Profiles/profile2.jpg"
import profile3 from "../assets/Profiles/profile3.jpg"
import "../styles/Accounts.css"
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Accounts() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
	animate={{ opacity: 1 }}
	exit={{ opacity: 0 }}
	transition={{ duration: 0.7 }} 
    className='Accountcon'>
        <div>
            <img src={logo} width='150px'/>
        </div>
        <div className='Accountins'>
            <div className='whotit'>
                <p className='Whotext'> Who's watching ?</p>
            </div>
            <div className='profiles'>
                <Link to='/Home' className='profile'>
                    <motion.img whileTap={{scale:0.8,transition:0.7}} src={profile2} width='150px'/>
                    <p className='username'>Ganeshguru</p>
                </Link>
                <div className='profile'>
                    <motion.img whileTap={{scale:0.8,transition:0.7}} src={profile3} width='150px'/>
                    <p className='username'>Ganeshguru</p>
                </div>
                <div className='profile'>
                    <motion.img whileTap={{scale:0.8,transition:0.7}} src={profile2} width='150px'/>
                    <p className='username'>Ganeshguru</p>
                </div>
            </div>
            <div className='mpbtncon'>
                <button className='mpbutton'>Manage Profiles</button>
            </div>
        </div>
    </motion.div>
  )
}
