import React, { useState, useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Fetch tasks from server on component mount
  useEffect(() => {
    fetch('http://localhost:5000/tasks')
      .then(response => response.json())
      .then(data => setTasks(data));
  }, []);

  // Add new task
  const addTask = () => {
    fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ task: newTask }),
    })
    .then(response => response.json())
    .then(() => {
      setTasks([...tasks, { task: newTask }]);
      setNewTask('');
    });
  };

  // Delete task
  const deleteTask = (id) => {
    fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' })
      .then(() => setTasks(tasks.filter(task => task.id !== id)));
  };

  return (
    <div>
      <h1>To-do List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="New Task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.task}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
