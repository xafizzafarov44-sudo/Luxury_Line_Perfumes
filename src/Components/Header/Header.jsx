import React, { useState } from "react";
import "./Header.css";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    setOpen(false);
  };

  // smooth scroll uchun funksiya
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-container">

          <div className="header-logo">
            <h1 className="header-title">Luxury Line Perfumes</h1>
          </div>

          <nav className="nav">
            <ul className="nav-list">
              <li>
                <a href="#home">{t("header.home")}</a>
              </li>
              <li>
                <a href="#about">{t("header.about")}</a>
              </li>
              <li>
                <a href="#services">{t("header.services")}</a>
              </li>
              <li>
                <a href="#contact">{t("header.contact")}</a>
              </li>
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

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <div className="mobile-top">
          <button className="back-btn" onClick={() => setOpen(false)}>
            ←
          </button>
        </div>

        <ul>
          <li onClick={() => scrollTo("home")}>{t("header.home")}</li>
          <li onClick={() => scrollTo("about")}>{t("header.about")}</li>
          <li onClick={() => scrollTo("services")}>{t("header.services")}</li>
          <li onClick={() => scrollTo("contact")}>{t("header.contact")}</li>
        </ul>

        <div className="header-lang mobile-lang">
          <button onClick={() => changeLang("en")}>EN</button>
          <button onClick={() => changeLang("ru")}>RU</button>
          <button onClick={() => changeLang("uz")}>UZ</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
