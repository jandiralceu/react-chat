import { useState } from 'react'
import { Redirect, Route, RouteProps, useLocation } from 'react-router-dom'

export const PrivateRoute = ({
  children,
  component: Component,
  ...rest
}: RouteProps) => {
  const location = useLocation()
  const [expired] = useState(false)

  if (expired) {
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
