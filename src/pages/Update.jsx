 
import { Container, Box, Avatar, Typography } from "@mui/material";
import { Formik } from "formik";
import { useLocation } from "react-router-dom";
 
import UpdateForm from "../components/UpdateForm";
const Update = () => {
const { state } = useLocation();


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
        <Avatar
          src="https://cdn.pixabay.com/photo/2014/08/27/08/11/blogging-428955_960_720.jpg"
          sx={{ width: 156, height: 156 }}
        />
        <Typography variant="h4" component="h1" sx={{ m: 4 }}>
          -- UPDATE --
        </Typography>

        <Formik
          initialValues= {state}
          onSubmit={(values, actions) => {
            actions.resetForm();
            actions.setSubmitting(false);
          }}
          component={(props) => <UpdateForm {...props} />}
        ></Formik>
      </Box>
    </Container>
  );
};

export default Update;
