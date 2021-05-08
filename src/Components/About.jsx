import React from 'react';
import aboutImage from '../images/about.png';
function About() {
    return (
        <div id='about'>
            <div className="about-text">
                <h1> UPCOMING EVENTS</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita perspiciatis accusamus iure eos aliquam omnis tenetur.</p>
                <button> Read More</button>
            </div>
            <div className="about-image">
                <img src={aboutImage} alt=''/>
            </div>
        </div>
        
    )

}

export default About;