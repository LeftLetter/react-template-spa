import { Navbar } from '@mantine/core'
import { FC } from 'react'
import { Link } from 'react-router-dom'

export const AppNavbar: FC = () => {
  return (
    <Navbar width={{ base: 300 }} p="xs">
      <Link to="/about">About</Link>
    </Navbar>
  )
}
