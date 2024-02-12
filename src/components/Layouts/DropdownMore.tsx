import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, NavLink } from 'react-router-dom'

function DropdownMore() {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const trigger = useRef<any>(null)
  const dropdown = useRef<any>(null)
  const { t } = useTranslation()

  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdown.current) return
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target))
        return
      setDropdownOpen(false)
    }
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!dropdownOpen || keyCode !== 27) return
      setDropdownOpen(false)
    }
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <div className="relative md:hidden">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        to="#"
      >
        {t('more')}
      </Link>

      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute mt-4 flex w-36 flex-col rounded-sm border bg-white shadow dark:border-strokedark dark:bg-boxdark ltr:right-0 rtl:left-0 ${
          dropdownOpen === true ? 'block' : 'hidden'
        }`}
      >
        <ul className="flex flex-col divide-y ">
          <li className="px-1 py-2">
            <NavLink
              to="/Overview"
              className={({ isActive }) => {
                return isActive ? 'font-medium text-primary  ' : 'text-gray-400'
              }}
            >
              {t('topNav.overview')}
            </NavLink>
          </li>
          <li className="px-1 py-2">
            <NavLink
              to="/invest"
              className={({ isActive }) => {
                return isActive ? 'font-medium text-primary ' : 'text-gray-400'
              }}
            >
              {t('topNav.Invest')}
            </NavLink>
          </li>
          <li className="px-1 py-2">
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive ? 'font-medium  text-primary' : 'text-gray-400'
              }}
            >
              {t('topNav.AutoInvest')}
            </NavLink>
          </li>
          <li className="px-1 py-2">
            <NavLink
              to="/myPortfolio"
              className={({ isActive }) => {
                return isActive ? 'font-medium text-primary' : 'text-gray-400'
              }}
            >
              {t('topNav.MyPortfolio')}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default DropdownMore
