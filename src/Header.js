import React from "react";
import logo from './logo.svg';
const Header = (props) => {
    return(
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {props.userId}        
      </header>
    )
}

export default Header;