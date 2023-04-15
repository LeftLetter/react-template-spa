import { LoadingOverlay } from '@mantine/core'
import { FC } from 'react'

export const AppLoading: FC = () => {
  return <LoadingOverlay visible={true} transitionDuration={500} />
}
