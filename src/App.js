import "./App.css";
import Logo from "./Components/Logo";
import Profile from "./Components/Profile";
import Home from "./Components/Home";
import Login from "./Components/Login";
import SignUp from "./Components/Signup";
import FriendsProfile from "./Components/FriendsProfile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Logo />
      <div className="maincontent">
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/Home" element={<Home />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/FriendsProfile" element={<FriendsProfile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
