import React from "react";
import { useNavigate } from "react-router-dom";
import { useCalculator } from "../contexts/CalculateContext";
import { Button } from "./Button";

function Footer() {
  const navigate = useNavigate();
  const { setCalculating } = useCalculator();
  return (
    <footer>
      <Button
        onClick={() => {
          setCalculating(false);
          navigate("/");
        }}
      >
        What is BMI
      </Button>
    </footer>
  );
}

export default Footer;
