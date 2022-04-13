import * as yup from "yup";

export const SignUpValidationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("First name is required")
    .min(2, "Too Short")
    .max(15, "Must be 15 char or less"),
  lastName: yup
    .string()
    .required("last name is required")
    .min(2, "Too Short")
    .max(30, "Must be 15 char or less"),
  email: yup.string().email("ınvalid Email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Must be more than 8 chars")
    .matches(/\d+/, "Password must have a number")
    .matches(/[a-z]+/, "Password must have a lowercase")
    .matches(/[A-Z]+/, "Password must have a uppercase")
    .matches(/[!?.*@$#%&^()-+]+/, "Password must have a special character"),
  title: yup
    .string(),
  
  image: yup
  .string(),
  content: yup
   .string(),
  
  passwordConfirm: yup
    .string()
    .required("Password is required")
    .oneOf([yup.ref("password")], "Passwords does not match"),
  createdOn: yup.date().default(function () {
    return new Date();
  })
});

           
           