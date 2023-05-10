import React from 'react'
import "../styles/Aloneseries.css"
import logo from "../assets/Onepiece/logo.png"
import {BsFillPlayFill,BsInfo,BsPlus} from "react-icons/bs"
import homevideo from "../assets/Onepiece/onepiecetrailer.mp4"

export default function Aloneseries() {
  return (
    <div className='AloneseriesCon'>
        <div className='ASvideocon'>
        
        <video  width="80%" height="80%" autoPlay="autoplay"  muted loop typeof='video/mp4'>
            <source src={homevideo}  type="video/mp4" />
            Your browser does not support HTML video.
          </video>
        </div>
        <div className='ASdescon'>
            <div>
            <img src={logo} width='300px'/>
            <div className='buttonaddconas'>
            <button className='playlistbtnas'><BsFillPlayFill color='white' fontSize='25px'/>Play</button>
            <button className='playlistbtnas'><BsPlus color='white' fontSize='25px'/>My List</button>
            <button className='playlistbtnas'><BsInfo color='white' fontSize='25px'/>More info</button>
            </div>
            <div>
            <p className='asplot'>Seven years after the events of Dragon Ball Z, Earth is at peace, and its people live free from any dangers lurking in the universe. However, this peace is short-lived; a sleeping evil awakens in the dark reaches of the galaxy: Beerus, the ruthless God of Destruction. Disturbed by a prophecy that he will be defeated by a "Super Saiyan God," Beerus and his angelic attendant Whis start searching the universe for this mysterious being. Before long, they reach Earth where they encounter SON-Goku, one of the planet's mightiest warriors, and his similarly powerful friends.</p>
          </div>
          </div>
        </div>
    </div>
  )
}
