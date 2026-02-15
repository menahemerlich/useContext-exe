import './App.css'
import UserName from './components/UserName'
import UserProfil from './components/UserProfil'
import { UserProvider } from './components/UserProvider'

function App() {
  return (
    <UserProvider>
      <UserName/>
    </UserProvider>
  )
}

export default App
