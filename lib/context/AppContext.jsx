import React, { createContext, useContext, useEffect, useState } from "react";
import { getClass } from "../service";

const AppContext = createContext();
const MyContext = () => useContext(AppContext);

const AppContextProvider = (props) => {
  const [activeSection, setActiveSection] = useState(null);
  const [dataClass, setDataClass] = useState([]);
  useEffect(() => {
    getClass().then((res) => {
      setDataClass(res);
    });
  }, []);

  return (
    <AppContext.Provider
      value={{
        setActiveSection,
        activeSection,
        dataClass,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContextProvider, AppContext, MyContext };
