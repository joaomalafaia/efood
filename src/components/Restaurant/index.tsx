import { Link } from 'react-router-dom'

import Tag from '../Tag'
import {
  RestaurantCard,
  CardDescription,
  CardText,
  CardTitle,
  CardTitleSection,
  Infos
} from './styles'
import star from '../../assets/images/star.png'

type Props = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
}

const Restaurant = ({
  id,
  avaliacao,
  descricao,
  titulo,
  destacado,
  tipo,
  capa
}: Props) => (
  <RestaurantCard>
    <Infos>
      {destacado === true && <Tag>Destaque da Semana</Tag>}
      <Tag>{tipo}</Tag>
    </Infos>
    <img src={capa} alt={titulo} />
    <CardDescription>
      <CardTitleSection>
        <CardTitle>{titulo}</CardTitle>
        <div className="note">
          <CardTitle>{avaliacao}</CardTitle>
          <img src={star} />
        </div>
      </CardTitleSection>
      <CardText>{descricao}</CardText>
      <Link className="link" to={`/restaurant/${id}`}>
        Saiba mais
      </Link>
    </CardDescription>
  </RestaurantCard>
)

export default Restaurant
