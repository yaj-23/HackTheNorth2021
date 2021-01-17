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

                        <a href="https://creator.voiceflow.com/demo/60037a5ac2bfef001b823def3938" className='button-one'>
                            <Button buttonStyle='btn-primary' buttonColor='primary' buttonSize='btn-medium'>
                                AI Assistant
                            </Button>
                        </a>             
                            
                        <a href="https://vada-videochat.netlify.app/" className='button-one'>
                            <Button buttonStyle='btn-primary' buttonColor='primary' buttonSize='btn-medium'>
                                Talk To Doctor
                            </Button>
                        </a>
                        
                    </div>
                </div>
              
                <div className="anim" ref={anim}></div>
                
            </div>            
        </>
    )
}

export default Hero
