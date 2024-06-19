import {applyVueInReact, applyPureVueInReact} from 'veaury';
import Features from "./components/Features";
import Collaboration from "./components/Intro";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Mockup from "./model/Mockup.vue";
import {useState} from 'react'; 
// import gamestack-login from "./"

import gamestack from "./assets/gamestack-login.jpg";

const Mockup_ = applyVueInReact(Mockup);

const Projects = () => {
  return (
    <>
      
        <Mockup_ screen ={gamestack}/>

    </>
  );
};

export default Projects;
