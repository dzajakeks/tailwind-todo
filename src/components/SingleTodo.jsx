import React, { useState } from 'react';
import Checkbox from './Checkbox';
import { BsFillTrash2Fill } from 'react-icons/bs';

const SingleTodo = ({
  taskName,
  handleDeleteTodo,
  id,
  checked,
  onToggle,
  handleRenameTodo,
  item,
  setTasks,
  tasks,
}) => {
  const [editTodo, setEditTodo] = useState(false);

  function handleDeleteTodo(id) {
    setTasks(tasks.filter((_, index) => index !== id));
    window.location.reload();
  }

  return (
    <div
      className={`single-todo flex justify-between items-center mx-4 my-1 rounded-md border-r-2 p-2 bg-slate-700 ${
        checked ? 'opacity-30' : ''
      }`}
    >
      <Checkbox checked={checked} onToggle={onToggle} />
      {!editTodo && (
        <>
          <div className='flex justify-between flex-col w-full'>
            <p className='break-all	 max-w-sm mx-2 p-1 rounded-sm bg-slate-800'>
              {taskName}
            </p>
            <p className='text-xs mt-2'>{item.formattedTimestamp}</p>
          </div>
          <button
            className='hover:text-cyan-500 transition-colors p-1 '
            onClick={() => setEditTodo(!editTodo)}
          >
            edit
          </button>
        </>
      )}
      {editTodo && (
        <>
          <form
            onSubmit={(ev) => {
              ev.preventDefault();
              setEditTodo(false);
            }}
          >
            <input
              className='px-2'
              type='text'
              value={taskName}
              onChange={(e) => handleRenameTodo(e.target.value)}
            />
            <button
              className='ml-2 hover:text-cyan-500 transition-colors'
              type='submit'
            >
              submit
            </button>
          </form>
        </>
      )}

      <button onClick={() => handleDeleteTodo(id)}>
        <BsFillTrash2Fill className='hover:text-red-500 transition-colors mx-1 ' />
      </button>
    </div>
  );
};

export default SingleTodo;
