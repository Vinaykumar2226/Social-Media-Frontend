import React, { useEffect, useState } from "react";
import "./PageRight.css";
import { Avatar } from "@mui/material";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PageRight = (props) => {
  const navigate = useNavigate();

  const [users, setUsers] = useState();

  useEffect(() => {
    axios
      .get("https://backend-9ye2.onrender.com/users")
      .then((res) => setUsers(res.data));
  }, []);

  console.log(props.data);

  return (
    <div className="rightcontainer">
      <h3>Find More Friends</h3>

      {users ? (
        users.map((item) => (
          <>
            <div className="frnds" key={item._id}>
              <Avatar
                alt="Remy Sharp"
                src={item.profilePic}
                sx={{ width: 90, height: 90 }}
              />
              <div className="frndname">
                <h4>{item.name}</h4>
                <Button
                  variant="contained"
                  onClick={() => navigate("/FriendsProfile", { state: item })}
                >
                  Profile
                </Button>
              </div>
            </div>
            <Divider />
          </>
        ))
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default PageRight;
