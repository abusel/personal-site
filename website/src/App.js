import React from 'react'
import './App.css'
import 'animate.css'

import { Router,Route } from "react-router-dom"

import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import ParticleBackground from './components/particle-background/particle-background'

import LandingPage from './pages/landing-page/landing-page'
import AboutPage from './pages/about-page/about-page'
import SkillsPage from './pages/skills-page/skills-page'
import ProjectsPage from './pages/projects-page/projects-page'
import ExperiencePage from './pages/experience-page/experience-page'

import {createBrowserHistory} from "history"


 const history = createBrowserHistory()

const sections = [
  {
    name: 'About',
    to: '#about'
  },
  {
    name: 'Experience',
    to: '#experience'
  },
  {
    name: 'Projects',
    to: '#projects'
  },
  {
    name: 'Skills',
    to: '#skills'
  }
]

function App() {
  return (
    <>
<Router history={history}>


<Route path="/test">

      </Route>

    <Route path="/" exact>
      <>
      <Navbar items={sections}/>
      <Footer/>
      <ParticleBackground color='#122932'/>
      <div id='body'>
        <LandingPage/>
        <AboutPage/>
        <ExperiencePage/>
        <ProjectsPage/>
        <SkillsPage/>
      </div>
      </>
      </Route>
      </Router>
    </>
  )
}

export default App
