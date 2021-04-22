import React, { useEffect, useState }  from 'react'
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import apiClient from "../service/api"

const Users = () => {
  const { register, watch } = useForm()
  const watchGender = watch("gender", "F");
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

      <ul>
        {filteredUsers.map((user) => { return ( <li><Link to={`/user/${user.id}`}>{`${user.name.first} ${user.name.last}`}</Link></li> )})}
      </ul>
    </div>
  );
}

export default Users
