import Joi from 'joi';
import categorySchema from './category.js'; 
import supplierSchema from './supplier.js'; 

const productSchema = Joi.object({
  id: Joi.string().optional(),
  name: Joi.string().required().messages({
    'any.required': 'Product name is required',
  }),
  price: Joi.number().min(0).required().messages({
    'any.required': 'Product price must be a non-negative number',
  }),
  category: categorySchema.required().messages({
    'any.required': 'Product category is required',
  }),
  supplier: supplierSchema.required().messages({
    'any.required': 'Product supplier is required',
  }),
  stockQuantity: Joi.number().default(0),
  description: Joi.string().default(''),
  SKU: Joi.string().default(''),
  createdAt: Joi.date().default(() => new Date()),
  updatedAt: Joi.date().default(() => new Date()),
});

export default productSchema;
