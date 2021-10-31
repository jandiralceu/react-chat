import { styled } from '@mui/material/styles'
import {
  Badge as MuiBadge,
  BadgeProps,
  IconButtonProps,
  IconButton,
  ListItem as MuiListItem,
  ListItemProps,
  ListItemText,
  ListItemTextProps,
  Typography,
  TypographyProps
} from '@mui/material'

export const Item = styled(MuiListItem)<ListItemProps>(({ theme }) => ({
  padding: 0
}))

export const Badge = styled(MuiBadge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px'
  }
}))

export const ItemTitle = styled(ListItemText)<ListItemTextProps>(
  ({ theme }) => ({
    '& .MuiListItemText-secondary': {
      fontSize: 14,
      color: theme.palette.grey['500']
    }
  })
)

export const Time = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: 10,
  color: theme.palette.grey['500']
}))

export const Button = styled(IconButton)<IconButtonProps>(() => ({
  '&:hover': {
    backgroundColor: 'transparent'
  }
}))
