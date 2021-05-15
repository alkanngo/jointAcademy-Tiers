import React from 'react'
import  auth  from "./../service/auth"

const Nav = () => {
  const { getUsername } = auth



  return (
    <div>
      <h3>{getUsername()}</h3>
    </div>
  );
}

export default Nav;
