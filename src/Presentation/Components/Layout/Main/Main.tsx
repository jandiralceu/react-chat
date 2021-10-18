import { PropsWithChildren, useState, MouseEvent } from 'react'
import {
  AccountCircle,
  Chat as ChatIcon,
  MoreVert as MoreIcon,
  Search
} from '@mui/icons-material'
import { Box, IconButton, Input, Menu, MenuItem } from '@mui/material'

import { Toolbar } from '@/Presentation/Components/UI'

import { Drawer, SearchUserContainer, ImageProfileButton } from './Main.Styles'
import { useAuthentication } from '@/Presentation/Context/AuthContext'

export const MainLayout = ({ children }: PropsWithChildren<any>) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const { currentUser, signOut } = useAuthentication()

  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: '290px 1fr' }}>
      <Drawer variant="permanent" open>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            {currentUser?.photoURL ? (
              <ImageProfileButton
                aria-controls="profile-drawer"
                aria-label="user image profile"
              >
                <img alt="user account photo" src={currentUser?.photoURL} />
              </ImageProfileButton>
            ) : (
              <IconButton
                edge="end"
                size="large"
                color="inherit"
                aria-controls="profile-drawer"
                aria-label="user image profile"
              >
                <AccountCircle />
              </IconButton>
            )}
          </Box>

          <IconButton
            size="large"
            aria-label="display more actions"
            edge="end"
            color="inherit"
          >
            <ChatIcon />
          </IconButton>
          <Box>
            <IconButton
              edge="end"
              size="large"
              color="inherit"
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
        </Toolbar>

        <SearchUserContainer>
          <Input
            name="finduser"
            fullWidth
            disableUnderline
            placeholder="Search or start a conversation"
            startAdornment={<Search />}
          />
        </SearchUserContainer>

        <Box>
          <Box component="section">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            assumenda autem consequatur doloribus excepturi expedita
          </Box>
          <Box component="section">
            {currentUser
              ? JSON.stringify(currentUser, null, 2)
              : 'NO user found'}
            magnam modi nihil obcaecati pariatur placeat quibusdam quidem sequi
            suscipit tenetur! Atque cupiditate omnis quas!
          </Box>
        </Box>
      </Drawer>

      <Box component="main">{children}</Box>
    </Box>
  )
}
