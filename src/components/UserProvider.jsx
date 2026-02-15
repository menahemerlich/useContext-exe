import React, { createContext, useState } from 'react'

const UserContext = createContext()

function UserProvider({children}) {
    const [name, setName] = useState("Erlich")
  return (
    <UserContext value={{name, setName}}>
        {children}
    </UserContext>
  )
}

export {UserContext, UserProvider}
