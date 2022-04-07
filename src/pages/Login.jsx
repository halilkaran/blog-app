import { Container, Box, Avatar, Typography, Link } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { deepPurple } from "@mui/material/colors";
import { Formik } from "formik";
import SignUpForm from "../components/SignUpForm";
import { SignUpValidationSchema } from "../components/SignUpValidataionSchema";

const SignUpPage = () => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Avatar sx={{ bgcolor: deepPurple[500], m: 2 }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h4" component="h1" sx={{ mb: 4 }}>
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

export default SignUpPage;
