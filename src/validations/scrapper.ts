import Joi from "joi";

export const scrapperPostBody = Joi.object()
  .keys({
    search: Joi.string().required(),
    page: Joi.number().integer().min(1).default(1).required(),
  })
  .required();
