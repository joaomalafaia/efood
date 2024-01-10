import * as S from './styles'

type Props = {
  restaurant: Restaurant
}

const Banner = ({ restaurant }: Props) => (
  <S.BannerArea>
    <S.BannerImg style={{ backgroundImage: `url(${restaurant.capa})` }} />
    <div className="container">
      <S.BannerText>{restaurant.tipo}</S.BannerText>
      <S.BannerTitle>{restaurant.titulo}</S.BannerTitle>
    </div>
  </S.BannerArea>
)

export default Banner
