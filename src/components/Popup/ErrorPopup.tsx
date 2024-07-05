import styles from "./Popup.module.scss";
import closeBtn from "../../img/closeBtn.svg";
import { useAppSelector } from "../../redux/redux-hooks";
import React from "react";
import { ErrorPopupProps } from "../../@types/errorPopup";

const ErrorPopup: React.FC<ErrorPopupProps> = ({
  activeErrorPopup,
  setActiveErrorPopup,
}) => {
  const errorMessage = useAppSelector((state) => state.cards.errorMessage);
  console.log("popuuuuuuuup");
  return (
    <div className={`${styles.modal} ${activeErrorPopup ? styles.active : ""}`}>
      <div
        className={`${styles.modalContent} ${
          activeErrorPopup ? styles.active : ""
        }`}
      >
        <div className={styles.info}>
          <p>{errorMessage}</p>
          <button onClick={() => setActiveErrorPopup(false)}>Хорошо</button>
        </div>
      </div>
      <button
        className={styles.closeBtn}
        onClick={() => setActiveErrorPopup(false)}
      >
        <img src={closeBtn} alt="закрыть" />
      </button>
    </div>
  );
};

export default ErrorPopup;
