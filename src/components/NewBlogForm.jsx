import { TextareaAutosize } from "@mui/material";
import { Grid, TextField, Button } from "@mui/material";
  import { Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
 
import { setNewBlogAction } from "../redux/actions/newBlogAction";

const NewBlogForm = (props) => {
     const navigate = useNavigate()
     const { values, handleChange, handleBlur } = props;
     const dispatch = useDispatch();
const { currentUser } = useSelector((state) => state.user);


   
 
  
  
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
   
 const date=new Date();
    const dates = [date.getDate(), date.toLocaleString('default', { month: 'long' }), date.getFullYear()];
    const data = {
      id: Date.now(),
      img: values.image,
      title: values.title,
      date: dates,
      text: values.content,
      email: currentUser.email
    };
    console.log(data);
    dispatch(setNewBlogAction(data));
     }
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
                id="content"
                label="Content*"
                name="content"
                value={values.content}
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
       ()=> navigate("/")
      )}{" "}
    </div>
  );
};
 export default NewBlogForm;