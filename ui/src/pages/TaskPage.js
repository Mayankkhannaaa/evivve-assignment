// src/components/TaskPage.js
import React, { useEffect, useState } from 'react';
import TaskServce from '../utils/task.service';
import TaskComponent from '../components/TaskComponent';
import { getSelf } from '../utils/user.service';
import JwtService from '../utils/jwt.service';

const TaskPage = () => {
  const [taskText, setTaskText] = useState('');
  const [editTaskId, setEditTaskId] = useState(null);
  const [user, setUser] = useState();
  const [taskList, setTaskList] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (taskText.trim() === '') return;
    try {
      const res = await TaskServce.createTask({
        description: taskText,
        status: 'in_progress',
      });
      setTaskList([res.data, ...taskList]);

      setEditTaskId(null);

      setTaskText('');
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = async () => {
    try {
      const res = await getSelf();
      setUser(res.data);
    } catch (error) {}
  };

  const deleteTask = async (id) => {
    try {
      await TaskServce.deleteTaskById(id);
      setTaskList((prevTaskList) =>
        prevTaskList.filter((task) => task.id !== id)
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditState = (taskId) => {
    setEditTaskId(taskId);
  };

  const editTask = async (e, taskText, status) => {
    e.preventDefault();
    if (taskText.trim() === '') return;
    try {
      await TaskServce.updateTaskById(editTaskId, {
        description: taskText,
        status: status,
      });
      setTaskList((prevTaskList) =>
        prevTaskList.map((task) =>
          task.id === editTaskId
            ? { ...task, ...{ description: taskText, status: status } }
            : task
        )
      );
      setEditTaskId(null);

      setTaskText('');
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (e, taskText, status) => {
    editTask(e, taskText, status);
  };

  const getAllTasks = async () => {
    try {
      const res = await TaskServce.getTasks();
      setTaskList(res.data);
    } catch (error) {}
  };

  const logout = async () => {
    JwtService.removeToken();
    window.location.href = '/login';
  };

  useEffect(() => {
    getAllTasks();
    getUser();
  }, []);

  return (
    <div className='max-w-2xl mx-auto p-6 rounded-md shadow-md animate__animated animate__fadeIn animate__delay-1s'>
      <div className='flex justify-between w-full'>
        <h1 className='text-3xl font-semibold mb-8 text-center'>
          Task Management
        </h1>
        <div className=''>
          <h1 className='text-xl font-semibold text-end'>{user?.name}</h1>
          <button
            onClick={logout}
            className='mx-auto w-full rounded transition-all duration-300 transform hover:scale-105 focus:outline-none'
            style={{ color: '#4285F4' }}
          >
            <span className='text-white'>(</span>Log Out
            <span className='text-white'>)</span>
          </button>
        </div>
      </div>
      <form onSubmit={handleSubmit} className='mb-6 '>
        <input
          type='text'
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder='Enter task'
          className='border p-2 w-full focus:outline-none focus:ring bg-black rounded-md focus:border-blue-300'
        />
        <button
          type='submit'
          className='mt-2 mx-auto w-full text-white p-2 px-4 rounded transition-all duration-300 transform hover:scale-105 focus:outline-none'
        >
          Add Task
        </button>
      </form>
      <ul>
        {taskList?.map((task) => (
          <TaskComponent
            handleDelete={deleteTask}
            handleEdit={handleEdit}
            task={task}
            editTaskId={editTaskId}
            handleEditState={handleEditState}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskPage;
