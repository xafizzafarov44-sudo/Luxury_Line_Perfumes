import React from 'react'
import './About.css'
import aboutImg from '../../assets/hero-img.png';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
          <div className="about" id='about'>
            <div className="container">
              <div className="about-container">
                <ul className='about-list'>
                  <li className="about-item">
                    <h2 className="about-title">{t("about.title")}</h2>
                    <p className="about-text">{t("about.text")}</p>
                    <button className='about-btn'>{t("about.btn")}</button>
                  </li>
                  <li className="about-item">
                    <img className='about-img' src={aboutImg} alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
    </>
  )
}

export default About