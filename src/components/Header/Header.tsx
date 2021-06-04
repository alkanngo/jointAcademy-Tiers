import React from "react"
import { User } from "../../service/user"
import { useAppContext } from "../../context/Context"
import { Link } from "react-router-dom"
import "./Header.scss"

const Header: React.FC = () => {
  const ctxVal = useAppContext()
  const testUser: User = ctxVal.testUser

  return (
    <header className="header">
      <Link to="/" className="home__link">
        <div className="title">
          <h2 className="site_name">Check 
            <span className="silver"> Your </span>
            <span className="gold"> Tier </span>
          </h2>
        </div>
      </Link>
      <Link className="testUser__link" to={{
        pathname: `/user/${testUser.login.uuid}`,
        state: { user: testUser }
      }}>
        <div className="testUser" >
          <img 
            src={testUser.picture.medium} 
            alt="Current User" 
            className="testUser__img" />
          <p className="testUser__username">Logged in as: {testUser.login.username}</p>
        </div>
      </Link>
    </header>
  );
}

export default Header;
