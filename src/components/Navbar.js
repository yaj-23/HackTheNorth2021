import React, {useState} from 'react';
import {Link} from 'react-scroll';
import "./Navbar.css";
import logo from '../images/logo1.png';



function Navbar() {

    const [click, setClick] = useState(false); /* Menu Toggle for Mobile Function*/
    const handleClick = () => setClick(!click);

    const[navbar, setNavbar] = useState(false);

    const changeBG = () => {
        if(window.scrollY >=80) {
            setNavbar(true)
        } else{
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBG); 



    return (
        <>
            <div className={navbar ? 'navbar active' : 'navbar'}> {/* This is the entire Navbar Component*/}
                
                <div className="navbar-container container"> {/* This is the Navbar Component Divisions like Logo and Links*/}
                    
                    <Link to='home' className='navbar-logo' duration={800} smooth={true}>{/* This is the Logo Component, imports sourse from images*/}
                    <img src={logo} alt=""/>
                    </Link>

                    <div className='menu-icon' onClick ={handleClick}> {/* This checks if its clicked, if yea, change to closed, if not keep displaying bars*/}
                        {click ? <img  alt=""/> : <img  alt=""/>}
                    </div>
                
                </div>

                <ul className = {click ? 'nav-menu active' : 'nav-menu'}> {/* If menu is active, show css for that, otherwise remain the normal css for menu items*/}
                    <li className='nav-item'> {/*  So basically ythis is the links, css is done for all those wjho are not clicked*/}
                        <Link to='home' className='nav-links' duration={800} smooth={true} >
                            Home
                        </Link>
                    </li>

                    <li className='nav-item'> {/*  So basically ythis is the links, css is done for all those wjho are not clicked*/}
                        <Link to='' className='nav-links' duration={800} smooth={true}>
                            VADA
                        </Link>
                    </li>

                    <li className='nav-item'> {/*  So basically ythis is the links, css is done for all those wjho are not clicked*/}
                        
                        <a href="https://creator.voiceflow.com/demo/60037a5ac2bfef001b823def3938" className='nav-links'>
                            VadaAI
                        </a>
                    
                    </li>

                    <li className='nav-item'> {/*  So basically ythis is the links, css is done for all those wjho are not clicked*/}
                        <Link to='about' className='nav-links' duration={800} smooth={true}>
                            About
                        </Link>
                    </li>
               
               
                </ul>
                

            </div>
        </>
    )
}

export default Navbar
