import React from 'react';
import { Route } from 'react-router-dom'

import Navigation from './components/Navigation'
import Header from './components/Header'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <Navigation />
      {/* HOME PAGE */}
      <Route exact path='/'>
        <Header className="App-header" />
        <Skills />
        <Projects />
      </Route>
      {/* ABOUT PAGE */}
      <Route path='/about'>

      </Route>
      {/* CONTACT FORM */}
      <Route path='/contact'>

      </Route>
      <Footer />
    </div>
  );
}

export default App;
