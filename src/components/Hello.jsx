import { motion } from "framer-motion";
import React from "react";
import { useCalculator } from "../contexts/CalculateContext";
import { Button } from "./Button";
import Insert from "./Insert";

function Hello() {
  const { calculating, setCalculating } = useCalculator();
  return (
    <section>
      <aside>
        <img
          src="https://images.unsplash.com/photo-1627820751275-e44b937c5d33?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHdlaWdodCUyMGxvc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500"
          alt=""
        />
      </aside>
      <article>
        {!calculating ? (
          <motion.div
            className="info"
            animate={{ x: -10 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <h3>What is BMI?</h3>
            <p className="article-text">
              The body mass index (BMI) is a measure that uses your height and
              weight to work out if your weight is healthy. The BMI calculation
              divides an adult's weight in kilograms by their height in metres
              squared. For example, A BMI of 25 means 25kg/m2.
            </p>
            <Button onClick={() => setCalculating(true)}>
              {" "}
              Calculate your BMI
            </Button>
          </motion.div>
        ) : (
          <div>
            <Insert />
          </div>
        )}
      </article>
    </section>
  );
}

export default Hello;
