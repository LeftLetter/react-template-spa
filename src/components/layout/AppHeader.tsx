import { Burger, Group, Header } from '@mantine/core'
import { FC, MouseEventHandler } from 'react'

export type AppHeaderProps = {
  opened: boolean
  onClick: MouseEventHandler<HTMLButtonElement>
}

export const AppHeader: FC<AppHeaderProps> = ({ opened, onClick }) => {
  const label = opened ? 'Close navigation' : 'Open navigation'
  return (
    <Header height={60} p="xs">
      <Group>
        <Burger opened={opened} onClick={onClick} aria-label={label} />
        <div>
          <span>Simulation application</span>
        </div>
      </Group>
    </Header>
  )
}
