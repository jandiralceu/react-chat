import { styled } from '@mui/material/styles'
import {
  Divider as MuiDivider,
  Drawer as MuiDrawer,
  Box as MuiBox,
  IconButton,
  List,
  DividerProps
} from '@mui/material'

export const toolbarSize = 190

export const Drawer = styled(MuiDrawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: 360,
    backgroundColor: theme.palette.white,
    overflowX: 'hidden'
  }
}))

export const SearchUserContainer = styled(MuiBox)(({ theme }) => ({
  height: 50,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  backgroundColor: theme.palette.grey.A200,

  '& .MuiInputBase-root': {
    height: 36,
    fontSize: 14,
    border: 'none',
    outline: 'none',
    padding: '0 8px',
    borderRadius: 20,
    margin: '6px 10px',
    backgroundColor: theme.palette.white,

    '&.Mui-focused': {
      margin: 0,
      height: '100%',
      borderRadius: 0,
      boxShadow: theme.shadows[1]
    }
  }
}))

export const ImageProfileButton = styled(IconButton)(() => ({
  width: 40,
  height: 40,
  borderRadius: '100%',

  '& img': {
    height: 'inherit',
    width: 'inherit',
    borderRadius: 'inherit'
  }
}))

export const Warning = styled(MuiBox)(({ theme }) => ({
  margin: 0,
  padding: '20px 10px',
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.light,
  fontSize: 14
}))

export const MessagesContainer = styled(List)(() => ({
  marginTop: toolbarSize,
  padding: 0,
  minHeight: `calc(100vh - ${toolbarSize}px)`
}))

export const AppMenu = styled(MuiBox)(() => ({
  height: 62,
  margin: 0,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  padding: '0 10px'
}))

export const Divider = styled(MuiDivider)<DividerProps>(() => ({
  marginRight: 10
}))
