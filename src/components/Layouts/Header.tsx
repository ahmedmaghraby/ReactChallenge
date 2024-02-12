import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import DarkModeSwitcher from './DarkModeSwitcher'
import DropdownNotification from './DropdownNotification'
import DropdownUser from './DropdownUser'
import TopNav from './TopNav'

import DropdownMore from './DropdownMore'
import type { SidebarAndHeaderProps } from '@/type/PropsType'
import Logo from '@/assets/logo.svg?react'
import { useThemeStore } from '@/store/themeStore'

function Header({ sidebarOpen, setSidebarOpen }: SidebarAndHeaderProps) {
  const { locale, toggleLocale } = useThemeStore()
  const { t } = useTranslation()

  return (
    <header className="sticky top-0 z-40 flex w-full border-b border-gray-200 bg-white dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex grow items-center justify-between px-4 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 py-4 sm:gap-4 lg:hidden">
          <button
            aria-controls="sidebar"
            onClick={e => {
              e.stopPropagation()
              setSidebarOpen(!sidebarOpen)
            }}
            className=" z-50 block rounded-sm border bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          >
            <span className="relative block size-5 cursor-pointer">
              <span className="absolute right-0 size-full ">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                    !sidebarOpen && '!w-full delay-300'
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                    !sidebarOpen && '!w-full delay-500'
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                    !sidebarOpen && '!w-full delay-500'
                  }`}
                ></span>
              </span>
              <span className="absolute right-0 size-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                    !sidebarOpen && '!h-0 !delay-[0]'
                  }`}
                ></span>
                <span
                  className={`absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black delay-500 duration-200 ease-in-out dark:bg-white ${
                    !sidebarOpen && '!h-0 !delay-200'
                  }`}
                ></span>
              </span>
            </span>
          </button>

          <Link className="block shrink-0 lg:hidden" to="/">
            <Logo className="w-20 fill-[#190044]  dark:fill-white md:w-36" />
          </Link>
        </div>

        <TopNav />

        <div className="2xsm:gap-7 flex items-center gap-3 py-4">
          <ul className="flex items-center gap-2 sm:gap-4">
            <span
              className="cursor-pointer text-sm text-dark dark:text-gray-200 ltr:font-Almarai rtl:font-Poppins"
              onClick={() => {
                toggleLocale(locale === 'ar' ? 'en' : 'ar')
                i18next.changeLanguage(locale === 'ar' ? 'en' : 'ar')
              }}
            >
              {t('lang')}
            </span>
            <DarkModeSwitcher />

            <DropdownNotification />
          </ul>

          <DropdownUser />

          <DropdownMore />
        </div>
      </div>
    </header>
  )
}

export default Header
