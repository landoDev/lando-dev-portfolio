import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios'
import { HomeContext } from './contexts/HomeContext'

// import Navigation from './components/Navigation'
import Header from './components/Header'
import Skills from './components/Skills'
import Projects from './components/Projects'
import AboutPage from './components/AboutPage'
import { Footer } from './components/Footer'
import ContactForm from './components/ContactForm';
import { BodyContainer, TitleContainer, AboutContainer } from './styles/index';
import SkillsMap from './components/SkillsMap';

function App() {
  console.log('Ahem... Can I help you? 🤨')
  const [github, setGithub]= useState([]);
  // console.log(github);
  const whitelist = [];
  // MAKE A WHITELIST OF REPOS FOR PROJECTS PAGE AND MAP THROUGH THEM TO CREATE LINKS TO THEM
  // drill whitelist into components that need them

  useEffect(()=>{
    axios.get('https://api.github.com/users/landoDev')
    .then(res=>{
      setGithub(res.data)
    })
    .catch(err=>{
      console.log(err)
    });
    
  }, [])

  
  return (
    <div className="App">
      {/* <Navigation /> */}
      {/* HOME PAGE */}
      <HomeContext.Provider value={github}>
        <Route exact path='/'>
          <Header className="App-header" />
          <TitleContainer>
            <h2 className='title skills'>Skills</h2>
            <h2 className='title background'>Background</h2>
          </TitleContainer>
          <BodyContainer>
            <div className='sub-body skills'>
              <SkillsMap />
              {/* <Skills /> */}
            </div>
            <AboutContainer className='sub-body about'>
              <AboutPage />
            </AboutContainer>
          </BodyContainer>
            <Projects />   
        </Route>
      {/* CONTACT PAGE */}
      <Route path='/contact'>
        <ContactForm />
      </Route>
        <Footer />
      </HomeContext.Provider>
    </div>
  );
}

export default App;
