import { styled } from '@mui/material/styles'
import { Button as MuiButton, ButtonProps } from '@mui/material'

const Button = styled(MuiButton)(({ theme }) => ({
  color: theme.palette.grey['500'],
  textTransform: 'none',

  '& img': {
    marginRight: 6
  }
}))

export const SigninWithGoogle = (props: Pick<ButtonProps, 'onClick'>) => (
  <Button
    disableElevation
    disableRipple
    variant="text"
    type="button"
    {...props}
  >
    <img
      src={require('@/Presentation/Assets/Images/sign_with_google.svg')}
      alt="google icon"
    />
    Sign in with Google
  </Button>
)
