import React, { useState } from 'react';

const FormTodo = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (taskName.trim() === '') return;
    addTask(taskName);
    setTaskName('');
  }

  return (
    <div>
      <form
        className='flex items-center justify-center'
        onSubmit={handleSubmit}
      >
        <input
          className='input input-bordered border-2 mr-2 w-full max-w-xs'
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          type='text'
          placeholder='e.g. learn react'
        />
        <button className='btn-sm btn btn-outline' type='submit'>
          +
        </button>
      </form>
    </div>
  );
};

export default FormTodo;
