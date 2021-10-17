import { useCallback } from 'react'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import { useInjection } from 'inversify-react'
import { Box, Divider, TextField, Typography } from '@mui/material'

import { RemoteAuthentication } from '@/Application/UseCases'
import { SigninWithGoogle } from '@/Presentation/Components/UI'
import { OpenText, SignContainer } from '../Auth.Styles'

import {
  CreateAccount,
  SignButton
} from '@/Presentation/Pages/Auth/Signin/Signin.Styles'
import { SignupValidator } from './Signup.Validator'

const Signup = () => {
  const authServices = useInjection(RemoteAuthentication)

  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: SignupValidator,
    onSubmit: (values) => {
      authServices.createAccount(values).then(console.log).catch(console.log)
    }
  })

  const signWithGoogle = useCallback(() => {
    authServices.signinWithGoogle().then(console.log).catch(console.log)
  }, [authServices])

  return (
    <SignContainer>
      <OpenText variant="h2">Create an account</OpenText>

      <Box width="100%" mt={4} component="form" onSubmit={handleSubmit}>
        <Box>
          <TextField
            label="E-mail"
            variant="standard"
            type="email"
            {...getFieldProps('email')}
            error={touched.email && !!errors.email}
            helperText={touched.email && errors.email}
            fullWidth
          />
        </Box>
        <Box mt={2}>
          <TextField
            label="Password"
            variant="standard"
            type="password"
            {...getFieldProps('password')}
            error={touched.password && !!errors.password}
            helperText={touched.password && errors.password}
            fullWidth
          />
        </Box>

        <Box m={4}>
          <SignButton variant="contained" disableElevation type="submit">
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
