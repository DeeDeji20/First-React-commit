import React, { Component } from "react";
// import { ProfDetails } from "./ProfDetails";
import myImage from "../images/IMG-20200507-WA0000.jpg";
import SocialMedia from "./SocialMedia";

export class MyProfile extends Component {
  render() {
    return (
      <div style={bodyStyle}>
        <div style={imgDiv}>
          <img src={myImage} style={deeImg} alt="" />
          <h1> Adeola Oladeji </h1>{" "}
        </div>{" "}
        <div>
          <SocialMedia/>
        </div>
      </div>
    );
  }
}
const imgDiv = {
  position: "relative",
  textAlign: "center",
};
const deeImg = {
  borderRadius: "50%",
  marginTop: "20px",
  marginBottom: "20px",
};
const bodyStyle={
  display:'grid',
  gridTemplateColumns:'4fr 1fr',
 
}

export default MyProfile;
