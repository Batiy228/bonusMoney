import React, { useState } from "react";
import { getEnding } from "../../helpers/getEnding";
import Popup from "../Popup/Popup";
import { buttonsForPopup } from "../../@types/buttonsForPopup";
import Buttons from "./Buttons";
import { card } from "../../@types/Card/card";
import "./Card.scss";

const Card: React.FC<card> = React.memo(
  ({ mobileAppDashboard, customerMarkParameters, companyId }) => {
    const {
      companyName,
      logo,
      accentColor,
      backgroundColor,
      cardBackgroundColor,
      highlightTextColor,
      mainColor,
      textColor,
    } = mobileAppDashboard;

    const { loyaltyLevel, mark } = customerMarkParameters;
    const { cashToMark, name } = loyaltyLevel;
    const [activePopup, setActivePopup] = useState(false);
    const [nameBtn, setNameBtn] = useState<buttonsForPopup>(null);

    const openModal = (btn: buttonsForPopup) => {
      setActivePopup(true);
      setNameBtn(btn);
    };

    const closePopup = () => {
      setActivePopup(false);
    };

    return (
      <div
        className="card"
        style={{
          backgroundColor: cardBackgroundColor,
        }}
      >
        <div className="content">
          <div className="header">
            <span style={{ color: highlightTextColor }}>{companyName}</span>
            <img src={logo} alt="logo" />
          </div>
          <hr />
          <div className="mark">
            <span className="number" style={{ color: highlightTextColor }}>
              {mark}
            </span>
            <span style={{ color: textColor }}>{getEnding(mark)}</span>
          </div>
          <div className="Loyalty">
            <div className="cashBack">
              <span style={{ color: textColor }}>Кешбэк</span>
              <span className="value" style={{ color: highlightTextColor }}>
                {cashToMark} %
              </span>
            </div>
            <div className="cashBack">
              <span style={{ color: textColor }}>Уровень</span>
              <span className="value" style={{ color: highlightTextColor }}>
                {name}
              </span>
            </div>
          </div>
          <hr />
          <Buttons
            cardBackgroundColor={cardBackgroundColor}
            mainColor={mainColor}
            accentColor={accentColor}
            backgroundColor={backgroundColor}
            openModal={openModal}
          />
        </div>
        <Popup
          nameBtn={nameBtn}
          companyId={companyId}
          active={activePopup}
          closePopup={closePopup}
        />
      </div>
    );
  }
);

export default Card;
