import React from 'react'
import biglogo from "../assets/logo/biglogo.png"
import "../styles/Nav.css"
import { Link } from 'react-router-dom'
import {FaSearch,FaGift} from "react-icons/fa"
import profile1 from "../assets/Profiles/profile2.jpg"
import {MdNotificationsActive} from "react-icons/md"


export default function Nav() {
  return (
    <div className='NavCon'>
      <div className='leftnav'>
      <div>
        <img src={biglogo} className='Navlogo'/>
      </div>
      <Link to='/Home' className='navigation'>
        <p className='navtext'>Home</p>
      </Link>
      <Link to='/Tvshows' className='navigation'>
        <p className='navtext'>TV shows</p>
      </Link>
      <Link className='navigation'>
        <p className='navtext'>Movies</p>
      </Link>
      <Link className='navigation'>
        <p className='navtext'>Recently added</p>
      </Link>
      <Link className='navigation'>
        <p className='navtext'>My List</p>
      </Link>
      </div>
      <div className='midnav'>

      </div>
      <div className='rightnav'>
        <Link to='/Search' className='navigation'>
          <p className='navtext search'><FaSearch /></p>
        </Link>
        <Link className='navigation'>
          <p className='navtext'>KIDS</p>
        </Link>
        <Link className='navigation'>
          <p className='navtext'>DVD</p>
        </Link>
        <Link className='navigation'>
          <p className='navtext'><FaGift size={17}/></p>
        </Link>
        <Link className='navigation'>
          <p className='navtext'><MdNotificationsActive size={20}/></p>
        </Link>
        <Link className='navigation' style={{display:'flex'}}>
          <img src={profile1} width='35px' style={{borderRadius:'2px'}}/>
          {/* <p className='navtext'><AiFillCaretDown size={20}/></p> */}
        </Link>
      </div>
    </div>
  )
}
