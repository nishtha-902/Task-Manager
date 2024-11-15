import React from 'react';
import { motion } from 'framer-motion';
import TaskItem from './TaskItem';
import { Task } from '../types';

interface TaskListProps {
  tasks: Task[];
  deleteTask: (id: number) => void;
  toggleComplete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, deleteTask, toggleComplete }) => {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <motion.div
          key={task.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <TaskItem task={task} deleteTask={deleteTask} toggleComplete={toggleComplete} />
        </motion.div>
      ))}
    </div>
  );
};

export default TaskList;
