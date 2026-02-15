import React, { useContext } from 'react'
import { UserContext } from './UserProvider'

function UserName() {
    
    const {name} = useContext(UserContext)
  return (
    <div>
      {name}
    </div>
  )
}

export default UserName
