import styles from "./Popup.module.scss";
import closeBtn from "../../img/closeBtn.svg";
import React from "react";
import { PopupProps } from "../../@types/popup";

const Popup: React.FC<PopupProps> = React.memo(
  ({ nameBtn, companyId, active, closePopup }) => {
    return (
      <div className={`${styles.modal} ${active ? styles.active : ""}`}>
        <div
          className={`${styles.modalContent} ${active ? styles.active : ""}`}
        >
          <div className={styles.info}>
            <p>Нажата кнопка {nameBtn}</p>
            <p>Id компнии: {companyId}</p>

            <button onClick={closePopup}>Хорошо</button>
          </div>
        </div>
        <button className={styles.closeBtn} onClick={closePopup}>
          <img src={closeBtn} alt="закрыть" />
        </button>
      </div>
    );
  }
);

export default Popup;
