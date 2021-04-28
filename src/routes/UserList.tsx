import React, { useEffect, useState }  from 'react'
import { useHistory } from "react-router-dom"
import apiClient from "../service/api"
import userHelper, { User } from "../helpers/userHelper"

const UserList = () => {
  const { getTier } = userHelper
  const history = useHistory();
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const getUsers = async () => {
      try {
        setUsers(await apiClient.getUsers())
      } catch (e) {
        alert(e)
      }
    }

    getUsers()
  }, [])

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
            <tr key={user.login.uuid} onClick={() => history.push(`/user/${user.login.uuid}`, user)} style={{cursor: "pointer"}}>
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
