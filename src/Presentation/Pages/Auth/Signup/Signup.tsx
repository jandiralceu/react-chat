import { ChangeEvent, useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, Divider, TextField, Typography } from '@material-ui/core'

import { EmailAndPasswordParams } from '@/Domain/Models'
import {
  CreateAccount,
  SignButton
} from '@/Presentation/Pages/Auth/Signin/Signin.Styles'
import { OpenText, SignContainer } from '../Auth.Styles'
import { useInjection } from 'inversify-react'
import { RemoteAuthentication } from '@/Application/UseCases'
import { SigninWithGoogle } from '@/Presentation/Components/UI'

const Signup = () => {
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

  const createAccount = useCallback(() => {
    authServices
      .createAccount(form)
      .then((userCredentials) => {
        console.log(userCredentials)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [form])

  return (
    <SignContainer>
      <OpenText variant="h2">Create an account</OpenText>
      <Box width="100%" mt={4}>
        <Box>
          <TextField
            name="email"
            type="email"
            label="E-mail"
            variant="standard"
            onChange={updateState}
            fullWidth
          />
        </Box>
        <Box mt={2}>
          <TextField
            name="password"
            label="Password"
            variant="standard"
            onChange={updateState}
            type="password"
            fullWidth
          />
        </Box>

        <Box m={4}>
          <SignButton
            variant="contained"
            disableElevation
            onClick={createAccount}
          >
            Create account
          </SignButton>
        </Box>

        <Divider>or</Divider>

        <Box marginY={4}>
          <SigninWithGoogle onClick={signWithGoogle} />
        </Box>

        <CreateAccount>
          <Typography>
            Already have an account? <Link to="/auth/signin">Signin</Link>
          </Typography>
        </CreateAccount>
      </Box>
    </SignContainer>
  )
}

export default Signup
