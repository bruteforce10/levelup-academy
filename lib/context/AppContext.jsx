import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();
const MyContext = () => useContext(AppContext);

const AppContextProvider = (props) => {
  const [activeSection, setActiveSection] = useState(null);
  return (
    <AppContext.Provider
      value={{
        setActiveSection,
        activeSection,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContextProvider, AppContext, MyContext };
