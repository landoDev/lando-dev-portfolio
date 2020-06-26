import React from 'react';
import { AboutDiv, AboutText } from '../styles/index';


const AboutPage = () =>{
    return(
        <>
        <h2 className='responsive-title'>Background</h2>
        <AboutDiv>
            {/* <h2>My past life... Lando the football player</h2> */}
            <AboutText><strong>I</strong> was born across the street (or rather, across the parking lot) from Milan Puskar Stadium in Morgantown, WV. Don't worry, I will not go year by year of my life story. I simply mean to set the framework that I was born for football.
            <br></br>
            <br></br>
            For many years, 26 of them, football was my LIFE. Everything revolved around it. Growing up, I ate, slept, and dreamt of football and is a deep rooted passion of mine. I poured myself into it and as I grew and started to play it the passion intensified. With the passion came success. I was honored to have a string of success with it including playing in a HS All-American game, recieving a scholarship to play in college (Go Heels), becoming an All-American in college and eventually making it into the NFL.
            <br></br>
            <br></br>
            My NFL career was short-lived, tumultuous and transformative. Once again I won't bore with details here. the TL;DR is that my NFL career was rife with uncertainty and it rocked the foundation of my lifelong passion. Ultimately I retired in 2019 and looked toward the future.
            <br></br>
            <br></br>
            That future is in software development! I spent a year while my football career was on it's last legs and discovered a new passion in programming! Now I pour that passion into an IDE. With my life not all consumed by the machine of competition in professional athletics I have been able to pursue new ventures and hobbies. Perhaps too many as I my wife likes to point out.
            </AboutText>
        </AboutDiv>
        </>
    )
}

export default AboutPage