export type Size = 'normal' | 'medium' | 'large'

export type Attachment = 'left' | 'right' | 'both'

export type Position = 'before' | 'after'

export interface PrefixProps {
  size?: Size
}

export interface SuffixProps {
  size?: Size
}

export interface AddonProps {
  position?: Position
  size?: Size
}
