import React,{useState,useEffect} from 'react'
import image from "../assets/Naruto/bannerimg.jpg"
import STlogo from "../assets/mh/logo.png"
import smalllogo from "../assets/logo/small.png"
import {BsFillPlayFill,BsInfo,BsPlus} from "react-icons/bs"

import { motion } from 'framer-motion'
import Aloneseries from '../components/Aloneseries'
import homevideo from "../assets/mh/mht.mp4"

import "../styles/HomeScreen.css"
import Tvtrending from '../components/Tvtrending'
import LastetTvshows from '../components/LastetTvshows'
import PopularTvshows from '../components/PopularTvshows'
export default function Tvshows() {
  const [popularMovies,setPopularMovies]=useState([])
  useEffect(()=>{
    fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b02a8e9727484f1244028d52867cc576")
    .then(res=>res.json())
    .then(data=>setPopularMovies(data.results))
    //ttps://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b02a8e9727484f1244028d52867cc576&with_genres=16
  })
  return (
    <div className='HomeScreenCon'>
       {/* style={style} */}
        <div className='movie'>
        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/-G9BqkgZXRA?controls=0&mute=1&loop=1&pause=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
         
          <video style={{display:'block',objectFit:'cover'}} width="100%" height="100%" autoPlay="autoplay"  muted loop typeof='video/mp4'>
            <source src={homevideo}  type="video/mp4" />
            Your browser does not support HTML video.
          </video>
          <div className='Moviewithhin' style={{zIndex:2}}>
          
          <div className='movieimgcon'>
            <motion.img 
             initial={{ scale: 1 }}
             animate={{ scale: 0.8 ,paddingTop:'120px',marginBottom:'-10px'}}
             transition={{ delay: 4, duration: 0.8 }}
            src={STlogo} className='movielogo'/>
          </div>
          
          <motion.div className='plotcon'
          
          >
            <motion.p initial={{ scale: 1 }}
          animate={{ scale: 0,height:0,marginBottom:'-10px' }}
          transition={{ delay: 2, duration: 0.8 }} className='plot'>Money Heist is a Spanish crime drama series that follows a group of eight robbers who plan and execute a heist on the Royal Mint of Spain. Led by the enigmatic "Professor," the robbers take hostages and manipulate the police in a bid to carry out their plan successfully.</motion.p>
          </motion.div>
          <div className='buttonaddcon'>
            <button className='playlistbtn'><BsFillPlayFill color='white' fontSize='25px'/>Play</button>
            <button className='playlistbtn'><BsPlus color='white' fontSize='25px'/>My List</button>
            <button className='playlistbtn'><BsInfo color='white' fontSize='25px'/>More info</button>
          </div>
          </div>
        </div>

        <div>
        <LastetTvshows name={"Top rated shows"}/>
          <PopularTvshows name={"Popular Tv shows on netflix"}/>
          
        </div>

        <div>
          <Aloneseries />
        </div>
    </div>
  )
}
const style={
  backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.5)), url(${image})`,
backgroundSize: 'cover',
backgroundRepeat: 'no-repeat',
backgroundBlendMode: 'darken',

}
