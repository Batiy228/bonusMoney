import logoPng from "../../img/logo.png";
import "./Splash.scss";

const Splash: React.FC = () => {
  return (
    <div className="splash">
      <img src={logoPng} alt="logo" />
    </div>
  );
};

export default Splash;
