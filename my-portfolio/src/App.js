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

function App() {
  console.log('Ahem... Can I help you? 🤨')
  const [github, setGithub]= useState([]);
  const [repoData, setRepoData] = useState([])
  const repos = `${github.repos_url}`
  // MAKE A WHITELIST OF REPOS FOR PROJECTS PAGE AND MAP THROUGH THEM TO CREATE LINKS TO THEM

  useEffect(()=>{
    axios.get('https://api.github.com/users/landoDev')
    .then(res=>{
      setGithub(res.data)
    })
    .then(
      axios.get('https://api.github.com/users/landoDev/repos')
      .then(res=>{
        console.log('repo data', res.data)
          setRepoData(res.data)
      })
      .catch(err=>{
          console.log(err)
      })
    );
  }, [])

  
  return (
    <div className="App">
      <Navigation />
      {/* HOME PAGE */}
      <HomeContext.Provider value={github}>
        <Route exact path='/'>
          <Header className="App-header" />
          <Skills />
          <Projects repoData={repoData}/>
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
