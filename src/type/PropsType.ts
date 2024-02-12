import type { ReactNode } from 'react'

export interface DefaultLayoutProps {
  children: ReactNode
}

export interface SidebarAndHeaderProps {
  sidebarOpen: boolean
  setSidebarOpen: (arg: boolean) => void
}

export interface ButtonProps {
  children: ReactNode
  btnType:
    | 'primary'
    | 'primary-outline'
    | 'secondary'
    | 'secondary-outline'
    | 'success'
    | 'success-outline'
    | 'danger'
    | 'danger-outline'
    | 'warning'
    | 'warning-outline'
    | 'info'
    | 'info-outline'
    | 'dark'
    | 'light'
    | 'dark-outline'
    | 'btn'
  btnClick: () => void
}

export interface AccordionItemProps {
  id: string
  title: string
  content: string
  open: boolean
  setOpen: (arg: string) => void
}

export interface AccordionProps {
  title: string
  data: AccordionData[]
}

export interface AccordionData {
  id: string
  title: string
  content: string
}

export interface ChartProps {
  title: string
  data: any[]
  options?: any
}
