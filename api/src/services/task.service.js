// services/task.service.js

const { Task } = require('../models');

/**
 * Create a task
 * @param {Object} taskBody
 * @returns {Promise<Object>}
 */
const createTask = async (taskBody) => {
  const task = await Task.create(taskBody);
  return task;
};

/**
 * Query tasks with userId filter
 * @param {Object} filter - Filter criteria for tasks
 * @param {Object} options - Pagination and sorting options
 * @returns {Promise<Object>}
 */
const queryTasks = async (filter, options) => {
  const tasks = await Task.findAll({
    where: {
      ...filter,
    },
    ...options,
  });

  return tasks;
};

/**
 * Get task by ID
 * @param {string} taskId
 * @returns {Promise<Object>}
 */
const getTaskById = async (taskId) => {
  const task = await Task.findByPk(taskId);
  return task;
};

/**
 * Update task by ID
 * @param {string} taskId
 * @param {Object} updateBody
 * @returns {Promise<Object>}
 */
const updateTaskById = async (taskId, updateBody) => {
  const task = await Task.findByPk(taskId);
  if (!task) {
    return null; // Task not found
  }

  await task.update(updateBody);
  return task;
};

/**
 * Delete task by ID
 * @param {string} taskId
 * @returns {Promise<void>}
 */
const deleteTaskById = async (taskId) => {
  const task = await Task.findByPk(taskId);
  if (task) {
    await task.destroy();
  }
};

module.exports = {
  createTask,
  queryTasks,
  getTaskById,
  updateTaskById,
  deleteTaskById,
};
