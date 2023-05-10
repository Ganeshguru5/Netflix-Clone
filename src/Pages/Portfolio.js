import React, { useState } from 'react'
import "../styles/Portfolio.css"
import Background from "../assets/Protfolio/background.jpg"
import biglogo from "../assets/logo/biglogo.png"
import image1 from "../assets/Protfolio/image1.png"
import image2 from "../assets/Protfolio/image2.png"
import image3 from "../assets/Protfolio/image3.png"
import image4 from "../assets/Protfolio/image4.png"
import FAQs from '../Data/FAQData'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Portfolio() {
    const [displayIndex, setDisplayIndex] = useState(-1);

    const toggleAnswer = (index) => {
      if (displayIndex === index) {
        // if the same question is clicked twice, close it
        setDisplayIndex(-1);
      } else {
        setDisplayIndex(index);
      }
    }
  return (
    <div className='PortfolioCon'>
        <div className='NavPort'> 
            <div className='logoConPort'>
                <img src={biglogo} className='logo'/>
            </div>
            <div className='portbtncon'>
                <div className='languagecon'>
                    <select className='selectin'>
                        <option>English</option>
                        <option>Tamil</option>
                    </select>
                </div>
                <Link to='/Accounts' className='signinbtncon'style={{textDecoration:'none'}}>
                    <button className='Signinbtn'>Sign in</button>
                </Link>
            </div>
            
        </div>
        <div style={style} className='banner'>
            <div className='banneritems'>
                <h1 className='bannertitle1'>Unlimited movies,TV shows and more</h1>
                <p className='bannertitle2'>Watch anywhere. Cancel anytime.</p>
                <p className='bannertitle3'>Ready to watch? Enter your email to create or restart your membership.</p>
                <div className='getstarted'>
                    <input className='enteremail' placeholder='Enter your email address'/>
                    <button  className='startbtn'>Get started</button>
                </div>
            </div>
        </div>

        <div className='TypesCon'>
            <div className='firstType'>
                <div className='wordscon'>
                    <div>
                    <p className='typeone'>Enjoy on your TV</p>
                    
                    <p className='typetwo'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple Tv, Blu-ray players and more</p>
                    </div>
                </div>
                <div className='imageion'>
                    <img src={image1}/>
                </div>
            </div>
            <hr className='line'/>
            <div className='secondType'>
            <div className='wordscon'>
                    <div>
                    <p className='typeone'>Watch everywhere</p>
                    
                    <p className='typetwo'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                    </div>
                </div>
                <div className='imageion'>
                    <img src={image2}/>
                </div>
            </div>
             <hr className='line'/>
             <div className='firstType'>
                <div className='wordscon'>
                    <div>
                    <p className='typeone'>Create profiles for kids</p>
                    
                    <p className='typetwo'>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
                    </div>
                </div>
                <div className='imageion'>
                    <img src={image3}/>
                </div>
            </div>
            <hr className='line'/>
            <div className='secondType'>
            <div className='wordscon'>
                    <div>
                    <p className='typeone'>Download your shows to watch offline</p>
                    
                    <p className='typetwo'>Save your favourites easily and always have something to watch.</p>
                    </div>
                </div>
                <div className='imageion'>
                    <img src={image4}/>
                </div>
            </div>
             <hr className='line'/>
        </div>

        <div className='FAQcon'>
            <p className='faqtit'>Frequently Asked Questions</p>
            <div className='Questions'>
                {
                    FAQs.map((item,index)=>{
                        return(
                            <div className='eachques'>
                                <motion.div whileHover={{backgroundColor:'#223362',transition:0.8}} className='Question' onClick={() => toggleAnswer(index)}>
                                    <p className='ques'>{item.Ques}</p>
                                </motion.div>
                                <motion.div whileInView={{transition:0.5}} className='Answer' style={{display: displayIndex === index ? 'flex' : 'none'}}>
                                    <p className='ans'>
                                    {item.Ans}
                                    </p>
                                </motion.div>
                            </div>
                        )
                    })
                }
                
                
                
            </div>
            <div className='redaycon'>
                <p className='ready'>Ready to watch? Enter your email to create or restart your membership.</p>
            </div>
            <div className='getstarted'>
                    <input className='enteremail' placeholder='Enter your email address'/>
                    <button  className='startbtn'>Get started</button>
            </div>
            <div className='callus'>
                <p className='calltxt'>Questions? Call 000-800-919-1694</p>
            </div>
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
    </div>
  )
}
const style={
    backgroundImage: `linear-gradient(to left,#5D141D, rgba(0, 0, 255, 0.3), rgba(255, 0, 0, 0.3)), url(${Background})`,
    background: `rgba(0,0,0,0.6) url(${Background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundBlendMode: 'darken',
}
