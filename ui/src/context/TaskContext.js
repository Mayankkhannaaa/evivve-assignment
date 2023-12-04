// src/context/TaskContext.js
import React, { createContext, useReducer, useContext } from 'react';

// Initial state
const initialState = {
  tasks: [],
};

// Action types
const ADD_TASK = 'ADD_TASK';
const EDIT_TASK = 'EDIT_TASK';
const DELETE_TASK = 'DELETE_TASK';

// Reducer function
const taskReducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        tasks: [...state.tasks, action.payload],
      };
    case EDIT_TASK:
      const updatedTasks = state.tasks.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
      return {
        tasks: updatedTasks,
      };
    case DELETE_TASK:
      const filteredTasks = state.tasks.filter(
        (task) => task.id !== action.payload
      );
      return {
        tasks: filteredTasks,
      };
    default:
      return state;
  }
};

// Context
const TaskContext = createContext();

// Custom hook for using the context
const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};

// Provider component
const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  const addTask = (task) => {
    dispatch({ type: ADD_TASK, payload: task });
  };

  const editTask = (task) => {
    dispatch({ type: EDIT_TASK, payload: task });
  };

  const deleteTask = (taskId) => {
    dispatch({ type: DELETE_TASK, payload: taskId });
  };

  return (
    <TaskContext.Provider
      value={{ tasks: state.tasks, addTask, editTask, deleteTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export { TaskProvider, useTaskContext };
