import Joi from 'joi'

const schema = Joi.object({
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ['com', 'net'] },
  }).required(),
  phone: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
  name: Joi.string().required(),
  message: Joi.string().min(20).required(),

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { listingId } = event.context.params

  const { error, value } = schema.validate(body)

  if (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }

  const { email, phone, name, message } = value

  return prism.message.create({
    data: {
      email,
      message,
      phone,
      name,
      listing: parseInt(listingId),
    }
  })