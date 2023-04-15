import { ErrorPage } from '@/components/error/ErrorPage'
import { AppLayout } from '@/components/layout/AppLayout'
import { pathName } from '@/config/path'
import { HistoryPage } from '@/features/history/components/pages/HistoryPage'
import { SimulationPage } from '@/features/simulation/components/pages/SimulationPage'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: pathName.root,
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <SimulationPage />,
      },
      {
        path: pathName.history,
        element: <HistoryPage />,
      },
    ],
  },
])
