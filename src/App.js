import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { MainBodyComp } from "./components/Body/MainBodyComp";
import MyProfile from "./components/MyProfile/MyProfile";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MyProfile />
      <MainBodyComp />
    </div>
  );
}

export default App;
