import React, {useEffect, useRef} from 'react';
import {Link} from 'react-scroll';
import lottie from 'lottie-web';
import './Hero.css';
 import {Button} from './Button.js';

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
                    <p className="name">Video Assisted Doctor Appointments</p>

                    <div className='buttons'>
                        <Link to='about' className='button-one'  duration={800} smooth={true}>                
                            <Button buttonStyle='btn-primary' buttonColor='primary' buttonSize='btn-medium'>
                                About
                            </Button>
                        </Link>

                        <Link to='about' className='button-one'  duration={800} smooth={true}>                
                            <Button buttonStyle='btn-primary' buttonColor='primary' buttonSize='btn-medium'>
                                AI Assistant
                            </Button>
                        </Link>

                        <Link to='about' className='button-one'  duration={800} smooth={true}>                
                            <Button buttonStyle='btn-primary' buttonColor='primary' buttonSize='btn-medium'>
                                Talk To Doctor
                            </Button>
                        </Link>
                    </div>
                </div>
              
                <div className="anim" ref={anim}></div>
                
            </div>            
        </>
    )
}

export default Hero
