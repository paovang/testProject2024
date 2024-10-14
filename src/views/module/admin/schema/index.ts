import * as yup from "yup";

export const validationSchema = yup.object({
  name: yup.string().required("Please enter name."),
  currency: yup
    .string()
    .required("Please enter currency.")
    .max(3, "Currency must be at most 3 characters."),
});
