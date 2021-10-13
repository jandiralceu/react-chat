import { Switch, useRouteMatch, Route, Redirect } from 'react-router-dom'

import Signin from '@/Presentation/Pages/Auth/Signin/Signin'
import Signup from '@/Presentation/Pages/Auth/Signup/Signup'

const Auth = () => {
  const { path } = useRouteMatch()
  return (
    <Switch>
      <Route exact path={path}>
        <Redirect to={`${path}/signin`} />
      </Route>
      <Route path={`${path}/signin`} component={Signin} />
      <Route path={`${path}/signup`} component={Signup} />
    </Switch>
  )
}

export default Auth
