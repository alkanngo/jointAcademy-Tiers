/**
 * The candidate may change this file contents
 */
import React, { useEffect, useState }  from 'react'
import { useHistory } from "react-router-dom"
import { useAppContext } from '../../context/Context'
import apiService from "../../service/api"
import userService, { User } from "../../service/user"
import  auth  from "../../service/auth"
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup"
import Onboarding from "../../components/Onboarding/Onboarding"
import "./UserList.scss" 

//TODO: Render something if connection timeout
//TODO: Get rid of duplicates in list
const UserList = () => {
  const { getTier } = userService
  const { getUserId } = auth
  const history = useHistory();
  const ctxVal = useAppContext()
  const [users, setUsers] = useState<User[]>([])
  const [selectedTier, setSelectedTier] = useState<string>()
  const [listPopulated, setListPopulated] = useState<boolean>(false)

  const getTestUser = (id: string, user: User) => {
    const testUserId = getUserId()
      if(testUserId === id){
        return ctxVal.setTestUser(user)
      }
  }

  useEffect(() => {
    const { result: users } = apiService.getUsers()
    if (users) {
        users.then((userRecords) => {
          setUsers(userRecords)
          userRecords.forEach(user => {
            getTestUser(user.login.id, user)
          })
        })
      }
  }, [])

  const navigateToDetails = (id: string, user: User) => {
    history.push({pathname:`/user/${id}`, state: {user: user,}})
  }

  const renderSelectedTier = (event: React.ChangeEvent<HTMLButtonElement>) => {
    setSelectedTier(event.target.name)
    setListPopulated(true)
  };

  return (
    <main>
      <div className="btn-group">
        <ButtonGroup 
          buttons={["BRONZE", "SILVER", "GOLD"]}
          selectedButton={renderSelectedTier}
        />
      </div>
      {!listPopulated
        ? <Onboarding />
        :<div className="list">
          <table className="list__table">
            <thead className="table__head">
              <tr>
                <th></th>
                <th>Name</th>
                <th>Market</th>
                <th>Tier</th>
              </tr>
            </thead>
            <tbody className="table__body">
            {users.map((user, i) => (
              user.nationality === "US" && getTier(user) === selectedTier
              ? <tr 
                  key={i} 
                  onClick={() => navigateToDetails(user.login.uuid, user)} 
                  className={getTier(user).toLowerCase()}
                  style={{cursor: "pointer"}}
                >
                  <td><img src={user.picture.thumbnail} alt="avatar" /></td>
                  <td>{`${user.name.title} ${user.name.first} ${user.name.last}`}</td>
                  <td>{`${user.nationality}`}</td>
                  <td>{`${getTier(user)}`}</td>
                </tr>
              : <></>
            ))}
          </tbody>
        </table>
      </div>
        }
    </main>
  );
}

export default UserList
