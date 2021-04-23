import React, { useEffect, useState }  from 'react'
import { useHistory } from "react-router-dom"
import { useForm } from "react-hook-form"
import apiClient from "../service/api"
import auth from "../service/auth"
import userHelper from "../helpers/userHelper"

const Users = () => {
  const { getTier } = userHelper
  const { getUsername } = auth
  const history = useHistory();
  const { register, watch } = useForm()
  const watchGender = watch("gender", "F")
  const [users, setUsers] = useState<Record<string, any>[]>([])
  const [filteredUsers, setFilteredUsers] = useState(users.filter((user) => user.gender === watchGender))

  useEffect(() => {
    apiClient.getUsers().then(fetchedUsers => {
        setUsers(fetchedUsers)
    })
  }, [])

  useEffect(() => {
    setFilteredUsers(users.filter((user) => user.gender === watchGender))
  },[users, watchGender])

  return (
    <div>
      <select {...register("gender")}>
        <option value="F">female</option>
        <option value="M">male</option>
      </select>

      <table>
        <tr>
          <th>Name</th>
          <th>Logged in</th>
          <th>Tier</th>
        </tr>

        {filteredUsers.map((user) => { return (
          <tr onClick={() => history.push(`/user/${user.login.id}`)}>
            <td>{`${user.name.first} ${user.name.last}`}</td>
            <td>{`${user.login.username === getUsername() ? 'Yes' : 'No'}`}</td>
            <td>{`${getTier(user)}`}</td>
          </tr>
        )})}
      </table>
    </div>
  );
}

export default Users
