import cars from "@/data/cars.json"

export default (event) => {
  const { id } = event.context.params
  const car = cars.find((car) => {
    return car.id === parseInt(id)
  })

  if (!car) {
    throw createError({
      statusCode: 404,
      statusMessage: `Car with id ${id} does not exist`
    })
  }

  return car
}