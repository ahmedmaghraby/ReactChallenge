import { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import type { DefaultLayoutProps } from '@/type/PropsType'

function DefaultLayout({ children }: DefaultLayoutProps) {
  const [sidebar, toggleSidebar] = useState(false)

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark ">
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebar} setSidebarOpen={toggleSidebar} />

        <div className="xs:px-2 relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden md:px-5">
          <Header sidebarOpen={sidebar} setSidebarOpen={toggleSidebar} />

          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">{children}</div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default DefaultLayout
