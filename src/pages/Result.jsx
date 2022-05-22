import { useEffect } from "react";
import { motion } from "framer-motion";
import { useCalculator } from "../contexts/CalculateContext";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
function Result() {
  const navigate = useNavigate();
  const { userData, calculate, calculated, bmiCategory, setBmiCategory } =
    useCalculator();

  useEffect(() => {
    const defineCategory = () => {
      calculated <= 18.4
        ? setBmiCategory("Underweight")
        : calculated <= 24.9
        ? setBmiCategory("Normal")
        : calculated <= 29.9
        ? setBmiCategory("Overweight")
        : setBmiCategory("Obese");
    };
    defineCategory();
    calculate(userData);
  }, [calculate, calculated, userData, setBmiCategory]);

  return (
    <section>
      <aside>
        <h3>Welcome {userData.name}</h3>
        <p>Your BMI is {calculated}</p>
        <p>Your BMI category is {bmiCategory}</p>
        <Button
          onClick={() => {
            navigate("/");
          }}
        >
          Recalculate
        </Button>
      </aside>
      <motion.article
        animate={{ y: 20 }}
        transition={{ type: "spring", duration: 1.5 }}
        className="diet"
      >
        <h1>Diet List</h1>
        {bmiCategory === "Obese" && (
          <ul>
            <li>plenty of fruit and vegetables.</li>
            <li>
              plenty of potatoes, bread, rice, pasta and other starchy foods
              (ideally you should choose wholegrain varieties)
            </li>
            <li>some milk and dairy foods.</li>
            <li>
              some meat, fish, eggs, beans and other non-dairy sources of
              protein.
            </li>
            <li>
              just small amounts of food and drinks that are high in fat and
              sugar.
            </li>
          </ul>
        )}
        {bmiCategory === "Overweight" && (
          <ul>
            <li>plenty of fruit and vegetables.</li>
            <li>
              plenty of potatoes, bread, rice, pasta and other starchy foods
              (ideally you should choose wholegrain varieties)
            </li>
            <li>some milk and dairy foods.</li>
            <li>
              some meat, fish, eggs, beans and other non-dairy sources of
              protein.
            </li>
            <li>
              just small amounts of food and drinks that are high in fat and
              sugar.
            </li>
          </ul>
        )}

        {bmiCategory === "Normal" && (
          <ul>
            <li>
              Breakfast (8:00-8:30AM) 3 egg whites + 1 toasted brown bread + 1/2
              cup low fat milk (no sugar){" "}
            </li>
            <li>Mid-Meal (11:00-11:30AM) 1 cup coconut water</li>
            <li>
              Lunch (2:00-2:30PM) 1 cup moong dal/ chicken curry + 1 chapatti +
              salad
            </li>
          </ul>
        )}

        {bmiCategory === "Underweight" && (
          <ul>
            <li>
              Eating at least 5 portions of a variety of fruit and vegetables
              every day.
            </li>
            <li>
              Basing meals on potatoes, bread, rice, pasta or other starchy
              carbohydrates. Choose wholegrain where possible.
            </li>
            <li>
              Having some dairy or dairy alternatives (such as soya drinks and
              yoghurts). Have whole (full-fat) milk until you build your weight
              back up.
            </li>
            <li>
              Eating some beans, pulses, fish, eggs, meat and other protein. Aim
              for 2 portions of fish every week – 1 of which should be oily,
              such as salmon or mackerel.{" "}
            </li>
            <li>
              Choosing unsaturated oils and spreads, such as sunflower or
              rapeseed, and eating them in small amounts.
            </li>
            <li>
              Drinking plenty of fluids. The government recommends 6 to 8
              glasses a day. But try not to have drinks just before meals to
              avoid feeling too full to eat.
            </li>
          </ul>
        )}
      </motion.article>
    </section>
  );
}

export default Result;
