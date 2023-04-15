import { AppFooter } from '@/components/layout/AppFooter'
import { AppHeader } from '@/components/layout/AppHeader'
import { AppNavbar } from '@/components/layout/AppNavBar'
import { AppShell } from '@mantine/core'
import { Outlet } from 'react-router-dom'

export const AppLayout = () => {
  return (
    <AppShell
      padding="md"
      navbar={<AppNavbar />}
      header={<AppHeader />}
      footer={<AppFooter />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Outlet />
    </AppShell>
  )
}
