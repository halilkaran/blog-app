import { Grid, TextField, Button,  } from "@mui/material";
 
import { Form } from "formik";
 import { useNavigate } from "react-router-dom";
import { createUser } from "../utils/firebase";

const RegisterForm = (props) => {
 const { values, handleChange, handleBlur, errors, touched } = props;
 
const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values.email, values.password);
    createUser(values.email, values.password )
    navigate("/login")
}
  return (
    <Form onSubmit={handleSubmit}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <TextField
            id="email"
            label="email"
            name="email"
            variant="outlined"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.email && errors.email}
            error={touched.email && Boolean(errors.email)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="password"
            label="password"
            name="password"
            variant="outlined"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.password && errors.password}
            error={touched.password && Boolean(errors.password)}
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            fullWidth
           sx={{ bgcolor: "#608560", height: "3rem"}}
         
          >
            REGISTER
          </Button>
        </Grid>
         
       
      </Grid>
    </Form>
  );
};

export default RegisterForm;
