import React, { useEffect, useState }  from 'react'
import { useHistory } from "react-router-dom"
import { useForm } from "react-hook-form"
import apiClient from "../service/api"
import auth from "../service/auth"
import userHelper, { User } from "../helpers/userHelper"

const UserList = () => {
  const { getTier } = userHelper
  const { getUsername } = auth
  const history = useHistory();
  const { register, watch } = useForm()
  const watchMarket = watch("market", "DK")
  const [users, setUsers] = useState<User[]>([])
  const [filteredUsers, setFilteredUsers] = useState(users.filter((user) => watchMarket === user.market))

  type LoadingState = 'LOADING' | 'READY' | 'ERROR'

  const [loadingState, setLoadingState] = useState<LoadingState>('LOADING')

  useEffect(() => {
    const getUsers = async () => {
      try {
        setUsers(await apiClient.getUsers())
        setLoadingState('READY')
      } catch (e) {
        alert(e)
        setLoadingState('ERROR')
      }
    }

    getUsers()
  }, [])

  useEffect(() => {
    setFilteredUsers(users.filter((user) => watchMarket === user.market))
  },[users, watchMarket])

  const renderBody = () => {
    switch (loadingState) {
      case 'LOADING':
        return (
          <tr>
            <td col-span="4">Loading..</td>
          </tr>
        )

      case 'ERROR':
        return (
          <tr>
            <td col-span="4">Something went wrong :(</td>
          </tr>
        )

      case 'READY':
        return ( 
          filteredUsers.map((user) => { return (
            <tr key={user.id} onClick={() => history.push(`/user/${user.id}`, user)} style={{cursor: "pointer"}}>
              <td>{`${user.name.title} ${user.name.first} ${user.name.last}`}</td>
              <td>{`${user.market}`}</td>
              <td>{`${getTier(user)}`}</td>
              <td>{`${user.userName === getUsername() ? 'Yes' : 'No'}`}</td>
            </tr>
          )})
        )
    }
  }

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
          {renderBody()}
        </tbody>
      </table>
    </div>
  );
}

export default UserList
