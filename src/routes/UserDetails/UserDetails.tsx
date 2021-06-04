/**
 * The candidate may change this file contents
 */
 import React from 'react'
import { useLocation } from "react-router-dom"
import userService, { User } from '../../service/user'
import Bronze from "../../svg/Bronze"
import Silver from "../../svg/Silver"
import Gold from "../../svg/Gold"
import "./UserDetails.scss"

const UserDetails = () => {
  const location = useLocation<{user: User}>()
  const user = location.state.user
  const { getTier } = userService


  const checkAmountOfYearsUntilNextTier = () => {
    const userYearsRegistered = user.registered.age
    const amountOfYearsUntilNextTier =  userYearsRegistered === 2 ? 3
                                    : userYearsRegistered < 5 ? 5 % userYearsRegistered
                                    : userYearsRegistered > 5 ? 10 % userYearsRegistered
                                    : userYearsRegistered === 5 ? 5 
                                    : userYearsRegistered
    return getTier(user) !== "GOLD"
          ? `Almost there, in ${amountOfYearsUntilNextTier} years ${user.name.first} will get to the next tier`
          : "Wow congratz you are in the top tier"
  }

  const getTierIllustration = () => {
    switch (getTier(user)) {
      case "GOLD":
        return <Gold />
      case "SILVER":
        return <Silver />
      default:
        return <Bronze />
    }
  }

  return (
    <main className="details">
      <h3 className="tier">{checkAmountOfYearsUntilNextTier()}</h3>
      <section className="svg">
        {getTierIllustration()}
      </section>
      <section className={`user ${getTier(user).toLowerCase()}`}>
        <div className="user__container">
          <img className="user__profile" src={user.picture.large} alt="Profile" />
        </div>
        <div className="user__info">
          <p className="name">{`${user.name.title} ${user.name.first} ${user.name.last}`}</p>
          <p className="username">{`@${user.login.username}`}</p>
          <p className="tier">{`Tier: ${getTier(user)}`}</p>
          <p className="registered">{`Registerd For: ${user.registered.age} years`}</p>
          <p className="age">{`Age: ${user.birth.age}`}</p>
          <p className="location">{`Located: ${user.location.city}, ${user.location.state} - ${user.location.country}`}</p>
          <p className="address">{`Address: ${user.location.street.name} ${user.location.street.number}`}</p>
          <p className="phone">{`Phone#: ${user.phone}`}</p>
        </div>
      </section>
    </main>
  );
}

export default UserDetails
