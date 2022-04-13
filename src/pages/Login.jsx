import { Container, Box, Avatar, Typography, Link } from "@mui/material";
 import { Formik } from "formik";
import SignUpForm from "../components/SignUpForm";
import { SignUpValidationSchema } from "../components/SignUpValidataionSchema";

const Login = () => {



  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: "6rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Avatar
          alt="Cindy Baker"
          src="https://cdn.pixabay.com/photo/2014/08/27/08/11/blogging-428955_960_720.jpg"
          sx={{ width: 156, height: 156 }}
        />
        <Typography variant="h4" component="h1" sx={{ m: 4 }}>
          -- Login --
        </Typography>

        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            passwordConfirm: ""
          }}
          validationSchema={SignUpValidationSchema}
          onSubmit={(values, actions) => {
            alert(`firstName: ${values.firstName}
            lastName: ${values.lastName}
             email: ${values.email}
             password: ${values.password}
            `);
            actions.resetForm();
            actions.setSubmitting(false);
          }}
          component={(props) => <SignUpForm {...props} />}
        ></Formik>
      </Box>
    </Container>
  );
};

export default Login;
