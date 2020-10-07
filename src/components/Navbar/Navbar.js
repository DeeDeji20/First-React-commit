import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";

export class Navbar extends Component {
  state = { clicked: false };

  handleClick=()=>{
    this.setState({
      clicked:!this.state.clicked
    })
  }
  render() {
    return (
      <nav className="NavBarItems">
        <h1 className="NavBar-logo">
          {" "}
          Dee <i className= 'fab fa-react'></i>{" "}
        </h1>{" "}
        <div className="menuIcon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times': 'fas fa-bars'}></i>
        </div>{" "}
        <ul className={this.state.clicked?'nav-menu-active':'nav-menu'}>
          {" "}
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                {" "}
                <a className={item.cName} href={item.url}>
                  {" "}
                  {item.title}{" "}
                </a>
              </li>
            );
          })}{" "}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
