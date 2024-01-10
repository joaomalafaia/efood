import { Link } from 'react-router-dom'

import Tag from '../Tag'

import star from '../../assets/images/star.png'

import * as S from './styles'

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
  <S.RestaurantCard>
    <S.Infos>
      {destacado === true && <Tag>Destaque da Semana</Tag>}
      <Tag>{tipo}</Tag>
    </S.Infos>
    <img src={capa} alt={titulo} />
    <S.CardDescription>
      <S.CardTitleSection>
        <S.CardTitle>{titulo}</S.CardTitle>
        <div className="note">
          <S.CardTitle>{avaliacao}</S.CardTitle>
          <img src={star} />
        </div>
      </S.CardTitleSection>
      <S.CardText>{descricao}</S.CardText>
      <Link
        title={`Saiba mais sobre ${titulo}`}
        className="link"
        to={`/restaurant/${id}`}
      >
        Saiba mais
      </Link>
    </S.CardDescription>
  </S.RestaurantCard>
)

export default Restaurant
