import { DishCard, DishTitle, DishText, DishButton } from './styles'

type Props = {
  name: string
  description: string
  image: string
}

const Dish = ({ name, description, image }: Props) => (
  <div>
    <DishCard className="container">
      <img src={image} alt={name} />
      <DishTitle>{name}</DishTitle>
      <DishText>{description}</DishText>
      <DishButton>Adicionar ao carrinho</DishButton>
    </DishCard>
  </div>
)

export default Dish
