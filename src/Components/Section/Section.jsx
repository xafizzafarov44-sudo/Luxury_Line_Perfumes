import React from 'react'
import './Section.css'
import { useTranslation } from 'react-i18next';

const Section = () => {
  const { t, i18n } = useTranslation(); 
  
  return (
    <>
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
    </>
  )
}

export default Section