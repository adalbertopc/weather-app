import clsx from 'clsx'
import { HTMLAttributes } from 'react'

interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: number
}

export const Spinner: React.FC<SpinnerProps> = ({
  className,
  size,
  style,
  ...props
}) => {
  return (
    <div
      className={clsx('spinner', className)}
      style={{
        width: size || 48,
        height: size || 48,
        ...style,
      }}
      {...props}
    ></div>
  )
}
