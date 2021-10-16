import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'inversify-react'
import { CssBaseline, ThemeProvider } from '@material-ui/core'

import theme from '@/Presentation/Assets/Theme'
import Auth from '@/Presentation/Pages/Auth/Auth'
import Chat from '@/Presentation/Pages/Chat/Chat'
import PageNotFound from '@/Presentation/Pages/PageNotFound/PageNotFound'
import { container } from '@/Main/Provider'

const App = () => {
  return (
    <Provider container={container}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Chat} />
            <Route path="/auth" component={Auth} />
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default App
