import React from "react";
import reloader from "../../img/reloader.svg";
import styles from "./Reloader.module.scss";
const Reloader: React.FC = () => {
  return (
    <div className={styles.reloader}>
      <div className={styles.container}>
        <img src={reloader} alt="reloading" />
      </div>
    </div>
  );
};

export default Reloader;
