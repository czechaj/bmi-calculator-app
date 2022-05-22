import { createContext, useContext, useState } from "react";

const CalculateContext = createContext();

const CalculateProvider = ({ children }) => {
  const [calculating, setCalculating] = useState(false);
  const [userData, setUserData] = useState({});
  const [calculated, setCalculated] = useState("");
  const [bmiCategory, setBmiCategory] = useState("");

  const calculate = (userData) => {
    setCalculated(
      (userData.weight / Math.pow(userData.height / 100, 2)).toFixed(2)
    );
  };
  const values = {
    calculating,
    setCalculating,
    userData,
    setUserData,
    calculate,
    calculated,
    bmiCategory,
    setBmiCategory,
  };

  return (
    <CalculateContext.Provider value={values}>
      {children}
    </CalculateContext.Provider>
  );
};

const useCalculator = () => useContext(CalculateContext);

export { CalculateProvider, useCalculator };
