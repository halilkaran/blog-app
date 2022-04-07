
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
  import { BiCommentDetail } from "react-icons/bi";
 


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Details() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

    return (
      <Card
        sx={{
          backgroundColor: "#D2E3DD",
          maxWidth: 345,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <CardMedia
          component="img"
          height="194"
          image="https://cdn.pixabay.com/photo/2021/03/30/08/56/woman-6136425_960_720.jpg"
          alt="Paella dish"
        />
        <CardHeader
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center "
          }}
          title="JS"
          subheader={new Date().getFullYear()}
        />

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <Card>
          <CardHeader
            sx={{
              backgroundColor: "##D2E3DD",
              maxWidth: 345,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "start "
            }}
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe"></Avatar>
            }
            title="Halil"
            subheader="halilkarancontact@gmail.com"
          />
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <BiCommentDetail />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit></Collapse>
        </Card>
      </Card>
    );
}
