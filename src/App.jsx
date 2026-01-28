import { useState } from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';
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
                <li className="nav-item">{t("header.home")}</li>
                <li className="nav-item">{t("header.about")}</li>
                <li className="nav-item">{t("header.services")}</li>
                <li className="nav-item">{t("header.contact")}</li>
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
                <h3 className='hero-title'>Exclusive Collections</h3>
                <p className='hero-text'>Experience the art of fragrance with our exclusive line of luxury perfumes, crafted to perfection.</p>
                <button className='hero-btn'>EXPLORE NOW</button>
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
                <h3 className='hero-title'>Create Your Own Fragrance</h3>
                <p className='hero-text'>Our expert perfumers develop a scent that is truly one-of-a-kind, using the finest ingredients and advanced techniques.</p>
                <button className='hero-btn'>CONTACT US</button>
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
                <h3 className='hero-title'>Discover Your Signature Scent</h3>
                <p className='hero-text'>Indulge in our exclusive collections, each telling a story of elegance and charm.</p>
                <button className='hero-btn'>MAKE A REQUEST</button>
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
                <h2 className="about-title">ABOUT LUXURY LINE PERFUMES</h2>
                <p className="about-text">At Luxury Line Perfumes, we believe that a fragrance is not just a scent but an experience. We offer an exquisite collection of hand-crafted perfumes, made from the finest ingredients sourced from around the world. Each bottle is a testament to our commitment to quality, elegance, and sophistication. Whether you are looking for a signature scent, a custom blend, or a gift for a loved one, our team of expert perfumers is here to guide you on a sensory journey like no other. Step into our world and discover the art of fragrance.</p>
                <button className='about-btn'>LEARN MORE</button>
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
          <h2 className='main-title1'>SUSTAINABILITY</h2>
          <p className='main-text1'>At our company, sustainability is at the core of our mission and values. We are dedicated to adopting and promoting eco-friendly practices across all aspects of our business. Here’s how we make a difference:</p>
          <ul className='main-list'>
            <li className="main-item">
              <h4 className='main-title'>Eco-friendly Production</h4>
              <p className='main-text'>We utilize sustainable materials and processes in our production to reduce our carbon footprint. Our facilities are designed to minimize waste and optimize energy efficiency.</p>
            </li>
            <li className="main-item">
              <h4 className='main-title'>Community Engagement</h4>
              <p className='main-text'>We engage with local communities to support environmental conservation projects and promote awareness about sustainable living .</p>
            </li>
            <li className="main-item">
              <h4 className='main-title'>Innovation & Efficiency</h4>
              <p className='main-text'>We are committed to driving innovation that leads to greater sustainability. By enhancing our processes and technologies, we aim to reduce environmental impact while improving product quality and efficiency.</p>
            </li>
          </ul>  
          <video className='vedeo'
            src={vedioFile}
            controls
            muted
            loop
            style={{ width: "100%", }}
          ></video>


         
        </div>
      </main>  

      <div className="proces">
        <div className="container">
          <div className="proces-container">
            <h2 className="proces-title1">OUR PROCESS</h2>
            <p className='proces-text1'>At Luxury Line Perfumes, our fragrances are created through a meticulous process that ensures every bottle is a masterpiece. Here's a glimpse into our process:</p>
            <ul className="proces-list">
              <li className='proces-item'>
                <h5 className='proces-title'>Ingredient Sourcing</h5>
                <p className='proces-text'>We source the finest ingredients from around the world, including rare flowers, exotic spices, and precious woods.</p>
              </li>
              <li className='proces-item'>
                <h5 className='proces-title'>Expert Blending</h5>
                <p className='proces-text'>Our team of expert perfumers carefully blends each ingredient to create harmonious and unique scents.</p>
              </li>
              <li className='proces-item'>
                <h5 className='proces-title'>Quality Control</h5>
                <p className='proces-text'>Every batch undergoes rigorous quality control checks to ensure consistency and excellence.</p>
              </li>
              <li className='proces-item'>
                <h5 className='proces-title'>Handcrafting</h5>
                <p className='proces-text'>Each bottle is hand-filled and meticulously packaged to preserve the integrity of the fragrance.</p>
              </li> 
              <li className='proces-item'>
                <h5 className='proces-title'>Sustainable Practices</h5>
                <p className='proces-text'>We are committed to sustainable practices, ensuring our processes are environmentally friendly and ethically responsible.</p>
              </li>
            </ul>
          </div>
        </div>
      </div> 

      <div className="brands">
        <div className="container">
          <div className="brands-container">
            <h6 className='brands-title'>OUR BRANDS</h6>
            <p className="brands-text">Meet our famous brands</p>
            <ul className="brands-list">
              <li className="brands-item">
                <img className='brands-img' src={bran1} alt="" />
              </li>
              <li className="brands-item">
                <img className='brands-img' src={bran2} alt="" />
              </li>
              <li className="brands-item">
                <img className='brands-img' src={bran3} alt="" />
              </li>
              <li className="brands-item">
                <img className='brands-img' src={bran4} alt="" />
              </li>
              <li className="brands-item">
                <img className='brands-img' src={bran5} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h6 className="section-title1">OUR WORKING PROCESS</h6>
            <p className="section-text1">
              Discover our range of professional services designed to meet your fragrance needs.
            </p>
          </div>

          <div className="section-card">
            <h6 className="section-title">Contract Manufacturing</h6>
            <p className="section-text">
              At Luxury Line Perfumes, we offer bespoke contract manufacturing services for clients seeking to create unique fragrances. Our state-of-the-art facility in the UAE is equipped with advanced technology and staffed by experienced perfumers and chemists. We work closely with you from concept to completion, ensuring that every aspect of your fragrance meets your exact specifications. Whether you're looking to develop a signature scent or a complete product line, our team is dedicated to delivering exceptional quality and unparalleled service.
            </p>
          </div>

          <div className="section-card">
            <h6 className="section-title">Contract Filling</h6>
            <p className="section-text">
            Luxury Line Perfumes provides professional contract filling services, ensuring your fragrances are packaged with precision and care. Our automated filling lines can handle a variety of bottle sizes and shapes, catering to both small and large production runs. We maintain stringent quality control measures to guarantee that every bottle is filled accurately and consistently. Partner with us to streamline your production process and ensure your products reach the market flawlessly packaged and ready for sale.
            </p>
          </div>

          <div className="section-card">
            <h6 className="section-title">Distribution of Other Brands</h6>
            <p className="section-text">
             In addition to manufacturing our own luxury fragrances, Luxury Line Perfumes is proud to offer distribution services for other premium fragrance brands. Our extensive distribution network covers the entire UAE and beyond, providing brands with access to a wide range of retail and wholesale channels. We handle logistics, storage, and delivery, ensuring that your products are distributed efficiently and reach your customers in perfect condition. Trust us to be your reliable partner in expanding your brand's reach and presence in the market.
            </p>
          </div>

          <div className="section-card">
            <h6 className="section-title">Manufacturing of Our Brand Fragrances</h6>
            <p className="section-text">
             Luxury Line Perfumes is synonymous with elegance, sophistication, and unparalleled craftsmanship. Our in-house brand fragrances are meticulously crafted using the finest ingredients sourced from around the world. Each scent is a masterpiece, embodying the essence of luxury and refinement. From classic to contemporary, our diverse collection of fragrances caters to discerning tastes and preferences. Explore our range to discover the perfect scent that resonates with your unique style and personality.
            </p>
          </div>
        </div>
      </section>


      <div className="contact">
        <div className="container">
          <h2 className='contact-title'>Contact Us</h2>
          <div className="contact-wrapper">
            <div className="form-box">
              <div className="row">
                <input type="text" placeholder="Name *" />
                <input type="number" placeholder="Phone Number *" />
              </div>
              <input type="email" placeholder="Email *" />
              <input type="text" placeholder="Your subject" />
              <textarea placeholder="Message"></textarea>
              <button>SEND</button>
            </div>
            <div className="info-box">
              <p><b>Email:</b> info@luxlineuae.com</p>
              <p><b>Phone:</b> +971 52 133 0070</p>
              <p>
              <b>Address:</b> 11 Shaikh Mohammed Bin Zayed street – Al Sajjah – Sharjah
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="touch">
        <div className="container">
          <h6 className="touch-title">Get In Touch</h6>
          <p className="touch-text">Discover the essence of luxury with our exquisite fragrance collection. Whether you have a question, need assistance, or simply want to share your thoughts, we're here to help. Connect with us and immerse yourself in the world of captivating scents.</p>
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
        <div className="footer-box">
          <h6 className='footer-title'>CONTACT US</h6>
          <p className='footer-text'>📞 Call : <a href="tel:+971521330070">+971 52 133 0070</a></p>
          <p className='footer-text'>✉ Email :<a href="mailto:info@luxlineuae.com">info@luxlineuae.com</a></p>
          <p className='footer-text'>✉ Email :<a href="mailto:bakhti@luxlineuae.com">bakhti@luxlineuae.com</a></p>
        </div>
        <div className="footer-box">
          <p className='footer-text1'>
            At Luxury Line Perfumes, we create exquisite fragrances that
            captivate your senses and leave a lasting impression.
            Explore our collection and find your signature scent today.
          </p>
        </div>
        <div className="footer-box">
          <h6 className='footer-title'>BEST PRODUCTS</h6>
          <p className='footer-text2'>Discover our most popular fragrances.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p className='footer-text'></p>© 2024 All Rights Reserved.
      </div>
      </div>
    </footer>

  </>
  );
  
}
export default App;
