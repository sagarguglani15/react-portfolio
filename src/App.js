import React from "react";

//Components
import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyCarousel from './components/my-carousel/mycarousel.component'
import TitleMessage from './components/title-message/title-message.component'
import AboutMe from './pages/about/about.component'
import Skills from './pages/skills/skills.component'
import Internships from './pages/internships/internship.component'
import Projects from './pages/projects/project.component'
import Contact from './pages/contact/contact.component'
import Footer from './components/footer/footer.component'
import Scroller from './components/scroller/scroll.component'

import './App.css';

const App = () => {
  return (
    <div className="App">
      <MyNavbar />
      <MyCarousel />
      <Scroller/>
      <TitleMessage />
      <AboutMe />
      <Skills />
      <Internships />
      <Projects/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
