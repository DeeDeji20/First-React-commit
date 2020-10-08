import React, { Component } from "react";
import { BodyComp } from "./BodyComp";

export class MainBodyComp extends Component {
  render() {
    return (
      <div>
        <ul>
          {" "}
          {BodyComp.map((component, index) => {
            console.log(component.imgUrl);

            return (
              <div key={index} style={bodyStyle} className="bodyStyle">
                <img src={component.imgUrl} alt="" />
                <li>
                  <a href={component.linkUrl}> {component.title} </a>{" "}
                </li>{" "}
              </div>
            );
          })}{" "}
        </ul>{" "}
      </div>
    );
  }
}
const bodyStyle = {};

export default MainBodyComp;
