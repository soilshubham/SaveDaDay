import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export default () => {
  const { user, setUser, isAuthenticated, setIsAuthenticated } = useContext(AuthContext)
  console.log(user)
  return (
    <>
      Home
    </>
  )
}
