import * as React from "react";
import Box from "@mui/material/Box";
 
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import { Link } from "@mui/material";
import { FaUserAlt } from "react-icons/fa";
import { BsFileEarmarkPlus } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { logOut } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { successNote } from "../utils/customTostify";


const Navbar = () => {
const navigate= useNavigate()
const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
 const display=currentUser?.email?.split("@")[0];
 
 

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box
        sx={{
         
          height: "5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "center",
          backgroundColor: "#196774"
        }}
      >
        <Typography
          onClick={() => navigate("/")}
          sx={{
            cursor: "pointer",
            color: "#D2E3DD",
            fontFamily: "'Metamorphous', cursive",
            padding: "2rem",
          }}
        >
          HALOKAR
        </Typography>
        <Typography sx={{ minWidth: 100 }}>
          <Link
            onClick={() => navigate("/")}
            sx={{
              fontSize: "2rem",
              textDecoration: "none",
              cursor: "pointer",
              color: "#FCD47D",
              fontFamily: "'Metamorphous', cursive"
            }}
          >
            WEB DEVELOPERS BLOG
          </Link>
        </Typography>

        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="large"
            sx={{ marginRight: "3rem" }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Typography
              sx={{
                marginRight: "2rem",
                color: "#D2E3DD",
                fontFamily: "'Metamorphous', cursive"
              }}
            >
              {currentUser ? currentUser.displayName?.toUpperCase() || display  : ""  }
            </Typography>
            <FaUserAlt />
          </IconButton>
        </Tooltip>
      </Box>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            backgroundColor: "#196774",
            color: "#FCD47D",
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0
            }
          }
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {currentUser ? (
          <div>
            <MenuItem onClick={() => navigate("/profile")}>
              <ListItemIcon>
                <FaUserAlt />
              </ListItemIcon>
              Profile
            </MenuItem>
            <MenuItem onClick={() => navigate("/newblog")}>
              <ListItemIcon>
                <BsFileEarmarkPlus />
              </ListItemIcon>
              New Blog
            </MenuItem>
            <MenuItem
              onClick={() => {
                logOut(dispatch);
                navigate("/");
                successNote("LOGOUT")
              }}
            >
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              Logout
            </MenuItem>{" "}
          </div>
        ) : (
          <div>
            {" "}
            <MenuItem onClick={() => navigate("/login")}>
              <ListItemIcon>
                <FaUserAlt />
              </ListItemIcon>
              Log in
            </MenuItem>
            <MenuItem onClick={() => navigate("/register")}>
              <ListItemIcon>
                <FaUserAlt />
              </ListItemIcon>
              Register
            </MenuItem>
          </div>
        )}

        <Divider />
      </Menu>
    </React.Fragment>
  );
};

export default Navbar;
