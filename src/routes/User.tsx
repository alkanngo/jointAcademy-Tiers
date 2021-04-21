import React from 'react';
import { useParams } from "react-router-dom";

const User = () => {
  const params = useParams()
  const id = (params as any)?.id; // TODO: Avoid any

  return (
    <p>
      {`User info of user with id: ${id}`}
    </p>
  );
}

export default User;
