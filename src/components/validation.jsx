import * as yup from "yup";
const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required(
      "please enter your name so we can do your personalized calculation."
    ),
  height: yup.number().required().positive(),
  weight: yup.number().required().positive(),
});

export default validationSchema;
