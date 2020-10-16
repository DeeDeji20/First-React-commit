import React, { Component } from "react";
import Contact from "./Contact";
import FollowUs from "./FollowUs";
import Copyright from "./Copyright";
export class MainFooter extends Component {
  render() {
    return (
      <div className='footerStyle'>
        <Contact />
        <FollowUs />
        <Copyright />
      </div>
    );
  }
}

export default MainFooter;
