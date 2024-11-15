import React, { useState } from 'react';

interface TaskInputProps {
  addTask: (title: string, priority: string) => void;
  onSearch: (query: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ addTask, onSearch }) => {
  const [title, setTitle] = useState<string>('');
  const [priority, setPriority] = useState<string>('Low');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleAdd = () => {
    if (title.trim()) {
      addTask(title, priority);
      setTitle('');
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="task-input">
      <input
        type="text"
        value={title}
        placeholder="Add a task"
        onChange={e => setTitle(e.target.value)}
      />
      <select value={priority} onChange={e => setPriority(e.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button onClick={handleAdd}>Add Task</button>
      <input
        type="text"
        value={searchQuery}
        placeholder="Search tasks"
        onChange={handleSearch}
      />
    </div>
  );
};

export default TaskInput;
