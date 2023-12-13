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
  name: string
  infos: string[]
  image: string
  description: string
  mark: string
  link: string
}

const Restaurant = ({ mark, infos, description, image, name, link }: Props) => (
  <RestaurantCard>
    <img src={image} alt={name} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <CardDescription>
      <CardTitleSection>
        <CardTitle>{name}</CardTitle>
        <div className="note">
          <CardTitle>{mark}</CardTitle>
          <img src={star} />
        </div>
      </CardTitleSection>
      <CardText>{description}</CardText>
      <Link className="link" to={link}>
        Saiba mais
      </Link>
    </CardDescription>
  </RestaurantCard>
)

export default Restaurant
