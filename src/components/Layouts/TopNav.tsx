import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

function TopNav() {
  const { t } = useTranslation()

  return (
    <>
      <div className="relative hidden h-full items-center gap-5 px-1 text-sm font-medium md:flex xl:gap-7">
        <NavLink
          to="/Overview"
          className={({ isActive }) => {
            return isActive ? 'activeLink' : 'text-gray-400'
          }}
        >
          {t('topNav.overview')}
        </NavLink>
        <NavLink
          to="/invest"
          className={({ isActive }) => {
            return isActive ? ' activeLink' : 'text-gray-400'
          }}
        >
          {t('topNav.Invest')}
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) => {
            return isActive ? 'activeLink' : 'text-gray-400'
          }}
        >
          {t('topNav.AutoInvest')}
        </NavLink>
        <NavLink
          to="/myPortfolio"
          className={({ isActive }) => {
            return isActive ? 'activeLink' : 'text-gray-400'
          }}
        >
          {t('topNav.MyPortfolio')}
        </NavLink>
      </div>
    </>
  )
}

export default TopNav
