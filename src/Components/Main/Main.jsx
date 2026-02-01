import React from 'react'
import './Main.css'
import videoFile from "../../assets/video.mp4";
import { useTranslation } from 'react-i18next';

const Main = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
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
               <video className="video" src={videoFile} controls loop muted />
            </div>
          </main>
    </>
  )
}

export default Main

