import { PropsWithChildren } from 'react'

import { DesktopDrawer } from '@/Presentation/Components/Layout/Main/Components'
import { Container, MainContent } from './Main.Styles'

export const MainLayout = ({ children }: PropsWithChildren<any>) => {
  return (
    <Container>
      <DesktopDrawer />
      <MainContent component="main">{children}</MainContent>
    </Container>
  )
}
