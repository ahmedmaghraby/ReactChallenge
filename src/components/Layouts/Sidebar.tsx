import { useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import type { SidebarAndHeaderProps } from '@/type/PropsType'
import Logo from '@/assets/logo.svg?react'
import Wallet from '@/assets/Wallet.svg?react'
import SidebarImg from '@/assets/sidebarImg.svg?react'

import usePricePrefix from '@/hooks/usePricePerfix'
import Button from '@/components/atom/button'

function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarAndHeaderProps) {
  const trigger = useRef<any>(null)
  const sidebar = useRef<any>(null)
  const { t } = useTranslation()

  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) {
        return
      }
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target))
        return
      setSidebarOpen(false)
    }
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) {
        return
      }
      setSidebarOpen(false)
    }
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <aside
      ref={sidebar}
      className={`absolute top-0 z-50 flex h-full w-80 flex-col overflow-y-hidden border-r  bg-white duration-300  ease-linear dark:bg-boxdark  lg:static lg:translate-x-0 ltr:left-0 rtl:right-0 rtl:border-l ${
        sidebarOpen
          ? 'translate-x-0'
          : 'lg:!translate-x-0 ltr:-translate-x-full rtl:translate-x-full'
      }`}
    >
      <div className="me-6 ms-3 flex items-center justify-between gap-2 border-b border-gray-200 ">
        <NavLink to="/" className="mb-4 mt-2">
          <Logo className="w-40 fill-[#190044] dark:fill-white" />
        </NavLink>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden rtl:rotate-180"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>

      <div className="flex flex-col overflow-y-auto duration-300 ease-linear ">
        <nav className="px-4 pt-6 lg:px-6 lg:pt-11">
          <div className="flex flex-col border-b border-gray-200 px-2 pb-1 ">
            <div className="flex w-full flex-row items-center gap-5">
              <Wallet />
              <Link to="#" className="flex basis-4/5 flex-row items-center justify-between">
                <div className="flex flex-col justify-between">
                  <h4 className="text-lg font-semibold">{usePricePrefix(50054)}</h4>
                  <span className="text-xs font-normal">{t('walletBalance')}</span>
                </div>
                <span className="icon-[iconamoon--arrow-right-2] text-gray-500 rtl:rotate-180"></span>
              </Link>
            </div>
            <div className="flex w-full flex-row items-center gap-5 py-6 lg:py-8">
              <Button btnType="primary" btnClick={() => {}}>
                {t('Deposit')}
              </Button>
              <Button btnType="btn" btnClick={() => {}}>
                {t('Withdraw')}
              </Button>
            </div>
            <div className="flex w-full flex-row items-start gap-2 pb-6 lg:pb-8">
              <span className="icon-[akar-icons--info] w-8 pt-6 text-gray-500"></span>
              <h4 className="text-xs font-normal text-gray-500">
                {t('depositWithdrawInfo1')}
                <strong> {usePricePrefix(1000)} </strong>
                {t('depositWithdrawInfo2')}
              </h4>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3.5 py-6 lg:py-8">
            <SidebarImg className="w-3/4" />
            <h4 className="text-sm font-semibold text-dark dark:text-bodydark2">
              {t('WhyShouldYouTrustIt')}
            </h4>
            <span className="text-center text-xs font-medium text-gray-500 dark:text-bodydark1">
              {t('WhyShouldYouTrustItDesc')}
            </span>
          </div>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar
