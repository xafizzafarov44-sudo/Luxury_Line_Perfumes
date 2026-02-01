import React from 'react'
import './Contact.css'
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
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
    </>
  )
}

export default Contact