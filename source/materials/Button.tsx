/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable complexity */
import { type ButtonHTMLAttributes, type MouseEvent } from 'react'
import styled from '@emotion/styled'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  main?: boolean
  danger?: boolean
  active?: boolean
  disable?: boolean
  border?: boolean
  shape?: 'round' | 'normal' | 'circle'
  size?: 'small' | 'normal' | 'large'
  block?: boolean
  data?: unknown
  onTap?(event: ClickEvent): void
}

const fontSizes = {
  small: 0,
  normal: 1,
  large: 2,
}

const borderRadius = {
  round: 0,
  normal: 'var(--j_btn_bdr)',
  circle: 40,
}

// 1. disable 3. danger 4. main 5. normal
// 这些会对背景颜色、边框、阴影、字色影响
// shape size 会影响边框

const SButton = styled.button<Omit<ButtonProps, 'data' | 'onTap'>>(
  props => {
    const sizeBase = (fontSizes[props.size || 'normal'] || 0) + 1
    return {
      color: 'var(--j_btn_clr)',
      lineHeight: '24px',
      cursor: 'pointer',
      userSelect: 'none',
      background: 'var(--j_btn_bg)',
      fontSize: sizeBase * 2 + 10,
      padding: `${sizeBase * 2 - 1}px ${sizeBase * 6}px`,
      display: props.block ? 'block' : 'inline-block',
      border: props.border ? 'var(--j_btn_bd)' : 0,
      borderRadius: borderRadius[props.shape || 'normal'],
    }
  },
  props => {
    if (props.main) {
      return {
        background: 'var(--j_btn_main_bg)',
        color: 'var(--j_btn_main_clr)',
        borderColor: 'var(--j_btn_main_clr)',
      }
    }
    return {}
  },
  props => {
    if (props.danger) {
      if (props.main) {
        return {
          background: 'var(--j_btn_danger_bg)',
          borderColor: 'var(--j_btn_danger_clr)',
        }
      }
      return {
        color: 'var(--j_btn_danger_clr)',
        borderColor: 'var(--j_btn_danger_clr)',
      }
    }
    return {}
  },
  props => {
    if (props.disable) {
      return {
        background: 'var(--j_btn_disable_bg)',
        color: 'var(--j_btn_disable_clr)',
        borderColor: 'var(--j_btn_disable_clr)',
      }
    }
    if (props.active) {
      return {
        opacity: 0.8,
      }
    }
    return {
      '&:hover': {
        opacity: 0.9,
      },
      '&:active': {
        opacity: 0.8,
      },
    }
  },
  props => {
    if (props.disable) {
      return {
        filter: 'hue-rotate(0.6)',
        cursor: 'not-allowed',
      }
    }
    return {}
  },
)

interface ClickEvent<T = HTMLButtonElement> {
  data?: unknown
  native: MouseEvent<T>
}

const Button = ({ data, onTap, ...rest }: ButtonProps) => {
  const onClick = (native: MouseEvent<HTMLButtonElement>) => {
    onTap?.({
      data,
      native,
    })
    rest.onClick?.(native)
  }
  return (
    <SButton
      {...rest}
      disabled={rest.disable || rest.disabled || rest.active}
      onClick={onClick}
    />
  )
}

export default Button
