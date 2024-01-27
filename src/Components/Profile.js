import React, { useEffect, useState } from "react";
import "./Profile.css";
import coverimg from "../Images/coverimg.avif";
import { Avatar } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

import PageRight from "./PageRight";
import Pageleft from "./Pageleft";
import { useLocation } from "react-router-dom";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Profile = () => {
  const location = useLocation();
  const profileDetails = location.state;
  const posts = profileDetails[0].posts;
  // console.log(profileDetails[0].posts);

  return (
    <>
      <Pageleft data={profileDetails} />
      <div className="container">
        <div className="coverpage">
          <img src={coverimg} width={"100%"} height={"60%"} />
          <div className="avatardiv">
            <Avatar
              alt={profileDetails[0].users[0].name}
              src={profileDetails[0].users[0].profilePic}
              sx={{ width: 200, height: 200 }}
            />
          </div>
        </div>
        <div className="details">
          <h1>{profileDetails[0].users[0].name}</h1>
          <p>Lives in {profileDetails[0].users[0].location}</p>
          <p>{profileDetails[0].users[0].bio}</p>
        </div>
        {posts.map((item) => (
          <div key={item._id}>
            <div className="posts">
              <div className="post">
                <Avatar
                  alt="Remy Sharp"
                  src={profileDetails[0].users[0].profilePic}
                  sx={{ width: 40, height: 40 }}
                />
                <div className="username">
                  <h4>{profileDetails[0].users[0].name}</h4>
                </div>
              </div>
            </div>
            <div className="imagediv">
              <img src={item.image} width={"80%"} height={"400px"} />
            </div>
            <div className="like">
              <Checkbox
                {...label}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
              />
            </div>
            <div className="caption">
              <h5>{profileDetails[0].users[0].name} :</h5>
              <div className="captioncontent">
                <p>{item.caption}</p>
              </div>
            </div>
          </div>
        ))}

        {/*  */}
      </div>
      <PageRight data={profileDetails} />
    </>
  );
};

export default Profile;
