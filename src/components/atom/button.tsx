import type { ButtonProps } from '@/type/PropsType'

function Button({ children, btnType, btnClick }: ButtonProps) {
  const buttonsType = {
    primary: 'btn-primary',
    'primary-outline': 'btn-outline-primary',
    secondary: 'btn-secondary',
    'secondary-outline': 'btn-outline-secondary',
    success: 'btn-success',
    'success-outline': 'btn-outline-success',
    danger: 'btn-danger',
    'danger-outline': 'btn-outline-danger',
    warning: 'btn-warning',
    'warning-outline': 'btn-outline-warning',
    info: 'btn-info',
    'info-outline': 'btn-outline-info',
    dark: 'btn-dark',
    light: 'btn-dark-light',
    'dark-outline': 'btn-outline-dark',
    btn: '',
  }
  return (
    <button onClick={btnClick} className={`btn btn-lg ${buttonsType[btnType]} `}>
      {children}
    </button>
  )
}

export default Button
