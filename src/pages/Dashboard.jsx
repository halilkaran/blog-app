import   React,  {useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
 import { useDispatch, useSelector } from 'react-redux';
import { readBlogData } from '../utils/firebase';
import Cards from '../components/Cards';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Dashboard() {
  const { dashboards } = useSelector((state) => state.dashboards);
  const dispatch = useDispatch();
// console.log(dashboards);


useEffect(() => {
 readBlogData(dispatch); 
}, [ ])

 
console.log(dashboards);
    return (
      <Box
        sx={{
          flexGrow: 1,
          margin: "2rem"
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
              <Grid item key={index}>
                <Cards data={data} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    );
}
