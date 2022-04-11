import  React , {useEffect} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Avatar } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
 
 
export default function Profile() {
  
  const { currentUser } = useSelector((state) => state.user);
  
  const {displayName,  email} = currentUser; ;
  return (
    <Box
      sx={{
        display: "flex",
        padding: "5rem",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Card sx={{ maxWidth: 375 }}>
        <CardActionArea
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem"
          }}
        >
          <Avatar
            sx={{
              bgcolor: "rgb(31, 108, 250)",
              height: 130,
              width: 130,
              fontSize: "4rem"
            }}
          >
            {currentUser ? displayName[0] : ""}
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
              {displayName}
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
