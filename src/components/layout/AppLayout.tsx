import { AppFooter } from '@/components/layout/AppFooter'
import { AppHeader } from '@/components/layout/AppHeader'
import { AppNavbar } from '@/components/layout/AppNavBar'
import { AppShell } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Outlet } from 'react-router-dom'

export const AppLayout = () => {
  const [opened, handlers] = useDisclosure(false)

  return (
    <AppShell
      padding="md"
      navbar={<AppNavbar opened={opened} onClose={handlers.close} />}
      header={<AppHeader opened={opened} onClick={handlers.toggle} />}
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
