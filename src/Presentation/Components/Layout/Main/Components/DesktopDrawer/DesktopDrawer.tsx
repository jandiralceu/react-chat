import { createRef, MouseEvent, useState } from 'react'
import {
  Box,
  DrawerProps,
  IconButton,
  Input,
  Menu,
  MenuItem
} from '@mui/material'
import {
  AccountCircle,
  Chat as ChatIcon,
  MoreVert as MoreIcon,
  Search,
  ArrowBack as BackIcon
} from '@mui/icons-material'

import { Toolbar } from '@/Presentation/Components/UI'
import { useAuthentication } from '@/Presentation/Context'
import {
  AppMenu,
  Drawer,
  ImageProfileButton,
  MessagesContainer,
  SearchUserContainer,
  toolbarSize,
  Warning
} from './DesktopDrawer.Styles'

export const DesktopDrawer = ({ open = true }: Pick<DrawerProps, 'open'>) => {
  const { currentUser, signOut } = useAuthentication()
  const [hasFocus, setHasFocus] = useState(false)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const searchBar = createRef<any>()

  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Drawer variant="permanent" sx={{ position: 'relative' }} open={open}>
      <Toolbar
        sx={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          top: 0,
          height: toolbarSize
        }}
      >
        <AppMenu component="menu">
          <Box>
            {currentUser?.photoURL ? (
              <ImageProfileButton
                aria-controls="profile-drawer"
                aria-label="user image profile"
              >
                <img alt="user account photo" src={currentUser?.photoURL} />
              </ImageProfileButton>
            ) : (
              <IconButton
                size="large"
                color="primary"
                aria-controls="profile-drawer"
                aria-label="user image profile"
              >
                <AccountCircle />
              </IconButton>
            )}
          </Box>

          <Box sx={{ display: 'flex' }}>
            <IconButton
              size="large"
              aria-label="display more actions"
              color="primary"
            >
              <ChatIcon />
            </IconButton>

            <Box>
              <IconButton
                edge="end"
                size="large"
                color="primary"
                onClick={handleMenu}
                aria-controls="menu-appbar"
                aria-label="display more actions"
              >
                <MoreIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                keepMounted
                open={!!anchorEl}
                onClose={handleClose}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem
                  onClick={() => {
                    signOut()
                    handleClose()
                  }}
                >
                  Signout
                </MenuItem>
              </Menu>
            </Box>
          </Box>
        </AppMenu>

        <Warning>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </Warning>

        <SearchUserContainer>
          <Input
            name="finduser"
            fullWidth
            disableUnderline
            placeholder="Search or start a conversation"
            startAdornment={
              hasFocus ? (
                <BackIcon
                  color="primary"
                  onClick={() => searchBar?.current?.blur()}
                />
              ) : (
                <Search />
              )
            }
            inputRef={searchBar}
            onFocus={() => setHasFocus(true)}
            onBlur={() => setHasFocus(false)}
          />
        </SearchUserContainer>
      </Toolbar>

      <MessagesContainer component="section">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
        asperiores beatae cum, cumque doloremque dolores enim iusto libero minus
        modi molestiae nihil, nisi omnis quae soluta tempore vitae voluptate
        voluptatem!
      </MessagesContainer>
    </Drawer>
  )
}
