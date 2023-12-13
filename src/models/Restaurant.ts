class Restaurant {
  name: string
  mark: string
  description: string
  image: string
  infos: string[]
  link: string
  id: number

  constructor(
    id: number,
    infos: string[],
    image: string,
    description: string,
    mark: string,
    name: string,
    link: string
  ) {
    this.id = id
    this.infos = infos
    this.image = image
    this.description = description
    this.mark = mark
    this.name = name
    this.link = link
  }
}

export default Restaurant
