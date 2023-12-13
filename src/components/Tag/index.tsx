import { TagContainer } from './styles'

export type Props = {
  type?: 'saiba mais' | 'filter'
  children: string
}

const Tag = ({ children, type = 'filter' }: Props) => (
  <TagContainer type={type}>{children}</TagContainer>
)

export default Tag
