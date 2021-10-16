import { Switch, useRouteMatch, Route, Redirect } from 'react-router-dom'
import { Box, Container, Typography } from '@material-ui/core'

import Signin from '@/Presentation/Pages/Auth/Signin/Signin'
import Signup from '@/Presentation/Pages/Auth/Signup/Signup'
import {
  AuthContainer,
  AuthFooter,
  Card,
  CoverImage,
  Page
} from '@/Presentation/Pages/Auth/Auth.Styles'

const Auth = () => {
  const { path } = useRouteMatch()
  return (
    <AuthContainer>
      <Container maxWidth="md" component={Card} elevation={10}>
        <Box>
          <CoverImage
            src={require('@/Presentation/Assets/Images/login.png')}
            alt="People chating"
          />
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Page>
            <Typography component="h1">ReactChat</Typography>

            <Switch>
              <Route exact path={path}>
                <Redirect to={`${path}/signin`} />
              </Route>
              <Route path={`${path}/signin`} component={Signin} />
              <Route path={`${path}/signup`} component={Signup} />
            </Switch>
          </Page>
        </Box>
      </Container>
      <AuthFooter mt={2}>
        <Typography>© 2021. Jandir Alceu. All rights reserved.</Typography>
      </AuthFooter>
    </AuthContainer>
  )
}

export default Auth
