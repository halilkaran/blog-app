 import { Container, Box, Avatar, Typography } from "@mui/material";
import { Formik } from "formik";
import NewBlogForm from "../components/NewBlogForm";
import { SignUpValidationSchema } from "../components/SignUpValidataionSchema";
const NewBlog = () => {
  

  return (
    <Container maxWidth="sm">
      <Box
        sx={{height:"100vh",
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
          -- NEW BLOG --
        </Typography>

        <Formik
          initialValues={{
            title: "",
            image: "",
            content: ""
          }}
          validationSchema={SignUpValidationSchema}
          onSubmit={(values, actions) => {
            actions.resetForm();
            actions.setSubmitting(false);
          }}
          component={(props) => <NewBlogForm {...props} />}
        ></Formik>
      </Box>
    </Container>
  );
};

export default NewBlog;
