import Joi from 'joi'
import { CreateMain, UpdateMain } from '../dto/Main'

export const createPetSchema: Joi.ObjectSchema<CreateMain> = Joi.object().keys({
  name: Joi.string().required(),
  type: Joi.string().required(),
  birth: Joi.date().required(),
  photo: Joi.string().uri()
})

export const updatePetSchema: Joi.ObjectSchema<UpdateMain> = Joi.object().keys({
  name: Joi.string(),
  type: Joi.string(),
  birth: Joi.date(),
  photo: Joi.string().uri()
})