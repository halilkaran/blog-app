import { Grid, TextField, Button   } from "@mui/material";
import { Form } from "formik";
import go from "../assets/goog.png";
import { signIn, signUpWithGoogle } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch    } from "react-redux";
 

const SignUpForm = (props) => {
   const navigate = useNavigate();

  const { values, handleChange, handleBlur, errors, touched } = props;
  const dispatch = useDispatch();

  const handleLogin = async () => {
    signIn(dispatch, values.email, values.password);

    navigate("/");
 
  };

  const handleGoogleSingIn =  () => {
   signUpWithGoogle(dispatch);

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
            onClick={handleLogin}
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              height: "3rem"
            }}
          >
            Signup
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            onClick={handleGoogleSingIn}
            fullWidth
            sx={{
              backgroundColor: "white",
              color: "blue",
              fontWeight: "bold",
              height: "3rem"
            }}
          >
            CONTINUE WITH
            <img src={go} width="150" height="40" />
          </Button>
        </Grid>
      </Grid>
    </Form>
  );
};

export default SignUpForm;
