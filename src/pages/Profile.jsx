import  React   from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
 import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Avatar } from "@mui/material";
import { Box } from "@mui/system";
import {   useSelector } from "react-redux";
 
 
export default function Profile() {
  
  const { currentUser } = useSelector((state) => state.user);
  
  const {displayName,  email} = currentUser; 
  return (
    <Box
      sx={{
        height: "100vh",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Card
       
        sx={{
          backgroundColor: "#BBA9A7",
          minWidth: "40vw",
          borderRadius: "7rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <CardActionArea sx={{ display: "flex", flexDirection: "column" }}>
          <Avatar
            sx={{
              bgcolor: "rgb(31, 108, 250)",
              height: 130,
              width: 130,
              fontSize: "4rem",
              textAlign: "center",
              marginTop: "2rem"
            }}
          >
            {currentUser?.displayName[0] || currentUser?.email.split("@")[0][0]}
          </Avatar>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Typography gutterBottom variant="h6" component="div">
              Display Name
            </Typography>
            <Typography variant="h4" component="div">
              {displayName || currentUser?.email.split("@")[0]}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Email
            </Typography>
            <Typography variant="h5" component="div">
              {email}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
