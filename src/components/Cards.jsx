import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { BiCommentDetail } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

 

export default function Cards( {data} ) {
const navigate= useNavigate()

  const [expanded, setExpanded] = React.useState(false);
  const [card] = data;
  console.log(card);
 const { currentUser } = useSelector((state) => state.user);
  const handleDetails = () => {

currentUser ? navigate("/details" ,{state:card}): navigate("/login")



  };

  return (
    <Card
      onClick={handleDetails}
      sx={{
        backgroundColor: "#D2E3DD",
        maxWidth: 345,
        minWidth: 345,
        display: "flex",
        flexDirection: "column"
      }}
    >
      <CardMedia
        component="img"
        height="194"
        image={card.img}
        alt="Paella dish"
      />
      <CardHeader
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center ",
          justifyContent: "center",
          textAlign: "center",
          paddingBottom: "0.8rem"
        }}
        title={card.title}
      />
      <CardHeader
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center ",
          justifyContent: "center",
          textAlign: "center",
          paddingTop: "0rem"
        }}
        subheader={card.date}
      />

      <CardContent>
        <Typography
          sx={{
            height: "2.4rem",
            padding: "0.3rem",
            overflow: "hidden",
            textAlign: "center"
          }}
          variant="body2"
          color="text.secondary"
        >
          {card.text}
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
          title={card.name}
          subheader={card.email}
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
