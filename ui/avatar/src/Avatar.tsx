import { layout } from 'styled-system'

import styled     from '@emotion/styled'

interface AvatarProps {
  color?: string
  width?: number | string | number[] | string[]
  height?: number | string | number[] | string[]
  src?: string
}

const StyledAvatar = styled.div<AvatarProps>(
  ({ theme, color, src }: any) => ({
    background: src ? `url(${src})` : theme.colors[color],
    borderRadius: '50%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }),
  layout
)

const Avatar = ({ color = 'alto', height = 40, src, width = 40, ...props }: AvatarProps) => (
  <StyledAvatar {...props} color={color} height={height} src={src} width={width} />
)

export { Avatar }
