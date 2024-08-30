import Joi from 'joi';

const supplierSchema = Joi.object({
  id: Joi.number().optional(),
  name: Joi.string().required().messages({
    'any.required': 'Supplier name is required',
  }),
  createdAt: Joi.date().default(() => new Date()),
  updatedAt: Joi.date().default(() => new Date()),
});

export default supplierSchema;
