import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'inversify-react'
import { ModalProvider } from 'react-modal-hook'
import { TransitionGroup } from 'react-transition-group'
import { SnackbarProvider } from 'notistack'
import { CssBaseline, ThemeProvider } from '@mui/material'

import { container } from '@/Main/Provider'
import theme from '@/Presentation/Assets/Theme'
import Auth from '@/Presentation/Pages/Auth/Auth'
import Chat from '@/Presentation/Pages/Chat/Chat'
import PageNotFound from '@/Presentation/Pages/PageNotFound/PageNotFound'

const App = () => {
  return (
    <Provider container={container}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ModalProvider rootComponent={TransitionGroup}>
          <SnackbarProvider
            preventDuplicate
            maxSnack={4}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            autoHideDuration={3000}
          >
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={Chat} />
                <Route path="/auth" component={Auth} />
                <Route path="*">
                  <PageNotFound />
                </Route>
              </Switch>
            </BrowserRouter>
          </SnackbarProvider>
        </ModalProvider>
      </ThemeProvider>
    </Provider>
  )
}

export default App
