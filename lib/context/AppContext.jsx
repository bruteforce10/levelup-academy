import React, { createContext, useContext, useEffect, useState } from "react";
import { getClass } from "../service";

const AppContext = createContext();
const MyContext = () => useContext(AppContext);

const AppContextProvider = (props) => {
  const [activeSection, setActiveSection] = useState(null);
  const [dataClass, setDataClass] = useState([]);
  const [dataFilter, setDataFilter] = React.useState(dataClass);
  const [priceCheckout, setPriceCheckout] = useState({
    discount: 0,
    quantity: 0,
    promo: "",
  });

  useEffect(() => {
    getClass().then((res) => {
      if (res) {
        setDataClass(res);
      }
    });
  }, []);

  return (
    <AppContext.Provider
      value={{
        setActiveSection,
        activeSection,
        dataClass,
        setDataClass,
        dataFilter,
        setDataFilter,
        priceCheckout,
        setPriceCheckout,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContextProvider, AppContext, MyContext };
