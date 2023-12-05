import React, { useEffect, useState } from 'react';
import moment from 'moment';
import ProgressDisplay from './ProgressDisplay';

const TaskComponent = ({
  task,
  handleDelete,
  handleEdit,
  editTaskId,
  handleEditState,
}) => {
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  const statusColor = {
    in_progress: 'yellow',
    pending: 'red',
    completed: 'green',
  };

  const colorStatus = {
    yellow: 'in_progress',
    red: 'pending',
    green: 'completed',
  };

  const handleColorOptionSelect = (color) => {
    // Implement logic to handle color selection
    setStatus(colorStatus[color]);
  };

  useEffect(() => {
    setStatus(task.status);
    setDescription(task.description);
  }, [task]);

  return (
    <li
      key={task.id}
      className='flex flex-col items-center justify-between p-3  w-full my-4 rounded-md px-4 py-4'
      style={{ backgroundColor: '#090E13' }}
    >
      <div className='justify-between flex w-full align-center pb-4'>
        {editTaskId === task.id ? (
          <textarea
            autoFocus
            className='overflow-scroll bg-inherit'
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        ) : (
          <span className='overflow-scroll'>{task.description}</span>
        )}
      </div>
      <div className='justify-between flex w-full align-center'>
        <div className='flex items-center justify-center gap-2'>
          <span>{moment(task.createdAt).fromNow()}</span>
          {editTaskId === task.id ? (
            <select
              className='p-2 border rounded bg-inherit focus:outline-none focus:border-blue-800'
              defaultValue={statusColor[status]}
              onChange={(e) => handleColorOptionSelect(e.target.value)}
            >
              <option value='red' className='bg-red-500'>
                <div className='bg-red-500 rounded-full h-1 w-1'>Pending</div>
              </option>
              <option value='yellow' className='text-yellow-500'>
                <div className='bg-yellow-500 rounded-full h-1 w-1'>
                  In progress
                </div>
              </option>
              <option value='green' className='text-green-500'>
                <div className='bg-green-500 rounded-full h-1 w-1'>
                  Completed
                </div>
              </option>
            </select>
          ) : (
            <ProgressDisplay status={status} />
          )}
        </div>
        <div className='flex space-x-2 ml-2 items-center'>
          {editTaskId === task.id ? (
            <button
              className='px-2 py-1 text-white rounded-lg border border-gray-300'
              onClick={(e) => handleEdit(e, description, status)}
              style={{ height: '34px' }}
            >
              Save
            </button>
          ) : (
            <button
              className='px-2 py-1 bg-inherit text-white rounded-lg border border-gray-300 '
              style={{ height: '34px' }}
              onClick={() => handleEditState(task.id)}
            >
              Edit
            </button>
          )}
          <button
            className='px-2 py-1 bg-inherit text-white rounded-lg  border border-gray-300 '
            onClick={() => handleDelete(task.id)}
            style={{ height: '34px' }}
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};

export default TaskComponent;
