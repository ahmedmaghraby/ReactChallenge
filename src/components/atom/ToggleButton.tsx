import { useState } from 'react'
import { useTranslation } from 'react-i18next'

function ToggleButton() {
  const [isActive, setIsActive] = useState(false)
  const { t } = useTranslation()
  return (
    <label className="flex cursor-pointer items-center">
      <div className="text-xxs text-gray-400 dark:text-bodydark1 ltr:mr-4 rtl:ml-4">
        {isActive ? t('Active') : t('Inactive')}
      </div>
      <div className="relative">
        <input
          type="checkbox"
          id="toggle"
          className="sr-only"
          checked={isActive}
          onChange={e => setIsActive(e.target.checked)}
        />
        <div
          className={`block  ${isActive ? 'bg-success-700' : 'bg-gray-400'} h-5 w-10 rounded-full`}
        ></div>
        <div
          className={`absolute left-1 top-0.5  size-4 rounded-full transition ${isActive ? 'translate-x-full bg-white' : 'bg-white'}`}
        ></div>
      </div>
    </label>
  )
}

export default ToggleButton
