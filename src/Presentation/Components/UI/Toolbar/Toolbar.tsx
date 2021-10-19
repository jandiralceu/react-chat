import { styled } from '@mui/material/styles'
import { Toolbar as MuiToolbar, ToolbarProps } from '@mui/material'

const StyledToolbar = styled(MuiToolbar)(({ theme }) => ({
  backgroundColor: theme.palette.grey.A200
}))

export const Toolbar = ({
  children,
  ...props
}: Omit<ToolbarProps, 'disableGutters'>) => {
  return (
    <StyledToolbar disableGutters {...props}>
      {children}
    </StyledToolbar>
  )
}
