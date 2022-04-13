import { TextareaAutosize } from "@mui/material";
import { Grid, TextField, Button } from "@mui/material";
import { Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

<<<<<<< HEAD
 import { setUpdateBlogAction } from "../redux/actions/setBlogAction";
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
      image: values.image,
      title: values.title,
      date: values.date,
=======
import { setNewBlogAction } from "../redux/actions/newBlogAction";
import { setUpdateBlogAction } from "../redux/actions/setBlogAction";
import { updateBlogData, writeBlogData } from "../utils/firebase";

const UpdateForm = (props) => {
    console.log(props.values);
  const navigate = useNavigate();
    const { values, handleChange, handleBlur } = props;
    console.log(values.id);
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { blogs } = useSelector((state) => state.blog);

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const data = {
      id:values.id,
        img: values.img,
      title: values.title,
      date: values.dates,
>>>>>>> 89367f43f58945361e0c3d92a3a489d8e8a4167e
      text: values.text,
      email: values.email,
      name: values.name
    };
<<<<<<< HEAD

    dispatch(setUpdateBlogAction(data));

     updateBlogData(data);
    navigate("/");
  };

 
=======
   
      dispatch(setUpdateBlogAction(data));
       
      console.log(blogs);
    updateBlogData(...blogs);
  };
>>>>>>> 89367f43f58945361e0c3d92a3a489d8e8a4167e
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
<<<<<<< HEAD
                value={values.image}
=======
                value={values.img}
>>>>>>> 89367f43f58945361e0c3d92a3a489d8e8a4167e
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextareaAutosize
<<<<<<< HEAD
                id="text"
                label="Content*"
                name="text"
=======
                id="content"
                label="Content*"
                name="content"
>>>>>>> 89367f43f58945361e0c3d92a3a489d8e8a4167e
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
<<<<<<< HEAD
               type="submit"
=======
                type="submit"
>>>>>>> 89367f43f58945361e0c3d92a3a489d8e8a4167e
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
