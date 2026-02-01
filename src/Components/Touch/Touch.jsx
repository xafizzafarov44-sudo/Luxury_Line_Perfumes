import React from 'react'
import './Touch.css'
import { useTranslation } from 'react-i18next';

const Touch = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
          <div className="touch">
        <div className="container">
          <h6 className="touch-title">{t("touch.title")}</h6>
          <p className="touch-text">{t("touch.text")}</p>
        </div>
      </div>
    </>
  )
}

export default Touch