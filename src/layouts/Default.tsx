import { Outlet } from 'react-router-dom'
import { styled } from '../../stitches.config'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/NavBar'


const SuperRoot = styled('div', {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
})

const SuperContent = styled('div', {
  padding: '96px',
  maxWidth: '1280px',
  margin: '0px auto',
  display: 'flex',
  flexDirection: 'column'
})

export function Layout() {
  return (
    <SuperRoot>
      <NavBar />
      <SuperContent>
        <Outlet />
      </SuperContent>
      <Footer />
    </SuperRoot>
  )
}