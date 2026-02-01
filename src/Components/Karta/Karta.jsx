import React from 'react'
import './Karta.css'
import { useTranslation } from 'react-i18next';

const Karta = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
          <div style={{ width: "100%", height: "400px" }} className="karta" id='contact'>
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
    </>
  )
}

export default Karta