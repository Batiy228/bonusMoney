import { useEffect, useState } from "react";
import Splash from "./components/Splash/Splash";
import Card from "./components/Card/Card";
import CardManagement from "./components/CardManagement/CardManagement";
import styles from "./App.module.scss";
import Loader from "./components/Loader/Loader";
import Reloader from "./components/Reloader/Reloader";
import { useAppDispatch, useAppSelector } from "./redux/redux-hooks";
import { increaseOffset } from "./redux/cards/slice";
import { fetchCards } from "./redux/cards/asyncActions";
import { Status } from "./@types/Status";
import ErrorPopup from "./components/Popup/ErrorPopup";

const url = "http://devapp.bonusmoney.pro/mobileapp/getAllCompanies";
const limit = 5;

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLogoVisible, setIsLogoVisible] = useState<boolean>(true);
  const [isReloading, setIsReloading] = useState<boolean>(false);
  const [activeErrorPopup, setActiveErrorPopup] = useState<boolean>(true);

  const dispatch = useAppDispatch();

  const { cards, status } = useAppSelector((state) => state.cards);

  const getCards = (): void => {
    setIsLoading(true);
    dispatch(fetchCards(url));
    dispatch(increaseOffset(limit));
    setIsLoading(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLogoVisible(false);
      getCards();
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight &&
        !isLoading
      ) {
        getCards();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      setIsReloading(true);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  return (
    <>
      {isLogoVisible ? (
        <Splash />
      ) : (
        <>
          <CardManagement />
          {isReloading && <Reloader />}
          <div>
            {cards.map((company: any) => {
              return (
                <Card
                  key={company.company.companyId}
                  mobileAppDashboard={company.mobileAppDashboard}
                  customerMarkParameters={company.customerMarkParameters}
                  companyId={company.company.companyId}
                />
              );
            })}
            {status === Status.LOADING && <Loader />}
            {status === Status.ERROR && (
              <>
                <div className={styles.noCompanies}>Нет компаний</div>
                <ErrorPopup
                  activeErrorPopup={activeErrorPopup}
                  setActiveErrorPopup={setActiveErrorPopup}
                />
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default App;
