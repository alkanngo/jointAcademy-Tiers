import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from "react-router-dom"
import { User } from "../helpers/userHelper"
import apiClient from "../service/api"

interface Location {
  state: User
}

const UserDetails = () => {
  const { state }: Location = useLocation();
  const { id } = useParams<{id :string}>()
  const [user, setUser] = useState<User | undefined>(state)

  type LoadingState = 'LOADING' | 'READY' | 'ERROR'

  const [loadingState, setLoadingState] = useState<LoadingState>(user ? 'READY' : 'LOADING')

  useEffect(() => {
    const getUser = async () => {
      try {
        setUser(await apiClient.getUser(id))
        setLoadingState('READY')
      } catch (e) {
        alert(e)
        setLoadingState('ERROR')
      }
    }

    if (loadingState === 'LOADING') {
      getUser()
    }
  }, [id, loadingState])

  const renderDetails = () => {
    if (loadingState === 'LOADING') {
      return <p>Loading..</p>
    } else if (loadingState === 'READY' && user) {
      return ( 
        <div>
          <p>{`Name: ${user.name.title} ${user.name.first} ${user.name.last}`}</p>
          <p>{`Email: ${user.email}`}</p>
          <p>{`Phone: ${user.cell}`}</p>
          <p>{`Gender: ${user.gender}`}</p>
          <p>{`Market: ${user.market}`}</p>
          <p>{`Username: ${user.userName}`}</p>
          <img alt="Thumbnail" src={user.picture.thumbnail}/>
        </div>
      )
    }

    return <p>Something went wrong..</p>
  }

  return (
    <div>
      <p>{`User info of user with id: ${id}`}</p>

      {renderDetails()}
    </div>
  );
}

export default UserDetails
