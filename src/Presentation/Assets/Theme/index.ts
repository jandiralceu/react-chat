import { createTheme } from '@mui/material/styles'
import { purple, grey } from '@mui/material/colors'

declare module '@mui/material/styles/createPalette' {
  export interface PaletteOptions {
    white: string
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500]
    },
    white: '#fff'
  },
  components: {
    MuiInput: {
      styleOverrides: {
        underline: {
          '::before': {
            borderBottomColor: grey['300']
          }
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          '::before, ::after': {
            borderBottomColor: grey['300']
          }
        },
        wrapper: {
          color: grey['500']
        }
      }
    }
  }
})

export default theme
