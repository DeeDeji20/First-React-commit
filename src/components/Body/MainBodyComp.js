import React, { Component } from "react";
import { BodyComp } from "./BodyComp";

export class MainBodyComp extends Component {
  render() {
    return (
      <div >
        <ul  style={bodyStyle}>
          {" "}
          {BodyComp.map((component, index) => {
            console.log(component.imgUrl);

            return (
              <div>
                <div key={index}  className="bodyStyle">
                  <img src={component.imgUrl} alt="" />
                  <li>
                    <a href={component.linkUrl}> {component.title} </a>{" "}
                  </li>{" "}
                </div>
               
              </div>

            );
          })}{" "}
        </ul>{" "}
      </div>
    );
  }
}
const bodyStyle = {
  width:'100%',
  margin:'auto',
  display:'grid',
  gridTemplateColumns:'1fr 1fr 1fr 1fr',
  textAlign:'center',
  marginTop:'50px'
};

export default MainBodyComp;
