import React,{useState,useEffect} from 'react'
import {FaSearch,FaGift} from "react-icons/fa"
import "../styles/SearchScreen.css"
import { Link } from 'react-router-dom';

export default function Searchscreen() {
  const [search,setSearch]=useState("marvel");
  const [select,setSelect]=useState("movie")
  const [results,setResults]=useState([])
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/search/${select}?api_key=b02a8e9727484f1244028d52867cc576&query=${search}&page=1` )
    .then(res=>res.json())
    .then(data=>setResults(data.results))
  },[results])
  return (
    <div className='searchcon'>
        <div className='wholesearch'>
        <div className='searchitemcon'>
            <div className='icon'>
                <FaSearch color='white' size={20}/>
            </div>
            <div className='searchinputcon'>
                <input placeholder='Search' onChange={(e)=>setSearch(e.target.value)} className='searchinput'/>
            </div>
            
        </div>
        
        </div>
        <div className='languagecon'>
                    <select className='selectin' onChange={(e)=>{setSelect(e.target.value)}} style={{backgroundColor:'#00081D'}}>
                        <option value='movie'>Movies</option>
                        <option value='tv'>Series</option>
                    </select>
            </div>
        <div>
            <p className='resultext'>Results : {search}</p>

        </div>
        <div className='results'>

            {
                results.map((movie)=>{
                    return(

                        <Link to={movie.original_title ?`/movie/${movie.id}` : `/tv/${movie.id}`} className='boxcon'>
                                <div className='box' style={{backgroundImage:`url(${`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`})`,backgroundSize:'cover'}}>
                                    <div className='moviedetails'>
                                        <p className='moviename'>{movie.original_title ?"Movie" : "Series"} : {movie.original_title ?movie.original_title : movie.name}</p>
                                        <p className='rating'>Rating : {movie.vote_average}  <span className='language'>-{movie.original_language}</span></p>

                                        <p className='overview'>{movie.overview ? movie.overview.slice(0,70) : ""}{'...'}</p>
                                
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
