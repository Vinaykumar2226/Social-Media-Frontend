import React, { useEffect } from "react";
import "./Home.css";
import { useState } from "react";
import { Button } from "@mui/material";
import Upload from "../Images/Upload.png";
import Divider from "@mui/material/Divider";

import { Avatar } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

import PageRight from "./PageRight";
import Pageleft from "./Pageleft";
import { useLocation } from "react-router-dom";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Home = (props) => {
  const location = useLocation();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [image, setImage] = useState();
  const [caption, setCaption] = useState();
  const [posts, setPosts] = useState();

  const recData = location.state;
  console.log(recData[0].posts);

  const onUpload = () => {
    const emaiTosend = recData[0].users[0].email;
    const name = recData[0].users[0].name;
    const dataTosend = {
      email: emaiTosend,
      image: image,
      caption: caption,
      name: name,
    };
    if (image) {
      axios
        .post("https://backend-9ye2.onrender.com/posts", dataTosend)
        .then(() => {
          setOpen(false);
          toast.success(
            "Uploaded Succesfully LogOut and Login to see your post "
          );
        })
        .catch((err) => toast.error("Upload image less than 80kb"));
    } else {
      toast.error("Please upload an Image");
    }
  };

  function Imageupload(e) {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      // console.log(reader.result);
      setImage(reader.result);
    };
    reader.onerror = (error) => {
      console.log("error", error);
    };
  }

  useEffect(() => {
    axios
      .get("https://backend-9ye2.onrender.com/posts")
      .then((res) => setPosts(res.data));
  }, []);

  return (
    <>
      <Pageleft data={recData} />
      <div className="HomeContainer">
        <ToastContainer />
        <div className="postdiv">
          <div className="postbtn">
            <Button onClick={handleOpen}>
              <img src={Upload} />
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Create and Upload Posts
                </Typography>
                <div className="inpfield">
                  <input accept="image/*" type="file" onChange={Imageupload} />
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Caption"
                    multiline
                    maxRows={4}
                    onChange={(a) => setCaption(a.target.value)}
                  />
                  <Button variant="contained" onClick={onUpload}>
                    Upload
                  </Button>
                </div>
              </Box>
            </Modal>
          </div>
          <p>Wanna tell Something or Post Something...</p>
          <Divider />
        </div>
        {posts ? (
          posts.map((item) => (
            <div className="feed" key={item._id}>
              <div>
                <div className="posts">
                  <div className="post">
                    <Avatar
                      alt="Remy Sharp"
                      // src={}
                      sx={{ width: 40, height: 40 }}
                    />
                    <div className="username">
                      <h4>{item.name}</h4>
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
                  <h5>{item.name} :</h5>
                  <div className="captioncontent">
                    <p>{item.caption}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No posts Now</p>
        )}
      </div>
      <PageRight />
    </>
  );
};

export default Home;
