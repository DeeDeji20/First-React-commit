import React, { Component } from "react";
// import { ProfDetails } from "./ProfDetails";
 import myImage from '../images/IMG-20200507-WA0000.jpg';

export class MyProfile extends Component {
    
    
  render() {
    return (
      <div>
            <div style={imgDiv}>
                <img src={myImage} style={deeImg} alt="" />
                <h1> Adeola Oladeji </h1>
            </div>           
      </div>
    );
  }
}
const imgDiv={
    position:'relative',
    textAlign:'center'
}
const deeImg={
   borderRadius:'50%',
   marginTop:'20px',
   marginBottom:'20px'
}

export default MyProfile;
