import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios'
import Paper from '@material-ui/core/Paper';

import { HomeContext } from './contexts/HomeContext'

import Navigation from './components/Navigation'
import Header from './components/Header'
import Skills from './components/Skills'
import Projects from './components/Projects'
import AboutPage from './components/AboutPage'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm';
import { BodyContainer } from './styles/index';

function App() {
  console.log('Ahem... Can I help you? 🤨')
  const [github, setGithub]= useState([]);
  console.log(github)
  const [repoData, setRepoData] = useState([]);
  const whitelist = []
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
      <Navigation />
      {/* HOME PAGE */}
      <HomeContext.Provider value={github}>
        <Route exact path='/'>
          <Header className="App-header" />
          <BodyContainer>
          <Paper elevation={3}>
            <Skills />
          </Paper>
            <AboutPage />
            <Projects />
          </BodyContainer>     
        </Route>
      {/* ABOUT PAGE */}
      <Route path='/about'>
        
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
