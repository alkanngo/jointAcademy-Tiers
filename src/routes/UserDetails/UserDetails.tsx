/**
 * The candidate may change this file contents
 */
 import React from 'react'
import { useLocation, useParams } from "react-router-dom"
import { User } from '../../service/user'

const UserDetails = () => {
  const location = useLocation<{user: User}>()
  const user = location.state.user

  return (
    <div>
      <p>{`User: ${user.name.first} ${user.name.last} ${user.nationality} ${user.registered.age}`}</p>
    </div>
  );
}

export default UserDetails
