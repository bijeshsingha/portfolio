import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isMenu, setIsMenu] = useState(false);
  const watchWidth = () => {
    setWidth(window.innerWidth);
    if(window.innerWidth > 1064){
      setIsMenu(false)
    }
  };
  React.useEffect(() => {
    window.addEventListener("resize", watchWidth);

    return () => {
      window.removeEventListener("resize", watchWidth);
    };
  }, []);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider value={{ width, setWidth, isMenu, setIsMenu }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
