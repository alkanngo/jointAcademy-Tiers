import React, { useEffect, useState }  from 'react'
import { useHistory } from "react-router-dom"
import { useForm } from "react-hook-form"
import apiClient from "../service/api"
import auth from "../service/auth"
import userHelper from "../helpers/userHelper"
import { User } from "../service/user"

const Users = () => {
  const { getTier } = userHelper
  const { getUsername } = auth
  const history = useHistory();
  const { register, watch } = useForm()
  const watchMarket = watch("market", "DK")
  const [users, setUsers] = useState<User[]>([])
  const [filteredUsers, setFilteredUsers] = useState(users.filter((user) => watchMarket === user.market))

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

  useEffect(() => {
    setFilteredUsers(users.filter((user) => watchMarket === user.market))
  },[users, watchMarket])

  return (
    <div>
      <select {...register("market")}>
        <option value="DK">Denmark</option>
        <option value="FI">Finland</option>
        <option value="NO">Norway</option>
        <option value="US">United States</option>
      </select>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Market</th>
            <th>Tier</th>
            <th>Logged in</th>
          </tr>
        </thead>

        <tbody>
          {filteredUsers.map((user) => { return (
            <tr key={user.id} onClick={() => history.push(`/user/${user.id}`)}>
              <td>{`${user.firstName} ${user.lastName}`}</td>
              <td>{`${user.market}`}</td>
              <td>{`${getTier(user)}`}</td>
              <td>{`${user.userName === getUsername() ? 'Yes' : 'No'}`}</td>
            </tr>
          )})}
        </tbody>
      </table>
    </div>
  );
}

export default Users
