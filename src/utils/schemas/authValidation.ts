import * as Yup from "yup";

const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

export const registerValidation = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .matches(emailRegex, "Invalid email")
    .required("Mail is required"),
  password: Yup.string()
    .min(7, "Password must be at least 7 characters")
    .required("Password is required"),
});

export const loginValidation = Yup.object({
  email: Yup.string()
    .matches(emailRegex, "Invalid email")
    .required("Mail is required"),
  password: Yup.string()
    .min(7, "Password must be at least 7 characters")
    .required("Password is required"),
});
