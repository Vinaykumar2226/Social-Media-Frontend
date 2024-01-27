import React, { useEffect, useState } from "react";
import "./FriendsProfile.css";
import coverimg from "../Images/coverimg.avif";
import { Avatar } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import axios from "axios";

import { useLocation } from "react-router-dom";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const FriendsProfile = () => {
  const [posts, setPosts] = useState();
  const location = useLocation();
  const profileDetails = location.state;
  console.log(profileDetails);

  useEffect(() => {
    axios
      .get(`https://backend-9ye2.onrender.com/posts/${profileDetails.email}`)
      .then((res) => setPosts(res.data));
  }, []);

  //   const posts = profileDetails[0].posts;
  // console.log(profileDetails[0].posts);

  return (
    <div className="frndss">
      <div className="frndscontainerr">
        <div className="coverpage">
          <img src={coverimg} width={"100%"} height={"60%"} />
          <div className="avatardiv">
            <Avatar
              alt={profileDetails.name}
              src={profileDetails.profilePic}
              sx={{ width: 200, height: 200 }}
            />
          </div>
        </div>
        <div className="details">
          <h1>{profileDetails.name}</h1>
          <p>Lives in {profileDetails.location}</p>
          <p>{profileDetails.bio}</p>
        </div>
        {posts ? (
          posts.map((item) => (
            <div key={item._id}>
              <div className="posts">
                <div className="post">
                  <Avatar
                    alt="Remy Sharp"
                    src={profileDetails.profilePic}
                    sx={{ width: 40, height: 40 }}
                  />
                  <div className="username">
                    <h4>{profileDetails.name}</h4>
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
                <h5>{profileDetails.name} :</h5>
                <div className="captioncontent">
                  <p>{item.caption}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h3>No Posts Yet...</h3>
        )}

        {/*  */}
      </div>
    </div>
  );
};

export default FriendsProfile;
