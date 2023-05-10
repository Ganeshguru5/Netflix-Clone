import React,{useState,useEffect} from 'react'
import image from "../assets/Naruto/bannerimg.jpg"
import STlogo from "../assets/db/logo.png"
import smalllogo from "../assets/logo/small.png"
import {BsFillPlayFill,BsInfo,BsPlus} from "react-icons/bs"
import Trending from '../components/Trending'
import Tvtrending from '../components/Tvtrending'
import { motion } from 'framer-motion'
import Aloneseries from '../components/Aloneseries'
import homevideo from "../assets/db/dbtrailer.mp4"
import Recommendations from '../components/Recommendations'

import { useParams } from 'react-router-dom'
import "../styles/HomeScreen.css"

export default function Selectedmovie() {
  const [trailerurl,seTrailerurl] = useState('')
  const [movienow,setmovienow]=useState([])
  const {id} = useParams()
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=b02a8e9727484f1244028d52867cc576&language=en-US&type=trailer`)
    .then(response => response.json())
    .then(data => {
      // Extract the first trailer URL from the response
      const trailer = data.results.find(result => result.type === 'Trailer');
      const trailerUrl = trailer ? seTrailerurl(trailer.key) : seTrailerurl("");
  
      // If a trailer URL was found, display it
      if (trailerUrl) {
        console.log(`Here's the trailer for the movie: ${trailerUrl}`);
      } else {
        console.log('No trailer was found for the movie.');
      }
    },[])
  })


  fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=b02a8e9727484f1244028d52867cc576&language=en-US`)
  .then(response => response.json())
  .then(data => {
      setmovienow(data)
  })
  .catch(error => console.error(error));

  return (
    <div className='HomeScreenCon'>
       {/* style={style} */}
        <div className='movie'>
        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/-G9BqkgZXRA?controls=0&mute=1&loop=1&pause=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
         
          {/* <video style={{display:'block',objectFit:'cover'}} width="100%" height="100%" autoPlay="autoplay"  muted loop typeof='video/mp4'>
            <source src={homevideo}  type="video/mp4" />
            Your browser does not support HTML video.
          </video> */}
          <iframe
  style={{display:'block',objectFit:'cover'}}
  width="100%"
  height="100%"
  src={`https://www.youtube.com/embed/${trailerurl}?autoplay=1&mute=1&loop=1&controls=0&autoplay=1&modestbranding=1`}
  frameBorder="0"
  allow="autoplay; encrypted-media"
  allowFullScreen
  playsinline
/>

            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/jxkxW3gazUY?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

          <div className='Moviewithhin' style={{zIndex:2}}>
          
          <div className='movieimgcon'>
            {/* <motion.img 
             initial={{ scale: 1 }}
             animate={{ scale: 0.8 ,paddingTop:'120px'}}
             transition={{ delay: 4, duration: 0.8,marginBottom:'-10px' }}
            src={STlogo} className='movielogo'/> */}
            <motion.p
            className='movielogo'
            initial={{ scale: 1 }}
            animate={{ scale: 0.8 ,paddingTop:'120px'}}
            transition={{ delay: 4, duration: 0.8,marginBottom:'-10px' }}
            style={{color:'white'}}>{movienow.original_title}</motion.p>
          </div>
          
          <motion.div className='plotcon'
          
          >
            <motion.p initial={{ scale: 1 }}
          animate={{ scale: 0,height:0 }}
          transition={{ delay: 2, duration: 0.8 }} className='plot'>Seven years after the events of Dragon Ball Z, Earth is at peace, and its people live free from any dangers lurking in the universe. However, this peace is short-lived; a sleeping evil awakens in the dark reaches of the galaxy: Beerus, the ruthless God of Destruction. Disturbed by a prophecy that he will be defeated by a "Super Saiyan God," Beerus and his angelic attendant Whis start searching the universe for this mysterious being. Before long, they reach Earth where they encounter SON-Goku, one of the planet's mightiest warriors, and his similarly powerful friends. </motion.p>
          </motion.div>
          <div className='buttonaddcon'>
            <button className='playlistbtn'><BsFillPlayFill color='white' fontSize='25px'/>Play</button>
            <button className='playlistbtn'><BsPlus color='white' fontSize='25px'/>My List</button>
            <button className='playlistbtn'><BsInfo color='white' fontSize='25px'/>More info</button>
          </div>
          </div>
        </div>

        <div>
          <Recommendations id={id} name={"Similar movies"}/>
          <Tvtrending name={"Trending Tv shows"}/>
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
