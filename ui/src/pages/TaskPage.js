// src/components/TaskPage.js
import React, { useEffect, useState } from 'react';
import TaskServce from '../utils/task.service';

const TaskPage = () => {
  const [taskText, setTaskText] = useState('');
  const [editTaskId, setEditTaskId] = useState(null);

  const [taskList, setTaskList] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (taskText.trim() === '') return;
    try {
      if (editTaskId === null) {
        await TaskServce.createTask({
          description: taskText,
          status: 'in_progress',
        });
      } else {
        await TaskServce.updateTaskById(editTaskId, { description: taskText });
        setEditTaskId(null);
      }
      setTaskText('');
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await TaskServce.deleteTaskById(id);
    } catch (error) {
      console.log('====================================');
      console.log(error);
      console.log('====================================');
    }
  };

  const handleEdit = (taskId, taskText) => {
    setEditTaskId(taskId);
    setTaskText(taskText);
  };

  const getAllTasks = async () => {
    try {
      const res = await TaskServce.getTasks();
      setTaskList(res.data);
    } catch (error) {}
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  return (
    <div className='max-w-2xl mx-auto mt-8 p-6 bg-white rounded-md shadow-md animate__animated animate__fadeIn animate__delay-1s'>
      <h1 className='text-3xl font-semibold mb-4 text-center'>
        Task Management
      </h1>
      <form onSubmit={handleSubmit} className='mb-6'>
        <input
          type='text'
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder='Enter task'
          className='border p-2 w-full focus:outline-none focus:ring focus:border-blue-300'
        />
        <button
          type='submit'
          className='mt-2 bg-blue-500 text-white p-2 px-4 rounded transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring focus:border-blue-300'
        >
          {editTaskId === null ? 'Add Task' : 'Edit Task'}
        </button>
      </form>
      <ul>
        {taskList?.map((task) => (
          <li
            key={task.id}
            className='flex items-center justify-between p-3 border-b w-full gap-8'
          >
            <span className='overflow-scroll'>{task.description}</span>
            <span>{task.createdAt}</span>
            <span>{task.updatedAt}</span>
            <span>{task.status}</span>
            <div className='flex space-x-2'>
              <button
                className='p-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 focus:outline-none focus:ring focus:border-yellow-300'
                onClick={() => handleEdit(task.id, task.description)}
              >
                Edit
              </button>
              <button
                className='p-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300'
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskPage;
