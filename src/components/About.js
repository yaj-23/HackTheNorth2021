import React from 'react';
import './About.css';


function About() {

    
    return (
        <>
            <div className='about-container' id='about'>
                <div className='text'>
                    <h1 className="header_about">What is VADA</h1>
                    <p className="header_about1">Covid-19 has turned the entire world upside down, people are unable to talk to healthcare specialists, doctors, and officials.</p>
                </div>
              
                <div className='cards'>
                    <div className='what_card'>
                        <h1 className='header_about2-1'>How VADA Works</h1>
                        <p1 className='header_about3'>We provide an autoamted chat assistant available through Google Assistant, which screens you for covid-19 symptoms. Which is stored in an excel sheet, which is linked to our database. Once you are ready for your appointment, that detail is fetched and provided to the doctor. By clicking get started, or VADA, you are able to join a video call with a health care official who can view your screening questions, along with answer any health-related questions you may have.</p1>
                        
                            
                    </div>

                    <div className='what_card'>
                        <h1 className='header_about2'>How its Made</h1>
                        <p1 className='header_about3'>Vada uses a variety of techincal solutions to present an innovative take on creating Patient-Doctor appointments/interviwes. We utilize Voiceflow for our automated chatbot system which is intergrated with Google Assistant Programs. The data received from the chatbot is stored in an excel file which uses Dropbase to store into a database. This data is fetched using REST API Methods, and utilized to publish on a website/chat area or a physical document of some sort. The website is created using React Js, HTML, and Css</p1>
                    </div>
                    

                </div>
                
            </div>            
        </>
    )
}

export default About
