import { PropsWithChildren } from 'react'

import { DesktopDrawer } from '@/Presentation/Components/Layout/Main/Components'
import { MainLayoutContainer, MainContent } from './Main.Styles'

export const MainLayout = ({ children }: PropsWithChildren<any>) => {
  return (
    <MainLayoutContainer>
      <DesktopDrawer />
      <MainContent component="main">{children}</MainContent>
    </MainLayoutContainer>
  )
}
