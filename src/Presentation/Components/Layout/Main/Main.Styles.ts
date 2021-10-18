import { Drawer as MuiDrawer, Box as MuiBox, Button } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Drawer = styled(MuiDrawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: 290,
    backgroundColor: theme.palette.white
  }
}))

export const SearchUserContainer = styled(MuiBox)(({ theme }) => ({
  padding: '16px 12px 6px',
  backgroundColor: theme.palette.grey.A200,

  '& .MuiInput-root': {
    border: 'none',
    outline: 'none',
    backgroundColor: theme.palette.white,
    borderRadius: 20,
    height: 36,
    padding: '0 8px',
    fontSize: 14
  }
}))

export const ImageProfileButton = styled(Button)(() => ({
  width: 40,
  height: 40,
  borderRadius: '100%',

  '& img': {
    height: 'inherit',
    width: 'inherit',
    borderRadius: 'inherit'
  }
}))
