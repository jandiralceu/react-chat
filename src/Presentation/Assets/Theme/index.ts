import { createTheme } from '@material-ui/core/styles'
import { purple, grey } from '@material-ui/core/colors'

declare module '@material-ui/core/styles/createPalette' {
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
