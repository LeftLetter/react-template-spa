import { router } from '@/routes'
import { MantineProvider } from '@mantine/styles'
import { FC } from 'react'
import { RouterProvider } from 'react-router-dom'

export const AppProvider: FC = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <RouterProvider router={router} />
    </MantineProvider>
  )
}
