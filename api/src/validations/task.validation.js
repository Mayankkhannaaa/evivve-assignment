const Joi = require('joi');

const create = {
  body: Joi.object().keys({
    description: Joi.string().required(),
    status: Joi.string(),
  }),
};

const updateById = {
  params: Joi.object().keys({
    taskId: Joi.required(),
  }),
};

const getTasks = {
  query: Joi.object().keys({
    status: Joi.string(),
  }),
};

const deleteById = {
  params: Joi.object().keys({
    taskId: Joi.required(),
  }),
};

module.exports = {
  create,
  updateById,
  getTasks,
  deleteById,
};
