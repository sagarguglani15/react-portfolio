import React from "react";

//Components
import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyCarousel from './components/my-carousel/mycarousel.component'
import TitleMessage from './components/title-message/title-message.component'
import AboutMe from './pages/about/about.component'
import Skills from './pages/skills/skills.component'

import './App.css';

const App = () => {
  return (
    <div className="App">
      <MyNavbar />
      <MyCarousel/>
      <TitleMessage/>
      <AboutMe/>
      <Skills/>
    </div>
  );
}

export default App;
