import { Grid, TextField, Button } from "@mui/material";
import { Form } from "formik";
import go from "../assets/goog.png";
import { signIn, signUpWithGoogle } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { successNote } from "../utils/customTostify";

const SignUpForm = (props) => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const { values, handleChange, handleBlur, errors, touched } = props;
  const dispatch = useDispatch();

  const successNavigate = () => {
    successNote("You are successfully Login");
    navigate("/");
  };
  useEffect(() => {
    currentUser && successNavigate();
  }, [currentUser, navigate]);


  const handleLogin = async () => {
    signIn(dispatch, values.email, values.password);
  };

  const handleGoogleSingIn = () => {
    signUpWithGoogle(dispatch);
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
            <img src={go} alt="ally" width="150" height="40" />
          </Button>
        </Grid>
      </Grid>
    </Form>
  );
};

export default SignUpForm;
