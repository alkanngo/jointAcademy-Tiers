import React from 'react'
import  auth  from "./../service/auth"
import "./Nav.scss"

const Nav = () => {
  const { getUsername } = auth
  const testUser = getUsername();



  return (
    <div className="container">
      <div className="name_container">
        <h2 className="site_name">Check <span className="silver">Your </span> <span className="gold"> Tier </span></h2>
      </div>
      <div className="profile_pic">
        <img alt="profile" src="https://i.redd.it/9qvwe2ju0ch41.png"/>
        <h3>Logged in as: {getUsername()}</h3>
      </div>
    </div>
  );
}

export default Nav;
