import React from "react";
import "./Pageleft.css";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import PostAddSharpIcon from "@mui/icons-material/PostAddSharp";
import InfoIcon from "@mui/icons-material/Info";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Pageleft = (props) => {
  const navigate = useNavigate();
  const recData = props.data;
  // console.log(recData[0].users[0]);

  return (
    <div className="mainleft">
      <div className="avatar">
        <Avatar
          alt="Remy Sharp"
          src={recData[0].users[0].profilePic}
          sx={{ width: 100, height: 100 }}
        />
      </div>
      <div className="name">
        <h1>{recData[0].users[0].name}</h1>
      </div>

      <div>
        <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          <nav aria-label="main mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => navigate("/Home", { state: recData })}
                >
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>
              <Divider />

              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => navigate("/Profile", { state: recData })}
                >
                  <ListItemIcon>
                    <PersonOutlineIcon />
                  </ListItemIcon>
                  <ListItemText primary="Profile" />
                </ListItemButton>
              </ListItem>
              <Divider />

              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => toast.info("See below you 😒 !")}
                >
                  {/* onClick={handleFrnds} */}
                  <ListItemIcon>
                    <SearchIcon />
                  </ListItemIcon>
                  <ListItemText primary="Find Friends" />
                </ListItemButton>
                <ToastContainer />
              </ListItem>
              <Divider />

              <ListItem disablePadding>
                <ListItemButton
                  onClick={() =>
                    toast.info("To Post Something go to Home Page...!")
                  }
                >
                  <ListItemIcon>
                    <PostAddSharpIcon />
                  </ListItemIcon>
                  <ListItemText primary="Post" />
                </ListItemButton>
              </ListItem>
              <Divider />

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <InfoIcon />
                  </ListItemIcon>
                  <ListItemText primary="About" />
                </ListItemButton>
              </ListItem>
              <Divider />

              <ListItem disablePadding>
                <ListItemButton onClick={() => navigate("/")}>
                  <ListItemIcon>
                    <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText primary="Logout" />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Box>
      </div>
    </div>
  );
};

export default Pageleft;
