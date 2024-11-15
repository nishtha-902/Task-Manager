import React from 'react';
import { Task } from '../types';

interface TaskItemProps {
  task: Task;
  deleteTask: (id: number) => void;
  toggleComplete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, deleteTask, toggleComplete }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div onClick={() => toggleComplete(task.id)}>
        <h3>{task.title}</h3>
        <p>Priority: {task.priority}</p>
      </div>
      <button id="del" onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
