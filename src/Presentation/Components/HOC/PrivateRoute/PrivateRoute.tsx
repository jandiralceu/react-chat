import { Redirect, Route, RouteProps, useLocation } from 'react-router-dom'
import { useAuthentication } from '@/Presentation/Context/AuthContext'

export const PrivateRoute = ({
  children,
  component: Component,
  ...rest
}: RouteProps) => {
  const location = useLocation()
  const { currentUser } = useAuthentication()

  if (!currentUser) {
    return (
      <Redirect
        to={{
          pathname: '/auth/signin',
          state: {
            from: location.pathname
          }
        }}
      />
    )
  }

  if (Component) {
    return <Route {...rest} render={(props) => <Component {...props} />} />
  }

  if (children) {
    return <Route {...rest} render={() => children} />
  }

  return null
}
