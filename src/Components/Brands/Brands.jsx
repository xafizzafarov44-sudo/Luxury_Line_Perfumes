import React from 'react'
import './Brands.css'
import { useTranslation } from 'react-i18next';
import bran1 from '../../assets/brand1.png';
import bran2 from '../../assets/brand2.png';
import bran3 from '../../assets/brand3.png';
import bran4 from '../../assets/brand4.png';
import bran5 from '../../assets/brand5.png';

const Brands = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
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
    </>
  )
}

export default Brands