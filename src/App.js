import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { MainBodyComp } from "./components/Body/MainBodyComp";
import MyProfile from "./components/MyProfile/MyProfile";
import MainFooter from "./components/Footer/MainFooter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MyProfile />
      <MainBodyComp />
      <MainFooter/>
    </div>
  );
}

export default App;
