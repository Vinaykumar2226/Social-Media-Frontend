import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import "./Signup.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();

  const [image, setImage] = useState();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");
  const [password, setPassword] = useState("");
  const [tick, setTick] = useState(false);

  const onSinUp = () => {
    if (
      (firstName != "") &
      (email != "") &
      (location != "") &
      (bio != "") &
      (password != "") &
      tick
    ) {
      const dataTosend = {
        name: firstName,
        email: email,
        location: location,
        bio: bio,
        password: password,
        profilePic: image,
      };
      axios
        .post("https://backend-9ye2.onrender.com/signup", dataTosend)
        .then((res) => console.log(res.data.acknowledged))
        .then(() => navigate("/"))
        .catch((err) => toast.error("Upload image less than 50kb"));
    } else {
      toast.error("Enter all fields..!");
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

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={(a) => setFirstName(a.target.value)}
                  autoComplete="given-name"
                  name="Name"
                  required
                  fullWidth
                  id="firstName"
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={(b) => setLocation(b.target.value)}
                  required
                  fullWidth
                  id="Location"
                  label="Location"
                  name="Location"
                  autoComplete="Location"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(b) => setEmail(b.target.value)}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(c) => setPassword(c.target.value)}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(c) => setBio(c.target.value)}
                  required
                  fullWidth
                  name="Account Bio"
                  label="Account Bio"
                  type="Account Bio"
                  id="Account Bio"
                  autoComplete="new-bio"
                />
              </Grid>
              <Grid item xs={12}>
                <div className="img">
                  <p>Upload Profile Picture</p>
                  <input accept="image/*" type="file" onChange={Imageupload} />
                </div>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="allowExtraEmails"
                      color="primary"
                      onClick={() => (tick ? setTick(false) : setTick(true))}
                    />
                  }
                  label="I accept to the terms and conditions of Social Connektt.."
                />
              </Grid>
            </Grid>
            <Button
              onClick={onSinUp}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <ToastContainer />
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="./" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
