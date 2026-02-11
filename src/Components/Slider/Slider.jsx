// import React from 'react'
// import './Slider.css'

// import { useTranslation } from 'react-i18next';
//   const { t, i18n } = useTranslation();


// const Slider = () => {  

//   const settings = {  
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };



//   return (
//     <>
      //  <Slider {...settings}>
      //   <div className='slider'>
      //     <div className="container">
      //       <ul className='hero-list'>
      //         <li className='hero-item'>
      //           <h3 className='hero-title'>{t("hero.slide1.title")}</h3>
      //           <p className='hero-text'>{t("hero.slide1.text")}</p>
      //           <button className='hero-btn'>{t("hero.slide1.btn")}</button>
      //         </li>
      //         <li className='hero-item'>
      //           <img className='hero-img' src={Img} alt="" />
      //         </li>
      //       </ul>
      //     </div>
      //   </div>

      //   <div className='slider'>
      //     <div className="container">
      //       <ul className='hero-list'>
      //         <li className='hero-item'>
      //           <h3 className='hero-title'>{t("hero.slide2.title")}</h3>
      //           <p className='hero-text'>{t("hero.slide2.text")}</p>
      //           <button className='hero-btn'>{t("hero.slide2.btn")}</button>
      //         </li>
      //         <li className='hero-item'>
      //           <img className='hero-img' id='img1' src={Imgg} alt="" />
      //         </li>
      //       </ul>
      //     </div>
      //   </div>

      //   <div className='slider'>
      //     <div className="container">
      //       <ul className='hero-list'>
      //         <li className='hero-item'>
      //           <h3 className='hero-title'>{t("hero.slide3.title")}</h3>
      //           <p className='hero-text'>{t("hero.slide3.text")}</p>
      //           <button className='hero-btn'>{t("hero.slide3.btn")}</button>
      //         </li>
      //         <li className='hero-item'>
      //           <img className='hero-img' id='img1' src={img} alt="" />
      //         </li>
      //       </ul>
      //     </div>
      //   </div>
      // </Slider>
//     </>
//   )
// }

// export default Slider

// import React from "react";
// import Slider from "react-slick";
// import './Slider.css'
// import Img from "../../assets/atir.png";
// import Imgg from "../../assets/atir1.png";
// import Img3 from "../../assets/atir2.png";
// import { useTranslation } from 'react-i18next';

// const SimpleSlider = () => {  
//   const { t } = useTranslation();

//   const settings = {  
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };

//   return (
//     <> 
//     <div className="container">

//     <Slider {...settings}>
//       <div className='slider'>
//         <div className="container">
//           <ul className='hero-list'>
//             <li className='hero-item'>
//               <h3 className='hero-title'>{t("hero.slide1.title")}</h3>
//               <p className='hero-text'>{t("hero.slide1.text")}</p>
//                <button className='hero-btn'>{t("hero.slide1.btn")}</button>
//             </li>
//             <li className='hero-item'>
//               <img className='hero-img' src={Img} alt="" />
//             </li>
//           </ul>
//         </div>
//       </div>

//       <div className='slider'>
//         <div className="container">
          // <ul className='hero-list'>
          //   <li className='hero-item'>
          //     <h3 className='hero-title'>{t("hero.slide2.title")}</h3>
          //     <p className='hero-text'>{t("hero.slide2.text")}</p>
          //     <button className='hero-btn'>{t("hero.slide2.btn")}</button>
          //   </li>
          //   <li className='hero-item'>
          //     <img className='hero-img' id='img1' src={Imgg} alt="" />
          //   </li>
          // </ul>
//         </div>
//       </div>

//       <div className='slider'>
//         <div className="container">
          // <ul className='hero-list'>
          //   <li className='hero-item'>
          //     <h3 className='hero-title'>{t("hero.slide3.title")}</h3>
          //     <p className='hero-text'>{t("hero.slide3.text")}</p>
          //     <button className='hero-btn'>{t("hero.slide3.btn")}</button>
          //   </li>
          //   <li className='hero-item'>
          //     <img className='hero-img' id='img1' src={Img3} alt="" />
          //   </li>
          // </ul>
//         </div>
//       </div>
//     </Slider>   
//     </div>
//     </>
          
       
//   );
// };

// export default SimpleSlider;

import React from "react";
import Slider from "react-slick";
import Img from "../../assets/atir.png";
import Imgg from "../../assets/atir1.png";
import Img3 from "../../assets/atir2.png";
import { useTranslation } from "react-i18next";
import "./Slider.css";


function Fade() {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    adaptiveHeight: false,
  };

//   const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   arrows: false,
//   adaptiveHeight: false, // false qilamiz
// };


  return (
    <div className="slideer">
      <div className="container">
        <Slider {...settings}>
          <div>
            <ul className="hero-list">
              <li className="hero-item">
                <h3 className="hero-title">{t("hero.slide1.title")}</h3>
                <p className="hero-text">{t("hero.slide1.text")}</p>
                <button className="hero-btn">{t("hero.slide1.btn")}</button>
              </li>
              <li className="hero-item">
                <img className="hero-img" src={Img} alt="" />
              </li>
            </ul>
          </div>

          <div>
            <ul className="hero-list">
              <li className="hero-item">
                <h3 className="hero-title">{t("hero.slide2.title")}</h3>
                <p className="hero-text">{t("hero.slide2.text")}</p>
                <button className="hero-btn">{t("hero.slide2.btn")}</button>
              </li>
              <li className="hero-item">
                <img className="hero-img" src={Imgg} alt="" />
              </li>
            </ul>
          </div>

          <div>
            <ul className="hero-list">
              <li className="hero-item">
                <h3 className="hero-title">{t("hero.slide3.title")}</h3>
                <p className="hero-text">{t("hero.slide3.text")}</p>
                <button className="hero-btn">{t("hero.slide3.btn")}</button>
              </li>
              <li className="hero-item">
                <img className="hero-img" src={Img3} alt="" />
              </li>
            </ul>
          </div>
        </Slider>
      </div>
    </div>
  );
}


export default Fade;

// export default function SimpleSlider() {

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <>
//     <div className="container">
      

    {/* <Slider {...settings}>
      <div className="slider">
        <div className="container">
          <ul className="hero-list">
            <li className="hero-item">
              <h3 className="hero-title">{t("hero.slide1.title")}</h3>
              <p className="hero-text">{t("hero.slide1.text")}</p>
              <button className="hero-btn">{t("hero.slide1.btn")}</button>
            </li>
            <li className="hero-item">
              <img className="hero-img" src={Img} alt="" />
            </li>
          </ul>
        </div>
      </div>

      <div className="slider">
        <div className="container">
          <ul className="hero-list">
            <li className="hero-item">
              <h3 className="hero-title">{t("hero.slide2.title")}</h3>
              <p className="hero-text">{t("hero.slide2.text")}</p>
              <button className="hero-btn">{t("hero.slide2.btn")}</button>
            </li>
            <li className="hero-item">
              <img className="hero-img" src={Imgg} alt="" />
            </li>
          </ul>
        </div>
      </div>

      <div className="slider">
        <div className="container">
          <ul className="hero-list">
            <li className="hero-item">
              <h3 className="hero-title">{t("hero.slide3.title")}</h3>
              <p className="hero-text">{t("hero.slide3.text")}</p>
              <button className="hero-btn">{t("hero.slide3.btn")}</button>
            </li>
            <li className="hero-item">
              <img className="hero-img" src={Img3} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </Slider> */}
//     </div>
//     </>
//   );
// }
