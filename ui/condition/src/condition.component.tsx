import type { ReactNode } from 'react'

interface ConditionProps {
  children?: ReactNode
  match: boolean
}

const Condition = ({ match, children }: ConditionProps) => match && children

export { Condition }
