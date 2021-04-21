import React, { useEffect, useState }  from 'react'
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"

const testUsers = [
  { id: 1, firstName: "Clark", lastName: "Kent", gender: "male" },
  { id: 2, firstName: "Bruce", lastName: "Wayne", gender: "male" },
  { id: 3, firstName: "Jessica", lastName: "Jones", gender: "female" },
]

const Users = () => {
  const { register, watch } = useForm()
  const watchGender = watch("gender", "female");
  const [filteredUsers, setFilteredUsers] = useState(testUsers.filter((user) => user.gender === watchGender))

  useEffect(() => {
    setFilteredUsers(testUsers.filter((user) => user.gender === watchGender))
  },[watchGender])

  return (
    <div>
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
      </select>

      <ul>
        {filteredUsers.map((user) => { return ( <li><Link to={`/user/${user.id}`}>{`${user.firstName} ${user.lastName}`}</Link></li> )})}
      </ul>
    </div>
  );
}

export default Users
