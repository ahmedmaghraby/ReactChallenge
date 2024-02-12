import { Outlet } from 'react-router'
import DefaultLayout from '@/components/Layouts/Layout'

function Home() {
  return (
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
  )
}

export default Home
