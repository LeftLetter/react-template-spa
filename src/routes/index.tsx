import { History } from '@/features/history/components/pages/History'
import { Simulation } from '@/features/simulation/components/pages/Simulation'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Simulation />,
  },
  {
    path: '/simulation',
    element: <Simulation />,
  },
  {
    path: '/history',
    element: <History />,
  },
])
