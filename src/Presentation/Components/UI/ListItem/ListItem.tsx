import { Avatar, Box, ListItemAvatar, ListItemButton } from '@mui/material'
import {
  Chat as ChatIcon,
  KeyboardArrowDown as MoreIcon
} from '@mui/icons-material'

import { Button, Time, Badge, Item, ItemTitle } from './ListItem.Styles'

export const ListItem = () => {
  return (
    <Item
      alignItems="flex-start"
      secondaryAction={
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-end"
        >
          <Time>Ontem</Time>
          <Box display="flex">
            <Button
              aria-label="message"
              disableFocusRipple
              disableRipple
              disableTouchRipple
            >
              <Badge badgeContent={8} color="secondary">
                <ChatIcon />
              </Badge>
            </Button>

            <Button
              aria-label="menu"
              sx={{ padding: 0, marginLeft: 1 }}
              disableFocusRipple
              disableRipple
              disableTouchRipple
            >
              <MoreIcon />
            </Button>
          </Box>
        </Box>
      }
    >
      <ListItemButton>
        <ListItemAvatar>
          <Avatar
            alt="My image profile"
            src={require('../../../Assets/Images/profile.jpg')}
          />
        </ListItemAvatar>
        <ItemTitle
          primary="Jandir A. Cutabiala"
          secondary="Last user message"
        />
      </ListItemButton>
    </Item>
  )
}
