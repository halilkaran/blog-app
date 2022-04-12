import   React,  {useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Details from './Details';
import { CardHeader } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { readBlogData } from '../utils/firebase';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Dashboard() {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

const data=readBlogData() 
 

 

    return (
      <>
        <CardHeader
          sx={{
            margin: "2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
             
          }}
          title="Dashboard"
        />
        <Box
          sx={{
            flexGrow: 1,
            margin: "2rem",
             
          }}
        >
          <Grid container spacing={4} sx={{justifyContent: "center",}}>
           
           
           
           
           
            <Grid item>
              <Details />
            </Grid>
            <Grid item>
              <Details />
            </Grid>
            <Grid item>
              <Details />
            </Grid>
            <Grid item>
              <Details />
            </Grid>
          </Grid>
        </Box>
      </>
    );
}
