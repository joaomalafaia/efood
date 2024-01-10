export const getTotalPrice = (items: Dish[]) => {
  return items.reduce((accumulator, currentItem) => {
    return (accumulator += currentItem.preco)
  }, 0)
}

export const parseToBrl = (amount = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}
