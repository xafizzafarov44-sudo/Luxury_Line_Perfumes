import React from 'react'
import './Proces.css'
import { useTranslation } from 'react-i18next';

const Proces = () => {
    const { t, i18n } = useTranslation();
  return (
    <>
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
    </>
  )
}

export default Proces