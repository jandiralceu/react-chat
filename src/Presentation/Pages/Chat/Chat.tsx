import { Typography } from '@mui/material'

import { MainLayout } from '@/Presentation/Components/Layout'
import { Toolbar } from '@/Presentation/Components/UI'

const Chat = () => {
  return (
    <MainLayout>
      <Toolbar sx={{ height: 62, minHeight: 62 }}>Username</Toolbar>

      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aperiam
        nobis quia in necessitatibus ab eos cupiditate animi nihil sequi?
        Praesentium maxime animi magnam unde assumenda aspernatur possimus
        laborum ipsam. sdfsdfsdfsd sdfsdfsdf
      </Typography>
    </MainLayout>
  )
}

export default Chat
