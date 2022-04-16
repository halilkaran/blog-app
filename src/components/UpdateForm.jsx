import { TextareaAutosize } from "@mui/material";
import { Grid, TextField, Button } from "@mui/material";
import { Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

 import { setUpdateBlogAction } from "../redux/actions/setBlogAction";
import { successNote } from "../utils/customTostify";
import {    updateBlogData,   } from "../utils/firebase";

const UpdateForm = (props) => {
  console.log(props.values);
  const navigate = useNavigate();
  const { values, handleChange, handleBlur } = props;
  console.log(values.id);
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
 
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      id: values.id,
      image: values.image === ""
          ? "https://cdn.pixabay.com/photo/2014/08/27/08/11/blogging-428955_960_720.jpg"
          : values.image,
      title: values.title,
      date: values.date,
      text: values.text,
      email: values.email,
      name: values.name
    };

    dispatch(setUpdateBlogAction(data));

     updateBlogData(data);
    navigate("/");
    successNote("Updated")
  };

 
  return (
    <div>
      {currentUser ? (
        <Form onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextField
                id="title"
                label="Title*"
                name="title"
                variant="outlined"
                type="text"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="image"
                label="Image Url*"
                name="image"
                variant="outlined"
                type="text"
                value={values.image}
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextareaAutosize
                id="text"
                label="Content*"
                name="text"
                value={values.text}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-label="minimum height"
                placeholder="Content*"
                style={{
                  fontSize: "1.1rem",
                  padding: "1rem",
                  width: 550,
                  height: 200
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
               type="submit"
                variant="contained"
                fullWidth
                sx={{
                  marginBottom: "2rem",
                  backgroundColor: "#608560",
                  height: "3rem"
                }}
              >
                SUBMIT
              </Button>
            </Grid>
          </Grid>
        </Form>
      ) : (
        () => navigate("/")
      )}{" "}
    </div>
  );
};
export default UpdateForm;
