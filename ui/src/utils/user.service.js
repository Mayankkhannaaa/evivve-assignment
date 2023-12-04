// services/task.service.j
import { instance } from './axiosInstance';

export const getSelf = () => {
  return instance.get('/users/getSelf');
};
