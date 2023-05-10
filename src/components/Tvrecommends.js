import React,{useState,useEffect} from 'react'
import Stposter from "../assets/Stranger things/poster.jpg"
import "../styles/Trending.css"
import {AiOutlineLike,AiOutlineDislike,AiOutlinePlus} from "react-icons/ai"
import { Link } from 'react-router-dom'

export default function Tvrecommends(props) {
    const [popularMovies,setPopularMovies]=useState([])
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/tv/${props.id}/recommendations?api_key=b02a8e9727484f1244028d52867cc576&language=en-US&page=1` )
    .then(res=>res.json())
    .then(data=>setPopularMovies(data.results))
    //https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b02a8e9727484f1244028d52867cc576&with_genres=16
  })
  return (
    <div className='Trendingcon'>
        <div>
            <p className='trendtit'>{props.name}</p>
        </div>
        
        <div className='Movies'>

            {
                popularMovies.map((movie)=>{
                    return(

                        <Link to={`/movie/${movie.id}`} className='boxcon'>
                                <div className='box' style={{backgroundImage:`url(${`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`})`,backgroundSize:'cover'}}>
                                    <div className='moviedetails'>
                                        <p className='moviename'>Movie : {movie.original_title}</p>
                                        <p className='rating'>Rating : {movie.vote_average}  <span className='language'>-{movie.original_language}</span></p>
                                        <p className='overview'>{movie.overview.slice(0,120)}</p>
                                
                                    </div>
                                    {/* <div className='likes'>
                                        <AiOutlineLike size={25} color='white'/>
                                        <AiOutlineDislike size={25} color='white'/>
                                        <AiOutlinePlus size={25} color='white'/>
                                    </div> */}
                                </div>
                                
                        </Link>
                    )
                })
            }
  
        </div>
    </div>
  )
}
