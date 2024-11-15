import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { Task } from './types';

const App: React.FC = () => {
  // Initialize tasks from localStorage if available
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Persist tasks in localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title: string, priority: string) => {
    const newTask: Task = { id: Date.now(), title, priority, completed: false };
    setTasks([newTask, ...tasks]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id: number) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortTasks = (criteria: string) => {
    const sortedTasks = [...tasks];
    sortedTasks.sort((a, b) => {
      if (criteria === 'priority') return a.priority.localeCompare(b.priority);
      if (criteria === 'completed') return Number(a.completed) - Number(b.completed);
      return 0;
    });
    setTasks(sortedTasks);
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskInput addTask={addTask} onSearch={handleSearch} />
      <div className='btns'>
        <button onClick={() => sortTasks('priority')}>Sort by Priority</button>
        <button onClick={() => sortTasks('completed')}>Sort by Completion</button>
      </div>
      <TaskList tasks={filteredTasks} deleteTask={deleteTask} toggleComplete={toggleComplete} />
    </div>
  );
};

export default App;










