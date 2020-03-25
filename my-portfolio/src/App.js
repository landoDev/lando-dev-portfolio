import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios'
import styled from 'styled-components';

import { HomeContext } from './contexts/HomeContext'

import Navigation from './components/Navigation'
import Header from './components/Header'
import Skills from './components/Skills'
import Projects from './components/Projects'
import AboutPage from './components/AboutPage'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm';

const ContentDiv = styled.div`
  flex: 1 0 auto;
`;
const FooterPosition = styled.div`
  flex-shink: 0;
`;


function App() {
  const [github, setGithub]= useState([]);
  const [zeit, setZeit] = useState([]);
  const [netlify, setNetlify] = useState([]);
  // ****  EVENTUALLY I WILL WORK WITH ZEIT AND NETLIFY TO USE THEIR API UNTIL THEN I WILL HARDCODE LINKS IN THE PROJECT DIVS **** //

  useEffect(()=>{
    axios.get('https://api.github.com/users/landoDev')
    .then(res=>{
      // THIS RETURNS AN OBJECT WHICH IS OKAY FOR NOW
      console.log(res.data)
      setGithub(res.data)
    })
    .catch(err=> console.log('SON OF A...', err))
  }, [])

  // .then(()=> axios.get('https://api.zeit.co/www/landoDev')
  // .then(res=>{
  //   console.log('ZEIT',res.data)
  //   // DON'T FORGET TO SPREAD THE ARRAY
  //   setZeit(...zeit, res.data)
  // }))
  // useEffect(()=>{
  //   axios.get('')
  //   .then(res=>{
  //     console.log(res.data)
  //     // DON'T FORGET TO SPREAD THE ARRAY
  //     setNetlify([...netlify, res.data])
  //   })
  // }, [])
  
  return (
    <div className="App">
      <Navigation />
      {/* HOME PAGE */}
      <HomeContext.Provider value={github}>
        <Route exact path='/'>
          <Header className="App-header" />
          <Skills />
          <Projects />
        </Route>
      {/* ABOUT PAGE */}
      <Route path='/about'>
        <AboutPage />
      </Route>
      {/* CONTACT FORM */}
      <Route path='/contact'>
        <ContactForm />
      </Route>
        <Footer />
      </HomeContext.Provider>
    </div>
  );
}

export default App;
