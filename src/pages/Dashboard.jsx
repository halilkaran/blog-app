import   React,  {useEffect} from 'react';
 import Box from '@mui/material/Box';
 import Grid from '@mui/material/Grid';
 import { useDispatch, useSelector } from 'react-redux';
import { readBlogData } from '../utils/firebase';
import Cards from '../components/Cards';
 

export default function Dashboard() {
  const { dashboards } = useSelector((state) => state.dashboards);
  const dispatch = useDispatch();
   const { currentUser } = useSelector((states) => states.user);
   console.log(currentUser);


useEffect(() => {
  readBlogData(dispatch); 
  
}, [ ])

 
console.log(dashboards);
    return (
      <Box
        sx={{
          flexGrow: 1,
<<<<<<< HEAD
          margin: "6rem",   
=======
          margin: "2rem",   
>>>>>>> 89367f43f58945361e0c3d92a3a489d8e8a4167e
        }}
      >
        <Grid
          
          container
          spacing={4}
          sx={{ justifyContent: "center" }}
        >
          {[...dashboards].map((data, index) => {
            console.log()
            return (
              <Grid  item key={index}>
                <Cards data={data} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    );
}
