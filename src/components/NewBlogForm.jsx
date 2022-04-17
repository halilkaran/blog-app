import { TextareaAutosize } from "@mui/material";
import { Grid, TextField, Button } from "@mui/material";
import { Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setNewBlogAction } from "../redux/actions/newBlogAction";
import { successNote } from "../utils/customTostify";
import { writeBlogData } from "../utils/firebase";

const NewBlogForm = (props) => {
  const navigate = useNavigate();
  const { values, handleChange, handleBlur } = props;
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Date.now();
    const date = new Date();
    console.log(values.image === "" ? "q" : "dolu");
    const dates = [
      date.getDate(),
      " ",
      date.toLocaleString("default", { month: "long" }),
      " ",
      date.getFullYear()
    ];
    const data = {
      id: id,
      image:
        values.image === ""
          ? "https://cdn.pixabay.com/photo/2014/08/27/08/11/blogging-428955_960_720.jpg"
          : values.image,
      title: values.title,
      date: dates,
      text: values.text,
      email: currentUser.email,
      name: currentUser.displayName
        ? currentUser.displayName
        : currentUser.email.split("@")[0]
    };

    dispatch(setNewBlogAction(data));
    writeBlogData(id, data);
    navigate("/");
    successNote("NEWBLOG Created");
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
                color="warning"
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
                color="warning"
                sx={{
                  color: "white"
                }}
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
                  height: 200,
                  backgroundColor: "transparent",
                  color: "white"
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
export default NewBlogForm;
