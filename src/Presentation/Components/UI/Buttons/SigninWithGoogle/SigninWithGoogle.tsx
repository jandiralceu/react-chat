import { styled } from '@material-ui/core/styles'
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps
} from '@material-ui/core'

type ButtonProps = {} & Pick<MuiButtonProps, 'onClick'>

const Button = styled(MuiButton)(({ theme }) => ({
  color: theme.palette.grey['500'],
  textTransform: 'none',

  '& img': {
    marginRight: 6
  }
}))

export const SigninWithGoogle = (props: ButtonProps) => (
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
