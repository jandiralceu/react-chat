import { Link } from 'react-router-dom'
import { Box, Divider, TextField } from '@material-ui/core'

import {
  FormLinks,
  SignButton
} from '@/Presentation/Pages/Auth/Signin/Signin.Styles'
import { SignContainer, OpenText } from '../Auth.Styles'
import { useInjection } from 'inversify-react'
import { RemoteAuthentication } from '@/Application/UseCases'
import { ChangeEvent, useCallback, useState } from 'react'
import { EmailAndPasswordParams } from '@/Domain/Models'
import { SigninWithGoogle } from '@/Presentation/Components/UI'

const Signin = () => {
  const authServices = useInjection(RemoteAuthentication)
  const [form, setForm] = useState<EmailAndPasswordParams>({
    email: '',
    password: ''
  })

  const updateState = (event: ChangeEvent<HTMLInputElement>) => {
    setForm((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value
      }
    })
  }

  const signWithGoogle = useCallback(() => {
    authServices.signinWithGoogle().then(console.log).catch(console.log)
  }, [])

  const signWithEmailAndPassword = useCallback(() => {
    authServices
      .signinWithEmailAndPassword(form)
      .then(console.log)
      .catch(console.log)
  }, [form])

  return (
    <SignContainer>
      <OpenText variant="h2">Welcome to ReactChat</OpenText>
      <Box width="100%" mt={4}>
        <Box>
          <TextField
            label="E-mail"
            variant="standard"
            type="email"
            fullWidth
            onChange={updateState}
          />
        </Box>
        <Box mt={2}>
          <TextField
            label="Password"
            variant="standard"
            type="password"
            onChange={updateState}
            fullWidth
          />
        </Box>

        <FormLinks mt={1}>
          <Link to="/auth/forgot-password">Forgot password?</Link>
          <Link to="/auth/signup">Create account</Link>
        </FormLinks>

        <Box m={4}>
          <SignButton
            variant="contained"
            disableElevation
            onClick={signWithEmailAndPassword}
          >
            Sign in
          </SignButton>
        </Box>

        <Divider>or</Divider>

        <Box marginY={4}>
          <SigninWithGoogle onClick={signWithGoogle} />
        </Box>
      </Box>
    </SignContainer>
  )
}

export default Signin
