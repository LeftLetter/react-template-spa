import { pathName } from '@/config/path'
import { Drawer, NavLink, Navbar } from '@mantine/core'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export type AppNavbarType = {
  opened: boolean
  onClose: () => void
}

export const AppNavbar: FC<AppNavbarType> = ({ opened, onClose }) => {
  const { t } = useTranslation()

  return (
    <Drawer opened={opened} onClose={onClose}>
      <Navbar.Section onClick={onClose}>
        <Link to={pathName.simulation}>
          <NavLink label={t('simulation.title')} />
        </Link>
      </Navbar.Section>

      <Navbar.Section onClick={onClose}>
        <Link to={pathName.history}>
          <NavLink label={t('history.title')} />
        </Link>
      </Navbar.Section>

      <Navbar.Section onClick={onClose}>
        <Link to={pathName.add}>
          <NavLink label={t('add.title')} />
        </Link>
      </Navbar.Section>
    </Drawer>
  )
}
