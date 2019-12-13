export type ButtonSizes = 'small' | 'normal' | 'large' | 'huge'
export type ButtonColors = 'chicago' | 'stormdust' | 'white' | 'whiteBlack'

export interface StyledButtonProps {
  borderRadius?: string | number
  color?: ButtonColors
  size?: ButtonSizes
  equal?: boolean
  fill?: boolean
  justifyContent?: string
}
