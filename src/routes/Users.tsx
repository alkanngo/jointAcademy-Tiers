import { useState } from 'react';

import { Link } from "react-router-dom";

const testUsers = [
  { id: 1, firstName: "Clark", lastName: "Kent" },
  { id: 2, firstName: "Bruce", lastName: "Wayne" },
]

const Users = () => {
  const [users] = useState(testUsers)

  return (
    <ul>
      {users.map((user) => { return ( <li><Link to={`/user/${user.id}`}>{`${user.firstName} ${user.lastName}`}</Link></li> );})}
    </ul>
  );
}

export default Users;
