const express = require('express');
const validate = require('../../middlewares/validate');
const taskValidation = require('../../validations/task.validation');
const taskController = require('../../controllers/task.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.get('/get-tasks', auth(), validate(taskValidation.getTasks), taskController.getTasks);
router.post('/create', auth(), validate(taskValidation.create), taskController.createTask);
router.post('/update/:taskId', auth(), validate(taskValidation.updateById), taskController.updateTaskById);
router.delete('/:taskId', auth(), validate(taskValidation.deleteById), taskController.deleteTaskById);

module.exports = router;
