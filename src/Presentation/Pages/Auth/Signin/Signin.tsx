import { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { withFormik } from 'formik'
import { useInjection } from 'inversify-react'
import { Box, Divider, TextField } from '@material-ui/core'

import { RemoteAuthentication } from '@/Application/UseCases'
import { SigninWithGoogle } from '@/Presentation/Components/UI'
import { SignContainer, OpenText } from '../Auth.Styles'
import {
  FormLinks,
  SignButton
} from '@/Presentation/Pages/Auth/Signin/Signin.Styles'
import { SigninValidator } from '@/Presentation/Pages/Auth/Signin/Signin.Validator'

const SigninForm = (props: any) => {
  const {
    handleSubmit,
    handleChange,
    values,
    handleBlur,
    errors,
    touched,
    ...rest
  } = props
  const authServices = useInjection(RemoteAuthentication)

  const signWithGoogle = useCallback(() => {
    authServices.signinWithGoogle().then(console.log).catch(console.log)
  }, [])

  return (
    <SignContainer>
      <OpenText variant="h2">Welcome to ReactChat</OpenText>

      <Box width="100%" mt={4} component="form" onSubmit={handleSubmit}>
        <Box>
          <TextField
            name="email"
            label="E-mail"
            variant="standard"
            type="email"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
            error={touched.email && !!errors.email}
            helperText={touched.email && errors.email}
            fullWidth
          />
        </Box>
        <Box mt={2}>
          <TextField
            name="password"
            label="Password"
            variant="standard"
            type="password"
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
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

const Signin = withFormik({
  displayName: 'signinForm',
  validationSchema: SigninValidator,
  mapPropsToValues: () => ({
    email: '',
    password: ''
  }),
  handleSubmit: (values) => {
    console.log(values)
  }
})(SigninForm)

export default Signin
