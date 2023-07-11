import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './auth'

export const RequireAuth = ({ children }) => {
  const location = useLocation()
  const auth = useAuth()
  let tokenInLocalStorage = localStorage.getItem('userToken')
  console.log(auth+","+tokenInLocalStorage)
  if (auth==null && !tokenInLocalStorage) {
    console.log('Authentication Required');
    return <Navigate to='/login' state={{ path: location.pathname }} />
    // auth.logout()
  }
  return children
}