import { Restaurant } from '../../pages/Home'
import { BannerArea, BannerImg, BannerText, BannerTitle } from './styles'

type Props = {
  restaurant: Restaurant
}

const Banner = ({ restaurant }: Props) => (
  <BannerArea>
    <BannerImg style={{ backgroundImage: `url(${restaurant.capa})` }} />
    <div className="container">
      <BannerText>{restaurant.tipo}</BannerText>
      <BannerTitle>{restaurant.titulo}</BannerTitle>
    </div>
  </BannerArea>
)

export default Banner
