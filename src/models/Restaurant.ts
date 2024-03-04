class Restaurant {
  category: string
  description: string
  image: string
  infos: string[]
  title: string
  grade: string
  id: number

  constructor(
    id: number,
    category: string,
    description: string,
    image: string,
    infos: string[],
    title: string,
    grade: string
  ) {
    this.id = id
    this.category = category
    this.description = description
    this.image = image
    this.infos = infos
    this.title = title
    this.grade = grade
  }
}

export default Restaurant
