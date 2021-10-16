import { styled } from '@material-ui/core/styles'
import { Box, Card as MuiCard, Typography } from '@material-ui/core'

export const AuthContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  minHeight: '100vh',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,

  '& .MuiContainer-root': {
    padding: 0
  }
}))

export const Card = styled(MuiCard)(({ theme }) => ({
  display: 'grid !important',
  border: 'none',
  gridTemplateColumns: 'repeat(2, 1fr)',
  backgroundColor: theme.palette.primary.dark,

  '& > div': {
    padding: '60px 20px',

    '&:first-of-type': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },

    '&:last-of-type': {
      width: '100%',
      height: '100%',
      alignSelf: 'center',
      justifySelf: 'center',
      backgroundColor: theme.palette.white
    }
  }
}))

export const CoverImage = styled('img')(() => ({
  maxWidth: 300
}))

export const AuthFooter = styled(Box)(() => ({
  '& p': {
    fontSize: 14
  }
}))

export const Page = styled(Box)(({ theme }) => ({
  width: 320,
  textAlign: 'center',

  '& h1': {
    fontSize: 26,
    marginBottom: 50,
    color: theme.palette.primary.dark,
    fontWeight: theme.typography.fontWeightBold
  }
}))

export const SignContainer = styled(Box)(({ theme }) => ({
  color: theme.palette.grey['900']
}))

export const OpenText = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  color: theme.palette.grey['500']
}))
