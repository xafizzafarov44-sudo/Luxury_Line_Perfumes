import { useState } from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';
import AccordianItem from '../public/Components/AccordianItem';
import Slider from "react-slick"; 
import Img from './assets/atir.png';
import Imgg from './assets/atir1.png';
import img from './assets/atir2.png';
import aboutImg from './assets/hero-img.png';
import vedioFile from './assets/video.mp4';
import bran1 from './assets/brand1.png';
import bran2 from './assets/brand2.png';
import bran3 from './assets/brand3.png';
import bran4 from './assets/brand4.png';
import bran5 from './assets/brand5.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";



function App() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    setOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-container">

            <div className="header-logo">
              <h1 className="header-title">Luxury Line Perfumes</h1>
            </div>

            <nav className="nav">
              <ul className="nav-list">
                <li className="nav-item" >{t("header.home")}</li>
                <li className="nav-item" >{t("header.about")}</li>
                <li className="nav-item" >{t("header.services")}</li>
                <li className="nav-item" >{t("header.contact")}</li>
              </ul>
            </nav>

            <div className="header-lang desktop-lang">
              <button onClick={() => changeLang("en")}>EN</button>
              <button onClick={() => changeLang("ru")}>RU</button>
              <button onClick={() => changeLang("uz")}>UZ</button>
            </div>

            <div
              className={`burger ${open ? "active" : ""}`}
              onClick={() => setOpen(!open)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>

          </div>
        </div>

        <div className={`mobile-menu ${open ? "open" : ""}`}>
          <ul>
            <li onClick={() => setOpen(false)}>{t("header.home")}</li>
            <li onClick={() => setOpen(false)}>{t("header.about")}</li>
            <li onClick={() => setOpen(false)}>{t("header.services")}</li>
            <li onClick={() => setOpen(false)}>{t("header.contact")}</li>
          </ul>

          <div className="header-lang mobile-lang">
            <button onClick={() => changeLang("en")}>EN</button>
            <button onClick={() => changeLang("ru")}>RU</button>
            <button onClick={() => changeLang("uz")}>UZ</button>
          </div>
        </div>
      </header>

      <Slider {...settings}>
        <div className='slider'>
          <div className="container">
            <ul className='hero-list'>
              <li className='hero-item'>
                <h3 className='hero-title'>{t("hero.slide1.title")}</h3>
                <p className='hero-text'>{t("hero.slide1.text")}</p>
                <button className='hero-btn'>{t("hero.slide1.btn")}</button>
              </li>
              <li className='hero-item'>
                <img className='hero-img' src={Img} alt="" />
              </li>
            </ul>
          </div>
        </div>

        <div className='slider'>
          <div className="container">
            <ul className='hero-list'>
              <li className='hero-item'>
                <h3 className='hero-title'>{t("hero.slide2.title")}</h3>
                <p className='hero-text'>{t("hero.slide2.text")}</p>
                <button className='hero-btn'>{t("hero.slide2.btn")}</button>
              </li>
              <li className='hero-item'>
                <img className='hero-img' id='img1' src={Imgg} alt="" />
              </li>
            </ul>
          </div>
        </div>

        <div className='slider'>
          <div className="container">
            <ul className='hero-list'>
              <li className='hero-item'>
                <h3 className='hero-title'>{t("hero.slide3.title")}</h3>
                <p className='hero-text'>{t("hero.slide3.text")}</p>
                <button className='hero-btn'>{t("hero.slide3.btn")}</button>
              </li>
              <li className='hero-item'>
                <img className='hero-img' id='img1' src={img} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </Slider>

      <div className="about">
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

      <main className='main'>
        <div className="container">
          <h2 className='main-title1'>{t("sustain.title")}</h2>
          <p className='main-text1'>{t("sustain.desc")}</p>

          <ul className='main-list'>
            <li className="main-item">
              <h4 className='main-title'>{t("sustain.item1.title")}</h4>
              <p className='main-text'>{t("sustain.item1.text")}</p>
            </li>
            <li className="main-item">
              <h4 className='main-title'>{t("sustain.item2.title")}</h4>
              <p className='main-text'>{t("sustain.item2.text")}</p>
            </li>
            <li className="main-item">
              <h4 className='main-title'>{t("sustain.item3.title")}</h4>
              <p className='main-text'>{t("sustain.item3.text")}</p>
            </li>
          </ul>

          <video
            className='vedeo'
            src={vedioFile}
            controls
            muted
            loop
            style={{ width: "100%" }}
          ></video>
        </div>
      </main>

      <div className="proces">
        <div className="container">
          <div className="proces-container">
            <h2 className="proces-title1">{t("process.title")}</h2>
            <p className='proces-text1'>{t("process.desc")}</p>

            <ul className="proces-list">
              <li className='proces-item'>
                <h5 className='proces-title'>{t("process.item1.title")}</h5>
                <p className='proces-text'>{t("process.item1.text")}</p>
              </li>

              <li className='proces-item'>
                <h5 className='proces-title'>{t("process.item2.title")}</h5>
                <p className='proces-text'>{t("process.item2.text")}</p>
              </li>

              <li className='proces-item'>
                <h5 className='proces-title'>{t("process.item3.title")}</h5>
                <p className='proces-text'>{t("process.item3.text")}</p>
              </li>

              <li className='proces-item'>
                <h5 className='proces-title'>{t("process.item4.title")}</h5>
                <p className='proces-text'>{t("process.item4.text")}</p>
              </li>

              <li className='proces-item'>
                <h5 className='proces-title'>{t("process.item5.title")}</h5>
                <p className='proces-text'>{t("process.item5.text")}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    
      <div className="container">
      <AccordianItem />
      </div>

      <div className="brands">
        <div className="container">
          <div className="brands-container">
            <h6 className='brands-title'>{t("brands.title")}</h6>
            <p className="brands-text">{t("brands.text")}</p>

            <ul className="brands-list">
              <li className="brands-item">
                <img className='brands-img' src={bran1} alt="brand 1" />
              </li>
              <li className="brands-item">
                <img className='brands-img' src={bran2} alt="brand 2" />
              </li>
              <li className="brands-item">
                <img className='brands-img' src={bran3} alt="brand 3" />
              </li>
              <li className="brands-item">
                <img className='brands-img' src={bran4} alt="brand 4" />
              </li>
              <li className="brands-item">
                <img className='brands-img' src={bran5} alt="brand 5" />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h6 className="section-title1">{t("section.title1")}</h6>
            <p className="section-text1">
              {t("section.text1")}
            </p>
          </div>

          <div className="section-card">
            <h6 className="section-title">{t("section.card1.title")}</h6>
            <p className="section-text">
              {t("section.card1.text")}
            </p>
          </div>

          <div className="section-card">
            <h6 className="section-title">{t("section.card2.title")}</h6>
            <p className="section-text">
              {t("section.card2.text")}
            </p>
          </div>

          <div className="section-card">
            <h6 className="section-title">{t("section.card3.title")}</h6>
            <p className="section-text">
              {t("section.card3.text")}
            </p>
          </div>

          <div className="section-card">
            <h6 className="section-title">{t("section.card4.title")}</h6>
            <p className="section-text">
              {t("section.card4.text")}
            </p>
          </div>
        </div>
      </section>

      <div className="contact">
        <div className="container">
          <h2 className='contact-title'>{t("contact.title")}</h2>

          <div className="contact-wrapper">
            <div className="form-box">
              <div className="row">
                <input type="text" placeholder={t("contact.form.name")} />
                <input type="number" placeholder={t("contact.form.phone")} />
              </div>
              <input type="email" placeholder={t("contact.form.email")} />
              <input type="text" placeholder={t("contact.form.subject")} />
              <textarea placeholder={t("contact.form.message")}></textarea>
              <button>{t("contact.form.button")}</button>
            </div>

            <div className="info-box">
              <p>
                <b>{t("contact.info.emailTitle")}:</b> info@luxlineuae.com
              </p>
              <p>
                <b>{t("contact.info.phoneTitle")}:</b> +971 52 133 0070
              </p>
              <p>
                <b>{t("contact.info.addressTitle")}:</b> 11 Shaikh Mohammed Bin Zayed street – Al Sajjah – Sharjah
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="touch">
        <div className="container">
          <h6 className="touch-title">{t("touch.title")}</h6>
          <p className="touch-text">{t("touch.text")}</p>
        </div>
      </div>

      <div style={{ width: "100%", height: "400px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.567812345!2d55.614173!3d25.328616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f3404ffdd993%3A0xc75882f5c0fc6df1!2sLuxury%20Line%20Perfumes%20Ind%20LLC!5e0!3m2!1sen!2sae!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <footer className="footer">
        <div className="container">
          <div className="footer-container">

            <div className="footer-box" data-aos="fade-right">
              <h6 className='footer-title' data-aos="zoom-in-right" data-aos-delay="300">
                {t("footer.contactTitle")}
              </h6>

              <p className='footer-text' data-aos="zoom-in-right" data-aos-delay="500">
                📞 {t("footer.call")} : <a href="tel:+971521330070">+971 52 133 0070</a>
              </p>

              <p className='footer-text' data-aos="zoom-in-right" data-aos-delay="700">
                ✉ {t("footer.email")} : <a href="mailto:info@luxlineuae.com">info@luxlineuae.com</a>
              </p>

              <p className='footer-text' data-aos="zoom-in-right" data-aos-delay="900">
                ✉ {t("footer.email")} : <a href="mailto:bakhti@luxlineuae.com">bakhti@luxlineuae.com</a>
              </p>
            </div>

            <div className="footer-box" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="1100">
              <p className='footer-text1'>
                {t("footer.description")}
              </p>
            </div>

            <div className="footer-box">
              <h6 className='footer-title' data-aos="fade-left" data-aos-delay="1300">
                {t("footer.bestTitle")}
              </h6>
              <p className='footer-text2' data-aos="fade-left" data-aos-delay="1500">
                {t("footer.bestText")}
              </p>
            </div>

          </div>

          <div className="footer-bottom" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="1700">
            <p className='footer-text'>© 2024 {t("footer.allRight")}</p>
          </div>

        </div>
      </footer>

  </>
  );
  
}
export default App;
