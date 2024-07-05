import React from "react";
import "./Card.scss";
import { LuTrash2 } from "react-icons/lu";
import { IoEyeOutline } from "react-icons/io5";
import { ButtonsProps } from "../../@types/Card/buttons";

const Buttons: React.FC<ButtonsProps> = ({
  cardBackgroundColor,
  mainColor,
  accentColor,
  backgroundColor,
  openModal,
}) => {
  return (
    <div className="buttons">
      <button
        className="icon"
        style={{
          backgroundColor: cardBackgroundColor,
        }}
        onClick={() => openModal("Показать")}
      >
        <IoEyeOutline style={{ color: mainColor }} />
      </button>
      <button
        className="icon"
        style={{
          backgroundColor: cardBackgroundColor,
        }}
        onClick={() => openModal("Удалить")}
      >
        <LuTrash2 style={{ color: accentColor }} />
      </button>
      <button
        className="detailed"
        style={{ color: mainColor, backgroundColor: backgroundColor }}
        onClick={() => openModal("Подробнее")}
      >
        Подробнее
      </button>
    </div>
  );
};

export default Buttons;
