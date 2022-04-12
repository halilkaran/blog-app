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
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";



export default function Details() {
  const { state } = useLocation();
   const navigate = useNavigate()

  const [expanded, setExpanded] = React.useState(false);
  const card = state;
  console.log(card);
  const { currentUser } = useSelector((state) => state.user);
    const handleUpdate = () => {
    navigate("/update", { state: card });
}
  return (
    <Box
      sx={{
        marginTop: "20vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <Card
        sx={{
          backgroundColor: "#D2E3DD",
          maxWidth: "50%",
          minWidth: "50%",

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
      <Box
        sx={{
          display: "flex",

          alignItems: "center ",
          justifyContent: "start",
          gap: "15vw",
          padding: "2rem"
        }}
      >
              <Button
                  onClick={handleUpdate}
          startIcon={<UpdateIcon/>}
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            marginBottom: "2rem",
            backgroundColor: "#608560",
            height: "3rem"
          }}
        >
          UPDATE
        </Button>
        <Button
          startIcon={<DeleteIcon />}
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            marginBottom: "2rem",
            backgroundColor: "darkred",
            height: "3rem"
          }}
        >
          DELETE
        </Button>
      </Box>
    </Box>
  );
}
