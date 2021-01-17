import React, {useEffect, useRef} from 'react';
import {Link} from 'react-scroll';
import lottie from 'lottie-web';
import './Hero.css';
{/* import {Button} from '../Button.js';*/}

function Hero() {

    const anim = useRef(null)

    useEffect(() =>{
        lottie.loadAnimation({
            container : anim.current,
            renderer:'svg',
            loop: true,
            autoplay: true,
            animationData: require('./lottiefiles/doctor.json')
        })
    }, [] )
    
    return (
        <>
            <div className='hero-container' id='home'>
                <div className='text'>
                    <h1 className="greetings">VADA</h1>
                    <p className="name">Video-Assisted-Doctor-Appointments</p>
                </div>
              
                <div className="anim" ref={anim}></div>
                
            </div>            
        </>
    )
}

export default Hero
