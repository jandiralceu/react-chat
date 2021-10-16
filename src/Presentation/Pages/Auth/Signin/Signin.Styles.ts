import { styled } from '@material-ui/core/styles'
import { Box, Button } from '@material-ui/core'

export const FormLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',

  '& a': {
    fontSize: 12,
    color: theme.palette.primary.light,
    textDecoration: 'none'
  }
}))

export const CreateAccount = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',

  '& p': {
    fontSize: 14,
    color: theme.palette.grey['500'],

    '& a': {
      color: theme.palette.primary.light,
      fontWeight: theme.typography.fontWeightMedium
    }
  }
}))

export const SignButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  minWidth: 160,
  minHeight: 44,
  backgroundColor: theme.palette.grey['700'],
  borderRadius: 20,
  fontSize: 16
}))
