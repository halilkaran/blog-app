import { Container, Box, Avatar, Typography, } from "@mui/material";
 
import { Formik } from "formik";
 
import { SignUpValidationSchema } from "../components/SignUpValidataionSchema";
import RegisterForm from "../components/RegisterForm";

const Login = () => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          height: "100vh",
          marginTop: "20vh",
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
          -- Register --
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
          component={(props) => <RegisterForm {...props} />}
        ></Formik>
      </Box>
    </Container>
  );
};

export default Login;
