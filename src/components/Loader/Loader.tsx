import loader from "../../img/loader.svg";
import styles from "./Loader.module.scss";
const Loader: React.FC = () => {
  return (
    <div className={styles.loader}>
      <img src={loader} alt="loading" />
      <span>Подгрузка компаний</span>
    </div>
  );
};

export default Loader;
