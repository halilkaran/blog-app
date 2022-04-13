import * as React from "react";

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
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";
import { deleteCard } from "../utils/firebase";
import { useSelector } from "react-redux";

export default function Details() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  

  const [expanded] = React.useState(false);
  const card = state;
  console.log(card);
console.log(Boolean(currentUser.email === card.email));
  const handleUpdate = () => {
    navigate("/update", { state: card });
  };

  const handleDelete = (id) => {
    console.log(id);
    deleteCard(id);
    navigate("/");
  };
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
          minHeight: "50vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "space-evenly"
        }}
      >
        <CardMedia
          component="img"
          height="300"
          image={card.image}
          alt="Paella dish"
        />
        <CardHeader
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center ",
            justifyContent: "center",
            textAlign: "center",
            paddingBottom: "0.6rem"
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
              fontSize: "1.4rem",
              height: "3.4rem",
              padding: "0.3rem",
              overflow: "hidden",
              textAlign: "center",
              marginTop: "0"
            }}
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

      {Boolean(currentUser.email === card.email) ? (
        <Box
          sx={{
            display: "flex",

            alignItems: "center ",
            justifyContent: "start",
            gap: "10vw",
            padding: "2rem"
          }}
        >
          <Button
            onClick={handleUpdate}
            startIcon={<UpdateIcon />}
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              marginBottom: "2rem",
              backgroundColor: "#608560",
              height: "4rem",
              widht: "6rem"
            }}
          >
            UPDATE
          </Button>
          <Button
            onClick={() => handleDelete(card.id)}
            startIcon={<DeleteIcon />}
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              marginBottom: "2rem",
              backgroundColor: "darkred",
              height: "4rem"
            }}
          >
            DELETE
          </Button>
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
}
