import React from 'react'
import { useParams } from "react-router-dom"

const User = () => {
  const { id } = useParams<{id :string}>()

  return (
    <p>
      {`User info of user with id: ${id}`}
    </p>
  );
}

export default User
