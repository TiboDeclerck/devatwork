import Joi from 'joi';

const categorySchema = Joi.object({
  id: Joi.number().optional(),
  name: Joi.string().required().messages({
    'any.required': 'Category name is required',
  }),
  createdAt: Joi.date().default(() => new Date()),
  updatedAt: Joi.date().default(() => new Date()),
});

export default categorySchema;
