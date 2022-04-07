import { Grid, TextField, Button, Link } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { Form } from "formik";
import { useNavigate } from "react-router-dom";
import { signIn, signUpWithGoogle } from "../utils/firebase";
const SignUpForm = (props) => {
  const navigate = useNavigate();
  const { values, handleChange, handleBlur, errors, touched } = props;
  const handleGoogleSingIn = () => {
    //   signUpWithGoogle();
      navigate("/")
    };
    const handleLogin = () => {
    //   signIn(values.email, values.password);
     navigate("/") 
    };
  return (
    <Form>
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
            sx={{ bgcolor: deepPurple[500] }}
            onClick={handleLogin}
          >
            Signup
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" onClick={handleGoogleSingIn}>
            Continue with Google
          </Button>
        </Grid>
      </Grid>
    </Form>
  );
};

export default SignUpForm;
