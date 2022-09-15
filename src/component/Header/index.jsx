import React from "react";
import "./Header.sass";

import LogoTokar from "../../assets/img/Logo.png";
import Telegram from "../../assets/img/icons/Telegram.png";
import WhatsApp from "../../assets/img/icons/WhatsApp.png";
import Viber from "../../assets/img/icons/Viber.png";
import FlagRu from "../../assets/img/icons/FlagRu.png";
import ArrowBottom from "../../assets/img/icons/ArrowBottom.png";

import ButtonOrange from "../ButtonOrange";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="rowTop">
            <div className="logo">
              <img src={LogoTokar} alt="logo" className="logoImg" />
              <div className="logoDesc">
                TokarCompany - производственно -строительная компания
              </div>
            </div>

            <div className="social">
              <p>Связаться напрямую:</p>
              <div className="icons">
                <a href="#">
                  <img src={Telegram} alt="logo" className="telegram" />
                </a>
                <a href="">
                  <img src={WhatsApp} alt="logo" className="whatsApp" />
                </a>
                <a href="">
                  <img src={Viber} alt="logo" className="viber" />
                </a>
              </div>
            </div>

            <div className="phone">
              <a href="tel:+380671755630">+3 80 (67) 175 56 30</a>
              <p>с 09:00 до 18:00 (пн-вс)</p>
            </div>

            <div className="btn">
              <ButtonOrange text="Заказать звонок" />
              <span>Бесплатно по Украине</span>
            </div>

            <div className="flag">
              <img src={FlagRu} alt="logo" className="flagRu" />
              <img src={ArrowBottom} alt="logo" className="arrowBottom" />
            </div>
          </div>

          <div className="rowBot">
            <div className="nav">
              <div className="links__brow">
                <a href="#" className="link">
                  Жилое
                </a>
                <a href="#" className="link">
                  Коммерческое
                </a>
                <a href="#" className="link">
                  Садовое
                </a>
              </div>
              <div className="links__dark">
                <a href="#" className="link">
                  О компании
                </a>
                <a href="#" className="link">
                  Наши работы
                </a>
                <a href="#" className="link">
                  Контакты
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
