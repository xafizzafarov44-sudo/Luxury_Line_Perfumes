// import React from 'react'
// import { useState } from 'react';
// import './App.css';
// import { useTranslation } from 'react-i18next';
// import AccordianItem from './Components/AccordianItem';
// import Slider from "react-slick"; 

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";




import React from 'react';
import './App.css';

import Header from './Components/Header/Header';
import SimpleSlider from './Components/Slider/Slider';
import About from './Components/About/About';
import Main from './Components/Main/Main';
import Proces from "./Components/Proces/Proces";
import Brandis from './Components/Brands/Brands';
import Section from './Components/Section/Section';
import Contact from './Components/Contact/Contact';
import Touch from './Components/Touch/Touch';
import Karta from './Components/Karta/Karta';
import Footer from './Components/Footer/Footer';
import AccordianItem from './Components/AccordianItem';


const App = () => {
  return (
    <>
      <Header />
      <SimpleSlider />
      <About />
      <Main />
      <Proces />

      <div className="container">
        <AccordianItem />
      </div>

      <Brandis />
      <Section />
      <Contact />
      <Touch />
      <Karta />
      <Footer />
    </>
  );
};

export default App;
