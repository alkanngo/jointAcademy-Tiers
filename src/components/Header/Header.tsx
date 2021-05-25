import React from 'react'
import  auth  from "../../service/auth"
import "./Header.scss"

const Header: React.FunctionComponent = () => {
  const { getUsername } = auth

  return (
    <header className="header">
      <div className="header__title">
        <h2 className="site_name">Check <span className="silver">Your </span> <span className="gold"> Tier </span></h2>
      </div>
        <p className="user">Logged in as: {getUsername()}</p>
    </header>
  );
}

export default Header;
