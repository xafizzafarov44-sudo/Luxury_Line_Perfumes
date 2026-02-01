import React from 'react'
import './Footer.css'
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
          <footer className="footer">
        <div className="container">
          <div className="footer-container">

            <div className="footer-box" >
              <h6 className='footer-title' >
                {t("footer.contactTitle")}
              </h6>

              <p className='footer-text' >
                📞 {t("footer.call")} : <a href="tel:+971521330070">+971 52 133 0070</a>
              </p>

              <p className='footer-text' >
                ✉ {t("footer.email")} : <a href="mailto:info@luxlineuae.com">info@luxlineuae.com</a>
              </p>

              <p className='footer-text' >
                ✉ {t("footer.email")} : <a href="mailto:bakhti@luxlineuae.com">bakhti@luxlineuae.com</a>
              </p>
            </div>

            <div className="footer-box" >
              <p className='footer-text1'>
                {t("footer.description")}
              </p>
            </div>

            <div className="footer-box">
              <h6 className='footer-title' >
                {t("footer.bestTitle")}
              </h6>
              <p className='footer-text2' >
                {t("footer.bestText")}
              </p>
            </div>

          </div>

          <div className="footer-bottom">
            <p className='footer-text'>© 2024 {t("footer.allRight")}</p>
          </div>

        </div>
      </footer>
    </>
  )
}

export default Footer