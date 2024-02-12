import { useEffect, useState } from 'react'
import { useThemeStore } from '@/store/themeStore'

function usePricePrefix(price: number) {
  const { locale } = useThemeStore()
  const [formattedNumber, setFormattedNumber] = useState('')

  useEffect(() => {
    if (locale === 'ar') {
      setFormattedNumber(price.toLocaleString('ar-SA', { style: 'currency', currency: 'SAR' }))
    } else {
      setFormattedNumber(price.toLocaleString('en-US', { style: 'currency', currency: 'SAR' }))
    }
  }, [locale, price])

  return [formattedNumber]
}

export default usePricePrefix
