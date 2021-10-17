import { useCallback } from 'react'
import { useFormik } from 'formik'
import { Link, useHistory } from 'react-router-dom'
import { useInjection } from 'inversify-react'
import { Box, Divider, TextField } from '@mui/material'

import { RemoteAuthentication } from '@/Application/UseCases'
import { SigninWithGoogle } from '@/Presentation/Components/UI'
import { SignContainer, OpenText } from '../Auth.Styles'

import {
  FormLinks,
  SignButton
} from '@/Presentation/Pages/Auth/Signin/Signin.Styles'
import { SigninValidator } from '@/Presentation/Pages/Auth/Signin/Signin.Validator'

const Signin = () => {
  const history = useHistory()
  const authServices = useInjection(RemoteAuthentication)

  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: SigninValidator,
    onSubmit: (values) => {
      authServices
        .signinWithEmailAndPassword(values)
        .then(() => history.push('/'))
        .catch(console.log)
    }
  })

  const signWithGoogle = useCallback(() => {
    authServices.signinWithGoogle().then(console.log).catch(console.log)
  }, [authServices])

  return (
    <SignContainer>
      <OpenText variant="h2">Welcome to ReactChat</OpenText>

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

        <FormLinks mt={1}>
          <Link to="/auth/forgot-password">Forgot password?</Link>
          <Link to="/auth/signup">Create account</Link>
        </FormLinks>

        <Box m={4}>
          <SignButton variant="contained" disableElevation type="submit">
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
