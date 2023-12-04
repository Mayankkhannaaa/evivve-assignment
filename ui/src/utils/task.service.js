// services/task.service.j
import { instance } from './axiosInstance';

const TaskServce = {
  createTask: (taskData) => {
    return instance.post('/tasks/create', taskData);
  },

  getTasks: (status) => {
    return instance.get('/tasks/get-tasks');
  },
  getTaskById: (taskId) => {
    return instance.get(`/tasks/${taskId}`);
  },

  updateTaskById: (taskId, taskData) => {
    return instance.post(`/tasks/update/${taskId}`, taskData);
  },

  deleteTaskById: (taskId) => {
    return instance.delete(`/tasks/${taskId}`);
  },
};

export default TaskServce;
