import { Button } from "./Button";
import { useFormik } from "formik";
import { useCalculator } from "../contexts/CalculateContext";
import validationSchema from "./validation";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

function Insert() {
  const navigate = useNavigate();
  const { setUserData } = useCalculator();
  const formik = useFormik({
    initialValues: {
      name: "",
      height: "",
      weight: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setUserData(values);
      navigate("result");
    },
  });

  return (
    <motion.form
      animate={{ x: 30 }}
      transition={{ ease: "easeOut", duration: 1 }}
      onSubmit={formik.handleSubmit}
    >
      <label htmlFor="name">Name</label>
      <input
        onBlur={formik.handleBlur}
        value={formik.values.name}
        onChange={formik.handleChange}
        name="name"
        id="name"
        type="text"
      />
      {formik.errors.name && formik.touched.name && (
        <span className="validation-message">{formik.errors.name} </span>
      )}
      <label htmlFor="height">Height</label>
      <input
        onBlur={formik.handleBlur}
        type={"number"}
        name="height"
        value={formik.values.height}
        onChange={formik.handleChange}
        id="height"
      />
      {formik.errors.height && formik.touched.height && (
        <span className="validation-message">{formik.errors.height} </span>
      )}
      <label htmlFor="weight">Weight</label>
      <input
        onBlur={formik.handleBlur}
        type={"number"}
        value={formik.values.weight}
        onChange={formik.handleChange}
        name="weight"
        id="weight"
      />
      {formik.errors.weight && formik.touched.weight && (
        <span className="validation-message">{formik.errors.weight} </span>
      )}
      <Button type="submit">Calculate</Button>
    </motion.form>
  );
}

export default Insert;
