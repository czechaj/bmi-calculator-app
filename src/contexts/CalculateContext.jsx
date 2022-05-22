import { createContext, useContext, useState } from "react";

const CalculateContext = createContext();

const CalculateProvider = ({ children }) => {
  const [calculating, setCalculating] = useState(false);
  const [userData, setUserData] = useState({});

  const values = {
    calculating,
    setCalculating,
    userData,
    setUserData,
  };

  return (
    <CalculateContext.Provider value={values}>
      {children}
    </CalculateContext.Provider>
  );
};

const useCalculator = () => useContext(CalculateContext);

export { CalculateProvider, useCalculator };
