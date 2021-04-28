/**
 * The candidate may change this file contents
 */
 import React from 'react'
import { useParams } from "react-router-dom"

const UserDetails = () => {
  const { id } = useParams<{id :string}>()

  return (
    <div>
      <p>{`User: ${id}`}</p>
    </div>
  );
}

export default UserDetails
