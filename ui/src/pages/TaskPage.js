// src/components/TaskPage.js
import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';

const TaskPage = () => {
  const { tasks, addTask, editTask, deleteTask } = useTaskContext();
  const [taskText, setTaskText] = useState('');
  const [editTaskId, setEditTaskId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() === '') return;

    if (editTaskId === null) {
      addTask({ id: Date.now(), text: taskText });
    } else {
      editTask({ id: editTaskId, text: taskText });
      setEditTaskId(null);
    }

    setTaskText('');
  };

  const handleEdit = (taskId, taskText) => {
    setEditTaskId(taskId);
    setTaskText(taskText);
  };

  return (
    <div>
      <h1>Task Management</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder='Enter task'
        />
        <button type='submit'>
          {editTaskId === null ? 'Add Task' : 'Edit Task'}
        </button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button
              className='p-2'
              onClick={() => handleEdit(task.id, task.text)}
            >
              Edit
            </button>
            <button className='p-2' onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskPage;
