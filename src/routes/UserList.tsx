import React, { useEffect, useState }  from 'react'
import { useHistory } from "react-router-dom"
import apiService from "../service/api"
import userService, { User } from "../service/user"

const UserList = () => {
  const { getTier } = userService
  const history = useHistory();
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    apiService.getUsers().then(users => {
      setUsers(users)
    })
  }, [])

  const navigateToDetails = (id: string) => {
    history.push(`/user/${id}`)
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Market</th>
            <th>Tier</th>
          </tr>
        </thead>
        
        <tbody>
          {users.map((user) => (
            <tr key={user.login.uuid} onClick={() => navigateToDetails(user.login.uuid)} style={{cursor: "pointer"}}>
              <td>{`${user.name.title} ${user.name.first} ${user.name.last}`}</td>
              <td>{`${user.nationality}`}</td>
              <td>{`${getTier(user)}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList
