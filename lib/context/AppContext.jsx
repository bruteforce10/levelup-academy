import React, { createContext, useContext, useEffect, useState } from "react";
import { getClass } from "../service";

const AppContext = createContext();
const MyContext = () => useContext(AppContext);

const AppContextProvider = (props) => {
  const [activeSection, setActiveSection] = useState(null);
  const [dataClass, setDataClass] = useState([]);
  const [dataFilter, setDataFilter] = React.useState(dataClass);
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
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContextProvider, AppContext, MyContext };
